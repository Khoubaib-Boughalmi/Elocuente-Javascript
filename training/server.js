const { createReadStream, createWriteStream } = require("fs");
const { stat, readdir, rmdir, unlink } = require("fs/promises");
const { createServer } = require("http");
const { resolve, sep} = require("path");


const methods = Object.create(null);

const server = createServer((request, response) => {
    const method = methods[request.method] || methodForbidden;
    method(request).catch(err => {
        if (err.status) return err;
        return internalServerError;
    }).then(({ status = 200, body = "", contentType = "plain/text" } = {}) => {
        response.writeHead(status, { "content-type": contentType });
        if (body?.pipe)
            body.pipe(response);
        else response.end(body.toString())
    })

});

const methodForbidden = async (_) => {
    return { status: 405, body: "Method not supported", contentType: "plain/text" };
}

const internalServerError = {
    status: 500, body: "Internal Server Error", contentType: "plain/text"
};

const baseDirectory = process.cwd();
function urlPath(url) {
    let { pathname } = new URL(url, "http://d");
    let path = resolve(decodeURIComponent(pathname).slice(1));
    if (path != baseDirectory && !path.startsWith(baseDirectory + sep)) {
        throw { status: 403, body: "Forbidden" };
    }
    return path;
}


methods.GET = async (request) => {
    const path = urlPath(request.url);
    try {
        const stats = await stat(path);
        if (stats.isDirectory())
            return { body: await readdir(path, { encoding: "utf-8" }) };
        else return { body: createReadStream(path) };
    } catch (error) {
        return { status: 405, body: "Content doesn't exist", contentType: "plain/text" };
    }
}

methods.DELETE = async (request) => {
    const path = urlPath(request.url);
    try {
        const stats = await stat(path);
        if (stats?.isDirectory()) {
            await rmdir(path);
        }
        else {
            await unlink(path);
        }
        return { status: 204 };
    } catch (error) {
        return { status: 405, body: "Content doesn't exist", contentType: "plain/text" };
    }
}

const pipeStream = async (from, to) => {
    return new Promise((resolve, reject) => {
        from.on("error", reject)
        to.on("error", reject)
        to.on("finish", resolve)
        from.pipe(to); // syntax: readableStream.pipe(writableStream);
    })
};

methods.PUT = async (request) => {
    const path = urlPath(request.url);
    try {
        writableStream = createWriteStream(path);
        await pipeStream(request, writableStream);
        return { status: 204 };
    } catch (error) {
        return { status: 405, body: "Content doesn't exist", contentType: "plain/text" };
    }
}

server.listen(8000, () => {
    console.log("listening at port:", 8000);
});