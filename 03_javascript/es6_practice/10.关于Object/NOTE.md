## 关于Object
- object **静态方法** `is` 和 `assign` 的基本用法。
    + `is()`
        * 语法 `Object.is( value1, value2 );`    
            value1:  第一个要比较的值  
            value2:  第二个要比较的值  
        * 返回值: boolean
        * 基本上与 `===` 一样，只有在比较 `NaN`, `+0`, `-0` 不同。

        ```javascript
            //1
            console.log( +0 === -0 ); //true
            console.log( Object.is( +0 , -0 )); //false
            //2
            console.log( NaN === NaN ); //false
            console.log( Object.is( NaN , NaN )); //true
            //3
            console.log( "123" === 123 );  //false
            console.log( Object.is( "123", 123 )); //false
            //4
            console.log( 1 === true ); //false
            console.log( Object.is( 1 , true )); //false
            //5
            console.log( 0 === 0 ); //true
            console.log( Object.is( 0 ,  0)); //true
            //6
            console.log( "string" === "string" ); //true
            console.log( Object.is( "string" , "string" )); //true
            //7
            var arr = [1,2,3];
            var arr2 = [1,2,3];
            console.log( arr === arr2 ); //false
            console.log( Object.is( arr , arr2 )); //false
            //8
            var obj = {'a':"a","b":"b"};
            var obj2 = {'a':"a","b":"b"};
            console.log( obj === obj2 ); //false
            console.log( Object.is( obj , obj2 )); //false
            //9
            console.log( null === null ); //true
            console.log( Object.is( null , null )); //true

        ```

    + `assign()`  
        * 语法： `Object.assign(target, source1, source2, ...)`
        * 返回值： 返回运算后的 `target`
        * 用于合并 / 复制 对象属性, 将 `source` 中的可枚举属性复制到 `target` 上, 它在 `source` 对象中使用 `getter()`，在 `target` 对象中使用 `setter()` 方法。
        * 特点：
            - 如果 `target` 是数值，返回值会把数值转化为对象
            - `target` 是 `null`, `undefined` 会 **报错**
            - `source` 是 `null`, `undefined` 会 **忽略**
            - 复制 `string`, `bool`, `number` 这 3 种基本类型时，只有 `string` 会被当做数组的形式复制到目标对象，其他忽略。
            - 不能枚举的属性不会被拷贝 *
            - 该方法执行的是浅拷贝 *
            - 嵌套的对象同名键会被直接覆盖 *
            - 同名键 (相同索引) 的数组项，后面的把前面的覆盖
            
            ```javascript
                //基本用法
                var target = { 'a' : 'a' };
                var source_1 = { 'b' : 'b' };
                var source_2 = { 'c' : 'c' };
                target = Object.assign(target,source_1,source_2);
                console.log(target) //Object { a: "a", b: "b", c: "c" }

                // 如果 `target` 是数值，返回值会把数值转化为对象
                var target = 123;
                target = Object.assign( target, { 'a': 'a' } ); 
                console.log(target); //Number { 123 }
                console.log(target['a']); //a
                console.log(typeof target); //object    

                //`target` 是 `null`, `undefined` 会 **报错**  
                var target = null;
                Object.assign(target,{ 'a' : 'a' }); //TypeError: can't convert null to object      

                //`source` 是 `null`, `undefined` 会 **忽略*
                var target = { 'a' : 'a' };
                target = Object.assign(target,undefined); //忽略
                console.log(target); //Object { a: "a" }

                //复制 `string`, `bool`, `number` 这 3 种基本类型时，只有 `string` 会被当做数组的形式复制到目标对象，其他忽略。
                var target = { 'a' : 'a' };
                target = Object.assign(target,8520,"hehe",true,8520); 
                console.log(target); //Object { 0: "h", 1: "e", 2: "h", 3: "e", 10: "a" }
            ```
        * 应用
            - 为对象添加属性

                ```javascript
                    function createObj( name, age ){
                        //ES6 写法，键值相同可简写
                        Object.assign( this, { name, age } );
                        Object.assign( this, { names: name, ages: age } );
                    }
                    var obj = new createObj( 'mimee', 10 );
                    console.log( obj ); //Object { name: "mimee", age: 10, names: "mimee", ages: 10 }
                ```

            - 为对象添加方法
                
                ```javascript
                   function createObj( name, age ){
                        //ES6 写法，键值相同可简写
                        Object.assign( this, { name, age } );
                        Object.assign( this, { names: name, ages: age } );
                    }
                    //这样为createObj 添加方法，不会覆盖其原型指向构造函数的指针
                    Object.assign( createObj.prototype, {
                        showInfo(){
                            alert(123);
                        }
                    })
                    var obj = new createObj( 'mimee', 10 );
                    obj.showInfo(); //123
                ```

            - 克隆对象
            - 合并对象( 插件开发中，向插件传入配置选项 )

                ```javascript
                   let merge = (target, ...source) => Object.assign(target, ...source);               
                   console.log(merge({},{a:2},{b:4})) //Object { a: 2, b: 4 }
                ```

