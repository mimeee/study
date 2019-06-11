## const
- ### 用途 
    在 ES6 中用于定义常量
- ### 特性
    + 所在区域为块级作用域
    + 声明的时候必须赋予初始化值
    + 声明的标识符不可以重复
    + 不能被重新赋值(不能被重新赋值，并不意味着不能被改变。比如对象)
    + 如果定义的是一个对象，对象里的值可以改变，但该变量只能指向这个对象。
        
        ```javascript
            const obj = {
                'age':12,
                'hobby':'sport'
            }
            console.log(obj);
            obj['age'] = 18;//ok
            console.log(obj);
        ```
        !()[image/const.png]  

        ```javascript
            const obj = {
                'age':12,
                'hobby':'sport'
            }
            obj = {
                'hehe':'haha'
            } //error
        ```
        !()[image/const1.png]  
        我想，这是因为 `obj` 里保存的是一个指针，这个指针指向保存初始 `obj` 里的内存地址。所以只要内存地址不变，地址里放着什么东西，并不重要，可以随意改变。
        而如果重新给 `obj` 赋予一个新的对象，这个对象的存储位置必然不是原来的地址，而是内存中的另外一个位置，所以会报错。

- ### 暂时死区  
    参考 [理解ES6中的暂时死区](https://segmentfault.com/a/1190000008213835)
    + 简介  
        临时死区( **TDZ**: *Temporal Dead Zone* ) 是 ES6 对作用域新的专用语义，直译为  *时间上暂时无法到达的区域*。
    + 作用范围
        **TDZ** 最容出现在 `const` 和 `let` 的使用上面。它是指在声明变量的词法作用域被创建出来的时候该变量也已经被创建出来了，但是，在进行赋值运算之前，该变量是不可以被访问的，而在变量被创建和赋值运算这段期间被称为 **TDZ** —— 暂时死区。 **用于这个创建到赋值过程是动态的，所以 *TDZ* 所抛出的错误是运行阶段的错误**。  

        ```javascript
            {
                //这是块级作用域，该词法作用域被创建出来的时候就x变量就被创建出来了，但是由于没有赋值，所以是TDZ for x
                console.log(x);//在TDZ for x中访问x，抛出错误
                const x = 10;//赋值操作 结束TDZ for x
            }
        ```

        所以可以理解为在ES6中使用 `const` 和 `let` 所声明的变量也被变量提升了，但是这个变量提升与使用 `var` 声明的变量提升不一样。它会形成 **TDZ** 从而抛出 `ReferenceError` ，而后者只会打印出 `undefined`。    

        可参考S6标准中对于let/const声明的章节[Let and Const Declarations](http://www.ecma-international.org/ecma-262/6.0/#sec-let-and-const-declarations)
    + 常见的使用导致 **TDZ**
        * 函数的传参预设值  
            在 ES6 中可以给函数的传参设定默认值。此时也容易误操作导致 **TDZ**。

            ```javascript
                function aa(x = y,y=10){
                    console.log(x);
                }
                aa();//抛出错误 ReferenceError: can't access lexical declaration `y' before initialization
                //即对 x 赋值时需要访问 y，而 y 尚不可以被访问，所以出错。
                
                //验证函数预设值初始化顺序
                function bb(x = (function(){
                    alert('x'); 
                    console.log(this);//window
                    return 3;
                })(),y= (function(){
                    alert('y'); 
                    return 4;
                })()){
                    alert("inner")
                    console.log(x);
                }
                bb();
                // x , y , inner
                
            ```
        * typeof 语句  
            `typeof` 一般会用变量是什么类型的，而这个类型中是包括 `undefined`。所以使用 `typeof` 来判断 `const` 或者 `let` 所声明的变量时，如果判断的位置处于 **TDZ**中会抛出 `ReferenceError` 错误。

            ```javascript
            {
                // TDZ
                console.log(typeof test); // ReferenceError
                const test = 1;
            }
            ```


