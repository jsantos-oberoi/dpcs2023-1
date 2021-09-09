// Unit 01: First programs
// Lesson 03: Data Structures

// Data Structure:
//  A way of storing data along with operations to control that data.


// Counter
//  A data structure that stores a running count of something.
//  (Minimum value of 0.)
//
//  Functions:
//      increment(n): Increase the value of the counter by n (default: 1).
//      decrement(n): Decrease the value of the counter by n (default: 1).

// Encapsulation: Grouping data and the methods that manipulate that data
//                together.

// let data = 0; // initial counter value

// function increment(n) {
//     if (n === undefined) {
//         n = 1;
//     }

//     // data = data + n;
//     data += n;
// }

// function decrement(n) {
//     if (n === undefined) {
//         n = 1;
//     }

//     // data = data - n;
//     data -= n;

//     if (data < 0) {
//         data = 0;
//     }

// }

// console.log(data);
// increment(2);
// console.log(data);
// decrement(30);
// console.log(data);
// increment();
// increment();
// console.log(data);

const counter = {
    data: 0,
    getCount: function() {
        return this.data;
    },
    decrement: function (n) {
        if (n === undefined) {
            n = 1;
        }

        // data = data - n;
        // Special Keyword: this
        //  Refers to the "owner" of the programming code.
        this.data -= n;

        if (this.data < 0) {
            this.data = 0;
        }
    },
    increment: function (n) {
        if (n === undefined) {
            n = 1;
        }

        // data = data - n;
        this.data += n;     
    }    
}

// Stack Data Structure:
//  A LIFO (Last-In-First-Out) data structure that holds a digital 
//  representation of a "stack of items".
//
//  [ COMP SCI]\
//  [ MATH    ] --- Stack of books
//  [ HISTORY ]/
//
//  Example: 
//      The UNDO feature of any program.
//
//
//  Functions:
//      push(element): Add an element to the top of the stack.
//      pop(): Remove (and return) the element at the top of the stack.

// let data = [];
// let t = 0;

// function push(element) {
//     data[t] = element; // <-- add element to the "top" of the stack.
//     t++; // top += 1 OR top = top + 1
// }

// function pop() {
//     let element = data[t - 1];
//     t--; // t -= 1 OR t = t - 1

//     if (t < 0) {
//         t = 0;
//         return undefined;
//     }
    
//     return element;
// }

// console.log(data);
// push(4);
// console.log(data);
// push(7);
// push(3);
// push(2);
// console.log(pop());
// console.log(pop());
// console.log(pop());
// console.log(data);
// push(6);
// console.log(pop());
// console.log(pop());
// console.log(pop());
// console.log(pop());
// push(10);
// console.log(data);

const stack = {
    data: [],
    top: 0,
    push: function(element) {
        this.data[this.top] = element;
        this.top++;
    },
    pop: function() {
        let element = this.data[this.top - 1];

        this.top--;
        if (this.top < 0) {
            this.top = 0;
            return undefined;
        }
        return element;
    }
}

stack.push(4);
stack.push(7);
stack.push(3);
console.log(stack.pop());
console.log(stack.pop());
stack.push(6);
console.log(stack.pop());
console.log(stack.pop());