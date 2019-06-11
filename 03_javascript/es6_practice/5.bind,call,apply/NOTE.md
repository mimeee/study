## bind, call, apply 的用法
- ### `bind` 绑定
    + 返回值: 返回一个新的 **函数**
    + 语法: `fun.bind(thisArg[, arg1[, arg2[, ...]]])`   
        * `thisArg`: this指针,如果使用 `new` 运算符构造绑定函数，这忽略该值。  
        * `arg1...`: 函数的形参
    + `bind` 的使用示例
        
        ```javascript
        //基本使用
          var module = {
          x: 42,
          getX: function() {
            return this.x;
          }
        }

        var unboundGetX = module.getX;
        console.log(unboundGetX()); // The function gets invoked at the global scope
        // expected output: undefined

        var boundGetX = unboundGetX.bind(module);
        console.log(boundGetX());
        // expected output: 42  
        
        // 配合setTimeOut使用
        function User(){
            this.user = 'user';
        }

        User.prototype.showUser = function(){
            //由showDelay调用时(在setTimeOut),this指针指向改变
            console.log(this);
            console.log(this.user);
        }

        User.prototype.showDelay = function(){
            setTimeout(this.showUser.bind(this),1000);
        }

        var a = new User();
        a.showDelay();
        ```


- ### call
    + 返回值: 返回值是你调用的方法的返回值，若该方法没有返回值，则返回 `undefined。`
    + 语法: `fun.call(thisArg, arg1, arg2, ...)` 
        * `thisArg`
            在fun函数运行时指定的this值。需要注意的是，指定的this值并不一定是该函数执行时真正的this值，如果这个函数处于非严格模式下，则指定为null和undefined的this值会自动指向全局对象(浏览器中就是window对象)，同时值为原始值(数字，字符串，布尔值)的this会指向该原始值的自动包装对象。
        * `arg1, arg2, ...`
            指定的参数列表。
    + 示例 

        ```javascript
        //1
        function Product(name, price) {
          this.name = name;
          this.price = price;

          if (price < 0) {
            throw RangeError(
              'Cannot create product ' + this.name + ' with a negative price'
            );
          }
        }

        function Food(name, price) {
          Product.call(this, name, price);
          this.category = 'food';
        }
        //2
        var animals = [
          {species: 'Lion', name: 'King'},
          {species: 'Whale', name: 'Fail'}
        ];

        for (var i = 0; i < animals.length; i++) {
          (function (i) { 
            this.print = function () { 
              console.log('#' + i  + ' ' + this.species + ': ' + this.name); 
            } 
            this.print();
          }).call(animals[i], i);
        }
        ```

- ### apply
    + 返回值: 调用有指定this值和参数的函数的结果
    + 语法: `func.apply(thisArg, [argsArray])`       
        * `thisArg`  
            可选的。在 func 函数运行时使用的 this 值。请注意，this可能不是该方法看到的实际值：如果这个函数处于非严格模式下，则指定为 null 或 undefined 时会自动替换为指向全局对象，原始值会被包装。
        * `argsArray`  
            可选的。一个数组或者类数组对象，其中的数组元素将作为单独的参数传给 func 函数。如果该参数的值为 null 或  undefined，则表示不需要传入任何参数。从ECMAScript 5 开始可以使用类数组对象。 浏览器兼容性 请参阅本文底部内容。 
    + 示例

        ```javascript
            var numbers = [5, 6, 2, 3, 7];
            var max = Math.max.apply(null, numbers);

            console.log(max);
            // expected output: 7

            var min = Math.min.apply(null, numbers);

            console.log(min);
            // expected output: 2
        ```