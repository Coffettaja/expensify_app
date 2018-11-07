const add = (a, b) => a + b
const generateGreeting = name => `Hello, my name is ${name}!`


// First argument describes what is being tested, the second argument is a function that includes the test cases.
test('should add two numbers', () => {
  const result = add(3, 4)
  expect(result).toBe(7)
})

test('should respond with ones name', () => {
  const result = generateGreeting('Mike')
  expect(result).toBe("Hello, my name is Mike!")
})