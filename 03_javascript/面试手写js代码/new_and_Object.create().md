## new 与 Object.create() 的区别
- `new` 干了啥
    + 创建一个全新的对象
    + 把创建新对象的 `[[prototype]]` 属性，并指向所 `new` function 原型对象。 ( `[[ prototype ]]` 可以通过属性 `__proto__` 属性访问，但是该属性并不是标准，而是浏览器厂商自己实现的)。
    + 将 `this` 指针指向这个对象
    + 返回这个对象 
- `Object.create()` 干了啥
    `Object.create()` 方法创建一个新对象，并使用现有的对象来提供新创建对象的 `__proto__`, 其关键代码如下：

    ```javascript
        Object.create = function(o){
            var F = function(){};
            F.prototype = o; //让 F 的 __proto__ 指向 o
            return new F;
        }
    ```

    注意：这里的 `F.prototype = o`, 是让 F 的原型指向 o 所存储的那块内存； 即如果 o 的内容发生改变， F 的 prototype 的内容也会改变，并且和 o 一致。

    如果传入的是实例化对象，就可以通过访问属性( 通过原型链 )来访问传入实例化对象的属性了。

