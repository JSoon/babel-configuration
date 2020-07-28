// https://babeljs.io/docs/en/babel-polyfill
// To polyfill ECMAScript features
import "core-js/stable";
// For using transpiled generator functions
// https://codeburst.io/understanding-generators-in-es6-javascript-with-examples-6728834016d5
import "regenerator-runtime/runtime";

const a = {}

const b = a?.hehe ?? 'hehe'

const c = () => {
  const mybook = 'Hello World'
  console.log(mybook)
}

const d = [1, 2, 3]
const [e] = d
const f = [...d]