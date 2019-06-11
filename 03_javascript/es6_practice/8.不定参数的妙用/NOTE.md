## 不定参数与展开运算符
- 符号 : `...` 
- 含义
    + 用在形参中，表示传递给函数的参数集合，类似于 `arguments` ，叫做不定参数 
        * 语法: `function aa(...param){//todo...}`
        * 如果函数有多个形参，不定参数必须放在函数形参的最后
            ```javascript
                function tt(param1,param2,...param3){
                    console.log(param1); //5
                    console.log(param2); //3
                    console.log(param3); //Array(3) [ 5, 8, 5 ]
                }
                tt(2,3,5,8,5)
            ```
            拷贝对象
            ```javascript
                var obj = {
                    'name':'mimee',
                    'age':12,
                    'email':'zhang33924@gmail.com'
                }

                function copyObj(obj){
                    var target = Object.create(null);
                    for(var i = 0;i < arguments.length; i++){
                        for(var j in arguments[i]){
                            target[j] = obj[j];
                        }
                    }
                    return target;
                }

                console.log(copyObj(obj));
            ```
    + 用在数组前面可以把数组的值全部打散展开，叫做展开运算符。
        - 语法: 
            ```javascript
                var arr = [1,2,4,67];
                console.log(...arr);
            ```
        - 例
            ```javascript
                //Math.max() 只接受 number 类型
                let arr = [10,50,2];
                console.log(Math.max.apply(Math,arr));
                console.log(Math.max(...arr));
            ```
