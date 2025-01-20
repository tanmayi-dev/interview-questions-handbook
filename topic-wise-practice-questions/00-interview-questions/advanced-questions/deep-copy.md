# Deep Copy

This is a proposal for a potential new phone screen interview question for candidates

The interviewer should start with a very simple prompt that describes "deep copy" without naming it. Something like this:

_We want to write a function to copy some input, but we want our function to copy it in such a way that the input's properties are also copied, as well as the properties of those properties, and so on..._

I think we want to give some basic example test case code like this:

```js
const source = { foo: { bar: "bar" } };
const target = clone(source);
console.log(source.foo === target.foo); // false
```

At this point the candidate might go in a few different directions:

The candidate might suggest shallow copy with spread syntax or Object.assign

We can test out the example above and see if this kind of copying will work for our test case

The candidate might suggest using JSON.stringify and JSON.parse

Probe the candidate about what use cases this covers, and what use cases it doesn't. We can go ahead and introduce the candidate to the advanced use cases.

The candidate might suggest a recursive solution. We want the candidate to eventually go in this direction. A basic recursive solution might look something like this:

```js
const clone = (source) => {
  // note that typeof null === 'object'
  if (typeof source !== "object" || !source) {
    return source;
  }
  let target;
  if (Array.isArray(source)) {
    target = [];
  } else if (source instanceof Object) {
    target = {};
  } else {
    // hmm, what to do here?
  }
  for (const property in source) {
    target[property] = clone(source[property]);
  }
  return target;
};
```

After this point we want to expand the requirement to cover some additional use cases:

maintain internal reference consistency:

```js
const foo = { bar: "bar" };
const source = { bar: foo, baz: foo };
const target = clone(source);
console.log(source.bar === target.bar); // false
console.log(source.baz === target.baz); // false
console.log(source.bar === source.baz); // true
console.log(target.bar === target.baz); // true
```

handle circular references:

```js
const source = { foo: { bar: "bar" } };
source.foo.baz = source.foo;
const target = clone(source);
```
