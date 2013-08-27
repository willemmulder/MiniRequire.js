MiniRequire.js
==============
RequireJS at the size of 2 tweets..!  

```javascript
var require=function(a){return a=function(c,d){var b=[];for(var a=0;a<c.length;a++)b.push(require.i[c[a]]);d.apply(null,b)},a.i={},a}();
var define=function(a,b,c){require(b,function(){require.i[a]=c.apply(null,Array.prototype.slice.call(arguments,0))})};define.amd={jQuery:!0}
```
What can it do?
===============
MiniRequire.js has two functions:
* define(nameA, [nameD,nameE], function(d,e){})
* require([nameA,nameB,nameC], function(a,b,c){})

With define, you define a module. The last argument should be a constructor function that will be executed and stored under the name that you define (nameA in this case). The second argument is a list of dependencies that will be available as arguments in the constructor function.

With require, you require one or more modules. The first argument is a list of module-names. These modules then become available as arguments in the callback function.

Note that require will *not* auto-load scripts. It will just use the modules that are already made available through define.
