function Animal(name, type) {
  this.name = name;
  this.type = type;
}

function Human(name, gender) {
  this.name = name;
  this.gender = gender;
  // this.reason = function() {
  //   console.log(`${this.name} is thinking`);
  // } ==> works but not recommended
}

Human.prototype.reason = function () { // ==> recommended
  console.log(`${this.name} is thinking`);
};

Animal.prototype.run = function () {
  console.log(`${this.name} the ${this.type} is running`);
};

Human.prototype.speak = function () {
  console.log(`${this.name} says im ${this.gender}`);
};

const rabbit = new Animal("Bugz", "cartoon");
const Sam = new Human("Sam", "M");

Sam.reason();

console.log(rabbit.__proto__ === Animal.prototype); // true
console.log(rabbit.__proto__ === Human.prototype); // false
console.log(Object.getPrototypeOf(rabbit).constructor);
console.log(rabbit.__proto__);
console.log(Sam.__proto__);

// display all properties of an object
console.log(Object.getOwnPropertyNames(Object.prototype));

for (let key in Object.prototype) {
  console.log(key);
}


/**
 * The confusion between **properties** and **prototypes** arises because both involve methods and attributes, but they are conceptually and functionally distinct in JavaScript. Let's break it down step by step:

---

### **1. Properties**
**Properties** are attributes or methods that belong **directly** to an object instance. They are defined either:
- Inside the object (literal syntax).
- Inside the constructor function using `this`.
- Dynamically added later to an instance.

#### Example of Properties:
```javascript
function Animal(name) {
  this.name = name; // Property: belongs directly to the object instance.
  this.age = 0;     // Another property.
}

const dog = new Animal("Dog");
dog.breed = "Labrador"; // Dynamically added property.

console.log(dog.name);  // Dog
console.log(dog.age);   // 0
console.log(dog.breed); // Labrador
```

Here:
- `name` and `age` are **properties** defined in the constructor and belong to the `dog` object.
- `breed` is dynamically added and also a **property** of `dog`.

---

### **2. Prototypes**
**Prototypes** are objects from which other objects can inherit. They contain shared methods or attributes that **do not belong directly to an object instance** but are instead accessible through the prototype chain.

#### Example of Prototypes:
```javascript
Animal.prototype.speak = function () {
  console.log(`${this.name} makes a noise.`);
};

const dog = new Animal("Dog");

dog.speak(); // Dog makes a noise
```

Here:
- The `speak` method is **not a property** of `dog`. Instead, it is defined on `Animal.prototype`.
- JavaScript finds the `speak` method through the **prototype chain** when you call `dog.speak()`.

---

### **3. Key Differences Between Properties and Prototypes**

| **Aspect**            | **Properties**                            | **Prototypes**                              |
|------------------------|-------------------------------------------|---------------------------------------------|
| **Where They Are**     | Directly on the object itself.            | On the object's `[[Prototype]]`.            |
| **Access**             | Always available directly on the object.  | Accessed via the prototype chain.           |
| **Shared or Unique?**  | Unique to each object instance.           | Shared among all objects with the same prototype. |
| **Defined By**         | Constructor (`this`) or dynamic addition. | Constructor's `.prototype` or manual modification. |
| **Example**            | `dog.name` (property of `dog`).           | `Animal.prototype.speak` (shared prototype method). |

---

### **4. Combining Properties and Prototypes**
Most objects use both **properties** (for instance-specific data) and **prototypes** (for shared behavior).

#### Example:
```javascript
function Animal(name) {
  this.name = name; // Instance-specific property.
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a noise.`); // Shared method.
};

const dog = new Animal("Dog");
const cat = new Animal("Cat");

dog.speak(); // Dog makes a noise.
cat.speak(); // Cat makes a noise.

console.log(dog.name);   // Dog (property)
console.log(dog.speak);  // Function on the prototype
```

Here:
1. `name` is a **property** of each object (specific to `dog` and `cat`).
2. `speak` is a method defined on `Animal.prototype` (shared among all `Animal` instances).

---

### **5. Why Use Prototypes?**
Prototypes allow shared methods and attributes to avoid duplication:
- If methods were added as properties to every object, each object would have its own copy, which wastes memory.
- Instead, prototypes let objects share a single definition, saving memory and enabling dynamic updates.

#### Example of Shared Methods via Prototypes:
```javascript
Animal.prototype.run = function () {
  console.log(`${this.name} is running.`);
};

dog.run(); // Dog is running.
cat.run(); // Cat is running.
```

If you add or update `Animal.prototype.run`, all `Animal` instances immediately "inherit" the change because they reference the same prototype.

---

### **6. Visualizing the Relationship**
When you create an object via a constructor:

#### The `dog` instance:
```plaintext
dog: {
  name: "Dog",          // Property (instance-specific)
  __proto__: Animal.prototype  // Link to the prototype
}
```

#### The `Animal.prototype` object:
```plaintext
Animal.prototype: {
  speak: function,      // Shared method
  run: function,        // Shared method
  __proto__: Object.prototype
}
```

#### The prototype chain:
```plaintext
dog -> Animal.prototype -> Object.prototype -> null
```

---

### **7. When to Use Properties vs. Prototypes**
- Use **properties** for instance-specific data or behavior (e.g., `name`, `age`).
- Use **prototypes** for shared methods or attributes that apply to all instances of a constructor (e.g., `speak`, `run`).

---

### **Conclusion**
Poperties are about data and behavior specific to an individual object, while prototypes are about sharing behavior across multiple objects. This distinction is central to JavaScript's approach to inheritance and object-oriented programming.
 */