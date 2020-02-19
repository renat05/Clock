var peoples = [
  { "attr1": "bob", "attr2": "pizza" },
  { "attr1": "john", "attr2": "sushi" },
  { "attr1": "larry", "attr2": "hummus" }
];

var index = peoples.map(function(o) { return o.attr1; }).indexOf("john");
console.log("index of 'john': " + index);

var index = peoples.map((o) => o.attr1).indexOf("larry");
console.log("index of 'larry': " + index);

var index = peoples.map(function(o) { return o.attr1; }).indexOf("fred");
console.log("index of 'fred': " + index);

var index = peoples.map((o) => o.attr2).indexOf("pizza");
console.log("index of 'pizza' in 'attr2': " + index);

