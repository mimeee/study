- ### 内存越界
    + 题目: 处理 `a.html` 文件时，以下哪行伪代码可能导致内存越界或者抛出异常
    ```c++
        int totalBlank = 0;
        int blankNum = 0;
        int taglen = page.taglst.size();
        for(int i = 1;i < taglen - 1; ++i){
            while(page.taglst[i] == "<br>" && i < taglen){
                ++totalBlank;
                ++i;
            }
            if(totalBlank > 10){
                blankNum += totalBlank;
                totalBlank = 0;
            }
        }

        //以上代码中taglen是html文件中存在元素的个数，a.html中taglen的值是15，page.taglst[i] 取的是 a.html 中的元素。 例如 page.taglst[1] 的值是 <html>
    ```
    ```html
        <!--a.html -->
        <html>
        <title>title</title>
        <body>
        <div>aaaaaaa</div>
        </body>
        </html>
        <br>
        <br>
        <br>
        <br>
        <br>
    ```
    + 解答:
        在使用 && 符号的时候，由于其实短路返回；如 `condition_one && condition_two`, 如果 `condition_one` 的结果为真才回去判断 `condition_two`。  
        在这里 `page.taglst[i] == "<br>" && i < taglen` 会先判断 `page.taglst[i] == "<br>"` 这样就会造成溢出，并不会去判断 `i < taglen`
    + 名词解释: 
        * *内存溢出* 要求分配的内存超过了计算机可以分配的，就是系统不能满足需求
        * *内存越界*  使用一块内存的时候，内容的大小超出了申请的范围
        * *内存泄漏* 使用完内存但不归还内存，并且自己也不能再访问该块内存
        * *缓冲区溢出* 当计算机向缓冲区填充数据时，数据的长度超过了缓冲区本身的容量，移除的数据覆盖在合法数据上。
        * *栈溢出* 由于缓冲区溢出而使得有用的存储单元被改写，往往会引发不可预料的后果

---
- ### 事件冒泡与捕获
    + 事件流: js是以事件驱动来和用户进行交互的，所有有事件流的概念。事件流指的是在一个事件(click)发生的时候，事件以一个怎么样的时序来传递。IE主张的事件流是冒泡，即事件从目标向上传递；Netscape主张的是捕获，即事件从最不具体的元素向具体元素传递。在 *DOM2级事件* 中规定事件流包含三个阶段，捕获->处于目标->冒泡。绑定事件的方法也就需要传递三个参数：
        * 绑定的事件类型
        * 触发的函数
        * 选择在哪个阶段发生该事件(true->捕获阶段，false->冒泡阶段，*事件处于的目标的阶段被规定为属于冒泡阶段*)
    + 应用场景
        * 捕获 
        * 冒泡 - 事件代理
    + [示例](EventPassProcessd.html)

---
- ### HTTP状态码
    + 1 开头，此类状态码表示请求已经收到，需要继续处理，这类响应式临时的，除非在某些实验条件下，否则服务器一般禁止向此类客户端发送 1XX 响应
        * 100 Continue
        * 101 Switching Protocols
        * 102 Processing
    + 2 开头，此类状态码表示成功被服务器接受、理解、接受。
        * 200 ok
        * 202 Accepted
    + 3 开头，此类状态码表示重定向
        * 301 永久重定向
        * 302 临时重定向( Move temporarily )
        * 303 临时重定向( See Other )
    + 4 开头，此类状态表示错误
        * 400(Bad Request) 语义有误，当前情感求无法被服务器理解
        * 401(Unauthorized) 请求需要用户验证
        * 403(Forbidden) 服务器已经理解，但是拒绝执行
        * 404(Not Found) 请求失败，资源不存在
        * 405(Method Not Allowed) 
    + 5 开头，此类状态码表示服务器有误
        * 500( Internal Server Error ) 一般是源代码发生错误
        * 502( Bad Gateway ) 从上游服务器接收到无效的响应

