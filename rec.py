def find_seq(target):
  return find(target, [1])

def find(target, seq):
  if calculate_sum(seq) == target:
    return seq
  if calculate_sum(seq) > target:
    return []
  
  result = find(target, seq + [3])
  if result:
    return result
  result = find(target, seq + [5])
  if result:
    return result
  return []
  

def calculate_sum(seq):
  sum = 1
  print(seq)
  for item in seq:
    if item == 3:
      sum *= 3
    elif item == 5:
      sum += 5
  return sum

def main():
  print(find_seq(13))
  
  
main()