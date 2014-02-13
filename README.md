is
==

Adds type knowledge to javascript objects
###Usage
```js
var a = "5";
var b = 5;
var c = "five";

a.is.truthy;  //true
a.is.number;  //false
a.is.numeric; //true
a.is.string;  //true
a.is.object;  //false

b.is.number;  //true
b.is.numeric; //true

c.is.string;  //true
c.is.numeric; //false
```

###Types available
```
truthy
falsey
number
numeric
bool
string
null
undefined
int
number
array
object
function
NaN
```
