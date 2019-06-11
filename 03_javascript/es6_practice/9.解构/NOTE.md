
## 解构 

解构译为结构分解；通俗的说就是一种通过特定的格式，快捷读取 **对象**或者 **数组**中的数据的方法, 其本质就是模式匹配。  
变量的声明和赋值时一体的，但如果是先声明了变量再进行对象解构赋值则需要加上括号，否则js回你认为{}是一个代码块，而不是解构赋值

- #### 解构的基本用法
    + 语法       
        `let obj = obj`
        `let arr = arr`  

        ```javascript
            var oUser = {
            name: "mimee",
            age: 18
            } 

            function fn(){
                console.log(1);
            }

            let {name,age = fn() ,sex = "f"} = oUser;
            console.log(name); //mimee
            console.log(age);  //18,以上设置age的默认值是 fn, 只有age为 undefined fn才会执行
            console.log(sex);  //f

            //{name:name2 , age:age2} --> { key:nickname }
            let {name:name2 , age:age2} = oUser; 
            console.log(name2); //mimee
            console.log(age2);  //18

            var arr = [10, 20, 30];
            let [a,,c] = arr;
            console.log(a); //10
            console.log(c); //30
        ```

        相当于去 `oUser` 中查找键为 `name`, `age` 的值。 如果不存在的值就是 `undefined`, 也可以赋予默认值。 **数组** 可以使用占位符。

- #### 解构的基本应用
    
    ```javascript
        //例1
            var arr = [ 10, [20, 30], 40];
            let [a, [b, c], d] = arr;
            console.log( a ); //10
            console.log( b ); //20
            console.log( c ); //30
            console.log( d ); //40

        //例2
            let one = 10;
            let two = 20;
            [one, two] = [two, one];
            console.log(one); //two
            console.log(two); //one

        //例3
            let oUser = {
                'name' : "g",
                'age' : 20
            }

            var name = "mimee";
            var age = 10;
            //如果是先声明了变量再进行对象解构赋值则需要加上括号，否则js回你认为{}是一个代码块，而不是解构赋值
            ({ name,age } = oUser);

            console.log(name);  //g
            console.log(age);   //20

    ```

- #### 解构表达式

    ```javascript
        let oUser = {
            'name' : "mimee",
            'age' : "18"
        }
        function show( obj ){
            console.log( obj === oUser );  // true
            console.log( obj.name , obj.age); // mimee , 18
            console.log( name2, age2); //mimee , 18
            console.log(arguments); // oUser
            console.log(arguments.length); //1
        }

        show( { name: name2, age:age2 } = oUser );
    ```

    传递进 `show` 函数的还是指向 `oUser` 的指针，并且只有这一个参数被传进去了( 因为 `arguments.length == 1` 同时 ` obj === oUser `)；但也可以访问到结构后的结果( `name2` , `age2` )；

- #### 解构不定参数去一次性解构多层对象与数组
    
    ```javascript
        //例1
            let arr = [10, 20, 30];
            let [a, ...other] = arr;
            console.log( other ); //[20, 30]

        //例2 ———— 复制数组
                var arr1 = [10, 20, 30, 40, 50];
                var arr2 = [];
            // 1.通过循环遍历
                for(var i = 0; i < arr1.length; i++){
                    arr2.push( arr1[i] );
                }
                console.log(arr2);//Array(5) [ 10, 20, 30, 40, 50 ]

            // 2.通过concat
                arr2 = [].concat( arr1 );
                console.log(arr2);//Array(5) [ 10, 20, 30, 40, 50 ]

            // 3.通过解构
                ([...arr2] = arr1);
                console.log(arr2);//Array(5) [ 10, 20, 30, 40, 50 ]

    ```

    




