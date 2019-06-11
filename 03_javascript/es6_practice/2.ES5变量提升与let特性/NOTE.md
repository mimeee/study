- ## `let`关键字
    
    + `let` 关键字所定义的地方被视为块级作用域。其特点：
        * `let` 定义的变量不会进行变量提升
        
            ```javascript
            function isRise(){
                console.log(sVar); //没有报错，但sVar为 undefined
                console.log(sLet); //报错， sLet is not defined

                var sVar = 'aaa';
                let sLet = 'bbb';
            }
            isRise();
            ```

        * {}为块或者函数
        
            ```javascript 
            {         
                let i = 1;
            }
            console.log(i); //i is not defined ---> let所在的大括号形成了块级作用域
            ```

        * 在同一个作用域下，let不能重复定义两个同名的标识符
        
        ```javascript
        function isRise(){
            var sVar = 'aaa';
            var sVar = 'aaa';
            console.log(sVar); //aaa
            
            let sLet = 'bbb';
            let sLet = 'bbb';
            console.log(sLet); //报错， Identifier 'sLet' has already been declared
        }
        isRise();
        ```

        * 在不同作用域下可以使用同名的标识符
        
        ```javascript
        let a = 123;
        {
            let a = 'aaa';
            console.log(a); // aaa
        }
        console.log(a); // 123  
        ```

    + `var`全局掩盖与 `let`的经典应用
        * 全局掩盖
            `var` 在全局作用域下，会把属性绑定到window上，从而可能产生覆盖属性的隐患；  
            `let` 只会隐蔽它，不会覆盖window上的同名属性

            ```javascript
                window.slet = 'let';
                window.svar = 'var';

                let slet = 'let-inner';
                var svar = 'var-inner';

                console.log(slet); //let-inner
                console.log(window.slet);//let
                console.log(svar); //var-inner 
                console.log(window.svar); //var-inner 
            ```
        * 应用:循环打印绑定点击事件的索引

            ```html
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
            ```
            
            ```javascript
            //源程序
            var aBtn = document.querySelectorAll('button');
            for(var i = 0;i < aBtn.length;i++){
             aBtn[i].onclick = function(){
                 alert(i);
             }
            }

            // 改1：给每个btn绑定不同的index
            // for(var i = 0;i < aBtn.length;i++){
            //  aBtn[i]['index'] = i; 
            //  aBtn[i].onclick = function(){
            //      alert(this.index);
            //  }
            // }
            

            // 改2:使用闭包
            // for(var i = 0;i < aBtn.length;i++){
            //  (function(param){
            //      aBtn[param].onclick = function(){
            //          alert(param);
            //      }
            //  })(i)
            // }

         
            // 改3:使用let
            // for(let i = 0;i < aBtn.length;i++){
            //     aBtn[i].onclick = function(){
            //         alert(i);
            //     }
            // }
            ```
    