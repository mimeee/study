## 对象方法的赋值简写与属性计算
- #### 对象的方法赋值简写
    + 方法缩写  
        为一个对象赋予方法(function), 可以省略 `function` 关键字和 `:` 冒号。  

        ```javascript
            {
                //orginal
                a:function(){
                    //todo....
                },
                //now
                aa(){
                    //todo....
                }
            }
        ```
    + 赋值简写  
        对象中的属性与变量名或者参数同名时，可省略赋值操作。

        ```javascript
            let one = 1;
            let two = 2;
            {
                //original
                one:one,
                two:two,
                //now
                one,
                two
            }
        ```

- #### 对象的属性计算
    可以使用变量来代替字符串来获取或者设定变量的值,只要使用 `[]` 中括号括起就可以了。

    ```javascript
        var firstName = "first name";
        var secondName = "second name";
        var obj = {
            [firstName] : 'mimee',
            [secondName] : 'ghost'
        }
        console.log(obj['first name']);
    ```