---
- ### DOMContentLoaded事件
    + DOMContentLoaded 是在DOM Tree 加载完成后触发的，这个时候document(包括图片等资源)并没完全加载好。`document.addEventListenr('DOMContentLoaded',fn)`和jQuery的 `$()`,`$(document).ready()`,`$().ready()`等价。  
    但是该事件是W3C定义的，所以IE8以前不支持，低版本IE浏览器特有的doScroll方法，当dom结构没有加载完成时，调用此方法会报错，于是可以通过定时器函数不断的调用此方法，并结合try catch语句来实现判断功能。[参考](https://www.jb51.net/article/132741.htm)
    + onload 是在document文档完全加载好后触发的

---
- ### jquery中选择子元素的方法
    + `children()` 选择直接的子元素，不管子元素的子元素
    + `html()` 得到是字符串
    + `contents()` 得到所有的子元素包括text类型的
    + [示例](jquery_choose.html)

---
- ### 图片请求产生条件
    |     | 产生请求 | 不产生请求 |
    | --- | ------- | --------- |
    | img标签 | 只要给src属性赋值 | 不添加src属性或者属性为"" |
    | backgroud-image | 元素可见或者visibility:hidden | display：none |

---
- ### 在HTML5中的地理定位
    + 在 HTML5 中Geolocation API用于获得用户的地理位置
        * `getCurrentPosition(fn)`返回包含设备当前坐标的一个对象`Coords`
        ```javascript
            navigator.geolocation.getCurrentPosition(function(position){
                console.log(position.coords.latitude);
                console.log(position.coords.longitude);
            })
        ```
        * `watchPostion()`返回用户当前位置，并持续返回用户移动时的更新位置
        * `dearWatch()`停止 `watchPosition()` 方法

---
- ### 运算符优先级
    + 参考:[运算符优先级](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
    + 注意在三元运算符的时候，'+' 与 '?' 的优先级
 
---
- ### 各个类型转换成布尔值的结果
    + js中的数据类型
        * String
        * Numebr(包括整数，浮点数，Infinity，-Infinity，NaN)(64位)
        * Boolean
        * Undefined
        * Null
        * Object
        * Symbol( es6 新增 )
    + 原始值
        值本身无法改变。可能在给一个变量重新赋值的过程中，是将一个变量顶替了另一个变量而不是去改变他。
    + 转换规则
        * 转化成 Number(使用Number()函数)
            - *布尔值* true->1, false->0
            - *null* null->0
            - *undefined* undefined->NaN
            - *字符串* '070'->70, '0x80'->NaN
            - *对象* 调用 valueOf()方法
        * 转化成 Boolean
            - 可以转成fasle的有 *false*,*0*,*null*,*undefined*,*NaN*,*''*
        * null 与 undefined 
            - null == undefined -> true
            - null和undefined不会隐式的转化为其它类型 

---
- ### typeof 的返回值
    + string
    + number
    + object
    + boolean
    + undefined

---
- ### flash通过什么和js交互
    + flash提供一个扩展类 ExternalInterface ，当页面上存在flash控件的时候，通过调用控件上暴露的接口，就可以进行交互了。
    + ExternalInterface 提供两个方法
        * ExternalInterface.addCallback("在js里可调用的flash方法名",flash内方法)
        * ExternalInterface.call("js方法",传给js的参数)   

--- 
- ### 如何判断一个js对象是否是Array, arr为要判断的对象，其中最准确的方法是?
    1. typeof(arr)
    2. arr instanceof Array
    3. arr.toString === '[object Array]'
    4. Object.prototype.toString.call(arr) === '[object Array]'
    + 参考:
        * [js如何判断一个对象是不是Array](http://www.nowamagic.net/librarys/veda/detail/1250)
        * [JavaScript类型检查与内部属性[[Class]]](https://blog.csdn.net/q1056843325/article/details/53080086)
