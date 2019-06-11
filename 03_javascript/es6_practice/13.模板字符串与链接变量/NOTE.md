#### 模板字符串
- 符号 `\`` (反引号)  
- 作用 格式和书写的没有差别

    ```javascript
        let str = `haha,
            hehe,
            xixix
        `;
        console.log(str);
        //haha,
        //    hehe,
        //    xixix
    ```

#### 链接变量
- 符号 ` ${} `
- 作用 可以在字符串中直接引用变量(必须在模板字符串中)，不需要使用 `+` 来拼接变量  

    ```javascript
        var vari = "hehe";
        var str = "haha " + vari;
        let str1 = `haha ${ vari }`; 
        console.log(str);
        console.log(str1);
    ```