- `Object` 的 `key`, `values`, `entries`, 以及描述符
    + 对象的属性描述符

        首先对象的 **属性描述符**用于描述对象的各种特征的。其对象只能在 `Object.defineProperty()` 或者 `Object.defineProperties()` 中使用。其属性有：

        * 数据属性
            1. `Configurable`( `boolean = true` )  
                可配置性，是否可以删除该属性。
            2. `Enumerable`( `boolean = true` )  
                可枚举性，是否可以打印出来( 比如使用 `for..in..`)。
            3. `Writable` ( `boolean = true` )  
                可写性，是否可以修改该值
            4. `Value`  
                属性的值
        * 访问器属性
            1. `Configurable`( `boolean = true` ) 可配置性
            2. `Enumerable`( `boolean = true` ) 可枚举性
            3. `getter()`( `undefined` ) 读取该属性时调用该函数
            4. `setter()`( `undefined` ) 写入属性时调用该函数
        * 描述符方法
            1. `Object.getOwnPropertyDescriptor(object, propertyName)`  
                用于查询属性的描述符，并用对象返回  

                ```javascript
                var fn = function(){
                    this.a = "a";
                    this.b = "b";
                }

                fn['kkk'] = 123;

                fn.prototype.one = function(){
                    console.log('one');
                }

                console.log(typeof fn); //function
                console.log(fn instanceof Object); //Object


                console.log(Object.getOwnPropertyDescriptor( fn , 'kkk' ));
                //Object { value: 123, writable: true, enumerable: true, configurable: true }
                console.log(Object.getOwnPropertyDescriptor( fn.prototype , 'one' ));
                //Object { value: one(), writable: true, enumerable: true, configurable: true }

                ```

            2. `Object.defineProperty(object,propertyname, descriptor)`
                用于创建或配置对象的一个属性的描述符，返回配置后的对象  

                ```javascript
                var fn = function(){
                    this.a = "a";
                    this.b = "b";
                }

                fn['kkk'] = 123;

                fn.prototype.one = function(){
                    console.log('one');
                }

                Object.defineProperty(fn.prototype,'two',{
                    configuration: true,
                    enumberable:true,
                    writable:false,
                    value:function(){
                        console.log('this is two function');
                    }
                })
                console.log(fn.prototype);
                //constructor: function fn()
                //one: function one()
                //two: function value()

                ```

            3. `Object.defineProperty(object,descriptors)`  
                用于创建或者配置对象的多个属性的描述符，返回配置后的对象  

                ```javascript
                    var obj = {};
                    Object.defineProperties(obj,{
                        one:{
                            configuration: true,
                            enumberable:true,
                            writable:false,
                            value:'one'
                        },
                        three:{
                            configuration: true,
                            enumberable:true,
                            writable:false,
                            value:function(){
                                console.log('this is three function');
                            }
                        }
                    })
                    //Object { … }
                    // one: "one"
                    // three: function value()
                ```

            4. `Object.create( proto, descriptors )`  
                使用指定的原型和属性回来创建一个对象  
    
    + `Object.keys()`
        返回值： 参数对象自身所有( **不含继承** ) **可遍历** 的属性的键名的 **数组**。 *其和 `for..in..` 有区别, `for..in..` 会考虑继承的属性*
    + `Objext.values()`
        返回值： 参数对象自身所有( **不含继承** ) **可遍历** 的属性的值的 **数组**。 *其和 `for..in..` 有区别, `for..in..` 会考虑继承的属性*
    + `Object.entries()`   
        返回值： 参数对象自身所有( **不含继承** ) **可遍历** 的属性的键值对的 **数组**。 *其和 `for..in..` 有区别, `for..in..` 会考虑继承的属性* 
    + `Object.getPrototypeOf(obj)`  
        其就是等于 `obj.__proto__`, 因为 `__proto__` 并没有标准，所以 ES6 的 `Object.getPrototypeOf(obj)` 作为获取对象原型对象的标准API。

        ```javascript
            //注意区别区别
            console.log(Object.getPrototypeOf(Object)); //function ()        
            console.log(Object.__proto__); //function ()
            console.log(Object.prototype); //Object { … }
        ```
    + `Object.setPrototypeOf()`
        为现有对象设置原型，返回一个新对象。

        ```javascript
            function Person(name) {
                this.name = name;
            }

            //等同于将构造函数的原型对象赋给实例对象p的属性__proto__
            var p = {};
            console.log(p.constructor); //function Object()
            p = Object.setPrototypeOf(p,Person.prototype);
            console.log(p.constructor); //function Person()
        ```

        这样 *实例*的属性 `__proto__` 就指向了构造函数的原型，这样就形成了原型链，当在实例中找不到属性或方法时，就通过原型链进行查找。
    
    + `__proto__`
        属性 `__proto` 是实例化对象后，由各个浏览器各自实现的属性。它指向构造函数的 **原型对象**。  

        ```javascript
            function CreateFunction(){};
            var obj = new CreateFunction();
            console.log(obj.__proto__ === CreateFunction.prototype); //true
            // Object.setPrototypeOf(obj,CreateFunction.prototype) 与
            // obj.__proto__ = CreateFunction.prototype 等效。
        ```

    
