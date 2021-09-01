# Unit 01: First programs
## Lesson 02: Storing data

*Example: Evaluating general polynomial functions.*

**Data**: Any information I'll want to use as part of my program.

### Variables
A **variable** a *box* to hold data in.

```
let name = "Santos";
```

The name is a *reference* to a location in memory.

Variables have a **data type**.

In javascript:
- Numbers
- Strings (words, characters, symbols)
- Functions
- Boolean (True/False)

Variables need a name, **identifier**.

Rules:
- Any character, including numbers, $, _ (but shouldn't start with a number).
- Can't be any "reserved" keywords. (let, function, etc.). (`let let = 4;`)

Best Practices:
- Lowercase variables:
--- camelCase
--- underscore_delineated
- Uppercase constants
--- PI
- Stick to the latin characters:
`let hello = "Hello, World";`
`let नमस्ते = "Hello, World";`
- Use meaningful names:
`let height = 110.7;`
`let x = 110.7;`

### Operators:

**Math Operators**:
- Addition: +
- Subtraction: -
- Division: /
- Multiplication: *
- Modulus: %
   (Remainder after division.)

**String Operators**
- Concatenate: +

**Assignment Operators**
- Assignment: = (stores a value in the variable)
- Operator Assignment: (operator)=
    Example: +=, -=, *=, /=, %=
    `n += 4` => `n = n + 4`

**Boolean Operators**
*Operators on True/False values.*
- Negation: ! `!(true)`
- AND: && (return true if both boolean values are true)
- OR: || (return true if at least one boolean value is true)

**Comparison Operators**
*Operators that return True/False value.*
- Equality: `==`
- Not Equal: `!=`
- Greater Than: `>`
- Less Than: `<`
- Greater Than or Equal To: `>=`
- Less THan or Equal To: `<=`

### Constants
Named references to a location in memory whose value cannot change.

In javascript:
`const PI = 3.14159;`


### Arrays
A simple data structure for storing closely related data.

PROS:
- Use the same named reference for all data points.
- Reference individual data points using a numerical index.
- Don't need a preset number of values.