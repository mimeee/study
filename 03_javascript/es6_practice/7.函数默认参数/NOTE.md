## 函数默认参数
- ### 函数默认参数
    在 *ES5* 中不可以直接设定默认的函数参数，一般设定使用以下方法
    
    ```javascript
        function a(various){
            various = various || 10;
            //该表达式的意思是，various转化为布尔值如果为true，就返回various。 
        }
    ```
    而在 *ES6* 中，可以直接在函数的形参中设定默认值

    ```javascript
        function a(various = 10){
            // todo...
        }
    ```

- ### 默认参数与严格模式
    在严格模式下， 
    `arguments` 的赋值只会是第一次初始化的值，不会随着函数体中对形参的改变而改变。

    ```javascript
        function test(t1){
            console.log(t1); //5
            console.log(arguments);//{0:5}
            console.log(t1 == arguments[0]);//true

            t1 = 'name';
            console.log(t1);//name
            console.log(arguments);//{0:name}
            console.log(t1 == arguments[0]);//true
        }
        test(5);
    ```

    ```javascript
        //如果函数的形参使用 ES6 默认值的形式，结果与严格模式一致;
        "use strict";
        function test(t1){
            console.log(t1);//5
            console.log(arguments);//{0:5}
            console.log(t1 == arguments[0]);//true

            t1 = 'name';
            console.log(t1);//name
            console.log(arguments);//{0:5}
            console.log(t1 == arguments[0]);//false
        }
        test(5);     
    ```

    ```javascript
        //如果函数的形参使用 ES6 默认值的形式，结果与严格模式一致;
        function test(t1 = 0){
            console.log(t1);//5
            console.log(arguments);//{0:5}
            console.log(t1 == arguments[0]);//true

            t1 = 'name';
            console.log(t1);//name
            console.log(arguments);//{0:5}
            console.log(t1 == arguments[0]);//false
        }
        test(5);     
    ```

- ### 默认参数中的表达式
    在 ES6 中默认函数的参数可以是表达式，函数返回值等等。  
    注意要是函数返回值，其函数中 `this` 指向的问题，不推荐使用函数返回至作为函数的默认值。

    ```javascript
        function p (a = 1 + 5,b=(function(){return this})()){
            console.log(a);//6
            console.log(b);//window
        }
        p();
    ```
