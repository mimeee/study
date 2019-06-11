也可以把问题简化成

``` html
    <button id="one">one</button>
    <button id="two">two</button>
    <script>
        $("#one").click(function(){
            var math = Math.random();
            (function(){
                $("#two").click(function(){
                    console.log(math);
                })
            })();
        })
    </script>
```
或者

``` html
    <button id="one">one</button>
    <button id="two">two</button>
    <script>
        $("#one").click(function(){
            var math = Math.random();
            $("#two").click(function(){
                console.log(math);
            })
        })
    </script>
```

``` html
    //解决
    <button id="one">one</button>
    <button id="two">two</button>
    <script>
        $("#one").click(function(){
            var math = Math.random();
            $("#two").off().click(function(){
                console.log(math);
            })
        })
    </script>
```

交叉点击两个按钮，查看console打印变量的情况，就是问题。这个应该不关闭包的事情，就是多次绑定了事件。