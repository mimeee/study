## 箭头函数
- 基本用法
    `let show = () => { console.log('hehe'); };`  
    + `show` 函数名
    + `()` 里面写函数参数，如果只有一个参数可以不写圆括号如 ` a => { alert(a); }`
    + `{ console.log }` 函数体。如果只写一句,大括号可以被省略,同时返回该值。如 `a => a + 1 `, 则返回 `a + 1`;
- 特性  
    深入了解可以翻阅书籍 *[understanding ECMAScript2015](https://www.bookstack.cn/read/understandinges6-simplified-chinese/README.md)* 
    + 不能使用 `new` 关键字调用  
        `new` 关键字所做的工作主要是：
        * 创建一个 `function` 
        * 将 this 指针指向这个 `function`
        * 执行构造函数（就是运行 `constructor` 里的代码去进行赋值或者其他操作）
        * 返回该 Function
    + 没有原型
        由于不可以实例化，所以就没有指向原型的指针 —— `prototype` 属性。
    + 没有arguments对象
    + 箭头函数的 `this` 取决于他的上层 **非箭头函数** 的 this 指向。`call`、`apply`、`bind` 不可以改变箭头函数的 `this` 指向。
- 示例
    + [箭头函数的 `this`](test.html)
    + [使用箭头函数制作选项卡](test1.html)