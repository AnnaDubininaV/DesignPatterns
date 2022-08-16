import { Tag } from './Tag.js';

// just a single paragraph using string concatenation
const hello = 'hello';
let html = [];
html.push('<p>');
html.push(hello);
html.push('</p>');
// console.log(html.join());

// a list with 2 words in it
const words = ['hello', 'world'];
html = [];
html.push('<ul>\n');

for (let word of words) {
  html.push(`  <li>${word}</li>\n`);
}

html.push('</ul>');
// console.log(html.join());

// ordinary non-fluent builder
// const builder = new HtmlBuilder('ul');
const builder = Tag.create('ul');

for (let word of words) {
  builder.addChild('li', word);
}

//console.log(builder.toString());
let tag = builder.build();
console.log(tag.toString());

// fluent builder
builder.clear();
builder
  .addChildFluent('li', 'foo')
  .addChildFluent('li', 'bar')
  .addChildFluent('li', 'baz');
console.log(builder.toString());
