## JavaScript api 应用练习

**会改变原数组的方法有 `push`,`pop`,`unshift`,`shift`,`reverse`,`splice`,`sort`**

1. ### [toString & valueOf](1.toString&valueOf.html)
    - `toString()`  
        + 将数组转化成字符串，可将多重数组里的内容都打印出来;
        + 对于对象( object )使用的时候，只会转化为 `[object Object]`;
        + 返回值( array, object )的字符类型是 `string`;
        + ` alert() ` 默认在后台调用了该方法。
    - `valueOf()`  
        + 返回对象本身;
        + 返回值( array, object )的字符类型是 `object`;
        
2. ### [join & split ](2.join&split.html)
    - `join()`
        合并数组。数组中如存在 `undefined`, `null` 连接后都为被替代为空格。
    - `split()`
        切割数组，也可以使用正则。
    - 冒充 `join`
        `Array.prototype.join.call("hehehaha", ",")`

3. ### [push & pop & unshift & shift ](3.push&pop&unshift&shift.html)**改变原数组**
    - `push`
        压到栈顶，返回压入后数组长度
    - `pop`
        弹出栈顶的值，返回弹出的值
    - `unshift`
        将数组压入栈底，返回压入后数组长度
    - `shift`
        弹出栈底的值，返回弹出的值
    - 妙用: *清空数组*, *合并数组*

4. ### [concat & reverse](4.concat&reverse.html)
    - `concat()`
        连接 n 个数组;  
        返回一个新的数组, 不改变原数组;  
        **对象没有该方法**。
    - `reverse()`
        将数组反序
        
5. ### [slice](5.slice.html)
    截取数据的一部分, [ 开始位置,结束位置 )。注意
    - DOM 操作获取的节点集合是类数组结构，不是真正的数组,所以不可以调用包括 `slice()` 方法的数组方法 。
    - arguments 是类数组结构，不是真正的数组,所以不可以调用包括 `slice()` 方法的数组方法 。
    - object 可以添加 `length` 属性来模拟数组结构, 从而可以冒充数组来使用数组的方法 。
    - `[].silce.call( oDom , 1 )`
    - `[].slice.call( arguments, 1 )`
    - `[].slice.call( object, 1 )`, 对象使用必须要有 `length` 属性


6. ### [splice & sort](6.splice&sort.html)
    - `splice`
        + `splice(start, end, element)`  
        删除从索引从 start( 包括 ) 到 end 的元素，并且插入 element ; end 的 默认值是数值的长度， element 的默认值是 ""；
        + 返回值：array, 被删除的元素的集合，
    - `sort`
        对数组进行排序，默认是按照 ASCII 码排序。如果是要对数值进行排序，需要传递一个函数，需要有返回值。

7. ### [indexOf & lastIndexOf](7.indexOf&lastIndexOf.html)
    - `indexOf`
        + 正序查找某个字符串是否存在于一个数组中
        + 返回值：一个索引值
    - `lastIndexOf`
        + 反序查找某个字符串是否存在于一个数组中
        + 返回值：一个索引值
    
8. ### [forEach](8.forEach.html)
    - 语法: `array.forEach(function(currentValue, index, arr), thisValue)`
    - 返回值: `undefined`
    - 遍历数组，第一个参数传一个回调，第二个参数传递 `this` 的指向。
    - 类数组如果要是用该方法，必须要有 `length` 属性。
    ```javascript
        var obj = { aa: 2};
        var arr = [ "aa", 1, "vv", 2, 3];
        var res = arr.forEach(function( v, i, arr ){
            console.log(v);//aa,1,vv,2,3
            console.log(this);//Object { aa: 2 },Object { aa: 2 },Object { aa: 2 }...
            return 122;
        },obj)
        console.log(res);//undefined
    ```

9. ### [map](9.map.html)
    - 语法: `array.map(function(currentValue,index,arr), thisValue)`
    - 返回值: `array`
    - 遍历数组，第一个参数传一个回调，第二个参数传递 `this` 的指向。
    ```javascript
        var obj = { aa: 2};
        var arr = [ "aa", 1, "vv", 2, 3];
        var res = arr.map(function( v, i, arr ){
            console.log(v);//aa,1,vv,2,3
            console.log(this);//Object { aa: 2 },Object { aa: 2 },Object { aa: 2 }...
            return 122;
        },obj)
        console.log(res);//Array(5) [ 122, 122, 122, 122, 122 ]
    ```

10. ### [every & some & filter](10.every&some&filter.html)
    - 语法: `array.every(function(currentValue,index,arr), thisValue)`  
        用于检测数组所有元素是否都符合指定条件。检测到一个不满足则停止检测，返回 `false`。
    - 返回值: `bool`
    
    ```javascript
        var index = 0;
        var res = arr.every(function(val){
            index ++;
            return val > 100;
        })
        console.log( index ); //1 访问了 1 个元素就停止了
        console.log( res ); // false
    ```

    - 语法: `array.some(function(currentValue,index,arr),thisValue)`  
        用于检测数组中是否满足指定条件( 函数提供 )，只要有一个满足条件， 剩余的检测就不会执行。 `some()` 不会检测空数组。
    - 返回值: `bool`
    
    ```javascript
       var arr = [1,5,0,6,9,9,522,3,5,2];

        var index = 0;
        var res = arr.some(function(val){
            index ++ ;
            return val > 100;
        })
        console.log( index ); //7 访问了 7 个元素就停止了
        console.log( res ); // true
    ```

    - 语法: `array.filter(function(currentValue,index,arr), thisValue)`  
        创建一个新的数组，包含所有满足条件的元素。
    - 返回值: `array` 符合条件的元素集合
    
    ```javascript
        var index = 0;
        var res = arr.filter(function(val){
            index ++;
            return val > 5;
        })
        console.log(index); //10 访问了所有元素
        console.log(res); // Array(4) [ 6, 9, 9, 522 ]
    ```

11. ### [reduce & reduceRight](11.reduce&reduceRight.html)
    - 语法: `array.reduce(function(total, currentValue, currentIndex, arr), initialValue)`  
        接受一个函数作为累加器，数组中的每个值( 从左到右 ) 开始缩减，最终计算为一个值。直接从索引值为 1 开始访问，索引为 0 的值作为索引为 1 的 total 传递过去。
    - 返回值: 计算结果
    
    ```javascript
        var arr = [2,5,8,44,2,0];
        var res = arr.reduce(function(sums,curentV,currentI,currentArr){
            sums += curentV ;
            return sums;
        })
        console.log(res);//61
    ```

    - 语法: `array.reduceRight(function(total, currentValue, currentIndex, arr), initialValue)`  
        reduceRight() 方法的功能和 reduce() 功能是一样的，不同的是 reduceRight() 从数组的末尾向前将数组中的数组项做累加。 
    - 返回值: 计算结果
    
    ```javascript
        var arr = [2,5,8,44,2,0];
        var res = arr.reduceRight(function(sums,curentV,currentI,currentArr){
            console.log(sums);
            sums += curentV ;
            return sums;
        },100)
        console.log(res);//161
    ```

12. ### [字符串常用API](12.字符串常用API.html)
    - 语法: `str.charAt(index)`  
    - 返回值: 返回指定位置的字符
        ```javascript
            var str = 'abcdefghijk';
            console.log(str.charAt(2));//c
        ```

    - 语法: `str.charCodeAt(index)`  
    - 返回值: 返回指定位置的字符的 unicode 编码
        ```javascript
             var str = 'abcdefghijk';
            console.log(str.charCodeAt(2));//99
            console.log(String.charCodeAt('c'));//99       
        ```

    - 语法: `String.fromCharCode(str)`  
    - 返回值: 将某值的 Unicode 编码转化为字符串。其只能在 `String` 上使用, 其实例没有该方法。 
        ```javascript
            console.log(String.fromCharCode(99));//c
        ```

    - 语法: `str.toUpperCase()`,`str.toLowerCase()`  
    - 返回值: 
        ```javascript
            console.log(str.toUpperCase());//ABCDEFGHIJK
            console.log(str.toLowerCase());//abcdefghijk
        ```

    - 语法: `str.concat()`  
    - 返回值: 返回拼接字符的结果，数组也有该方法
        ```javascript
            var str = 'abcdefghijk';
            var str2 = '123';
            console.log(str.concat(str2));        
        ```

    - 语法: `str.split`  
    - 返回值: 根据指定的符号切分字符串
        ```javascript
            console.log(str.split(""));//Array(11) [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", … ]   
        ```

    - 语法: `str.substr(start,length)`  
    - 返回值: 返回从 start 开始往后数 length 个字符的长度 ( 包括start )
        ```javascript
                console.log(str.substr(0,3)) //abc
                console.log(str.substr(1,-3))// ""
                console.log(str.substr(1)) // bcdefghijk
                console.log(str.substr(-3)) //ijk
        ```

    - 语法: `str.substring(start,stop)`  
    - 参数: 不接受负数, 如果是负数，则将负数变为0，根据参数的大小，截取字符串
    - 返回值: 从 start 到 stop 区间的字符串( 包括start )
        ```javascript
            console.log(str.substring(0,3))//abc
            console.log(str.substring(1,-3))//a
            console.log(str.substring(1))//bcdefghijk
            console.log(str.substring() === str.substring(-3))//true abcdefghijk
        ```

    - 语法: `str.slice(start,end)`  
    - 返回值: 包含从 start( 包括start ) 到 end（不包括end）的 arrayObject 中的元素
        ```javascript
            console.log(str.slice(0,3))//abc
            console.log(str.slice(1,-3))//bcdefgh
            console.log(str.slice(1))//bcdefghijk
            console.log(str.slice(-3))//ijk
        ```

    - 语法: ``  
    - 返回值: 
        ```javascript
        ```

    - 语法: ``  
    - 返回值: 
        ```javascript
        ```

    - 语法: ``  
    - 返回值: 
        ```javascript
        ```

    - 语法: ``  
    - 返回值: 
        ```javascript
        ```
        
    - 语法: ``  
    - 返回值: 
        ```javascript
        ```

    - 语法: ``  
    - 返回值: 
        ```javascript
        ```

    - 语法: ``  
    - 返回值: 
        ```javascript
        ```

    - 语法: ``  
    - 返回值: 
        ```javascript
        ```
    
13. ### [封装函数截取成对标签之间的内容](13.封装函数截取成对标签之间的内容.html)  
14. ### [封装大小写转化函数](14.封装大小写转化函数.html)  
15. ### [正则表达式](15.正则表达式.html)
    - 正则中的元字符  
        ` ( ) [ ] { } \ ^ $ | ? * + . ` 以上字符是正则表达式的元字符，在正则表达式中使用必须进行转义。
    - 正则表达式
        + 字面量 `/s/gim`
        + new ` new RegExp('s','img')` 两个参数都必须是字符串格式的，使用该方式声明正则，由于参数是字符串，所以有时候进行转义的时候需要多重转义。
        ```javascript
            var pattern = /\\n/; // 匹配 \n
            var pa = new RegExp('\\\\n'); // 匹配 \n
        ```
        + 标志
            * `g` 全局模式，不会匹配到一个就停止，而是全部匹配，使用全局模式的时候注意 RegExp 的实例化对象的属性 `lastIndex`，每次匹配是从这个 `Index` 开始向后搜索。
            * `i` 不区分大小写
            * `m` 多行，当到达一行的末尾时仍然会查找下一行。
        + `\1` 和 `$1`
            * `$1` 是保存在对象 RegExp 里的静态属性只有 9 个，即`$1`-`$9`
                ```javascript
                    var pattern = /(\d){2}(\d)(\d)/;
                    RegExp.$1;
                    RegExp.$2;
                    RegExp.$3;
                ```
            *  `\1` 是直接使用在匹配模板中的。
                ```javascript
                    var pattern = /(\d){2}\1./;
                ```
16. ### [正则相关函数](16.正则相关函数.html)
    - test 函数
        + RegExpObject.test(string)
        + 返回值 bool
        + 参数 string
        + 等价于 `r.exec( str ) != null`
    - exec 函数
        + RegExpObject.exec(string)
        + 返回值 找到则返回 `array` 否则返回 `null`
        + 从 `lastIndex` 的值后开始搜索，可以手动将 lastIndex 的归 0。
    - search 函数
        + stringObject.search(regexp/str)
        + 返回值 返回与正则匹配的第一个字符串的位置，没有则返回 -1
        + 全局表示 g 无效，找到就返回。
    - replace 函数
        + stringObject.replace(regexp/substr,replacement)
        + 返回值 str
        + 参数 replacement 可以是 string 也可以是 function
        + 如果参数 regexp 有全局标识，全部替换，否则只替换一个。
        + 在参数 replacement 中 $ 有特殊含义
            * `$1、$2 ... $99` 第一个到第九十九个子表达式相匹配的文本
            * `$&` 与 regexp 相匹配的子串
            * `$\`` 位于匹配子串左侧的文本
            * `$'` 位于匹配子串右侧的文本
            * `$$` 直接量符号
    - match 函数
        + stringObject.match(regexp/str)
        + 返回值 返回存放匹配结果的 array，没有匹配的则返回 null
        + 有 g 标识则返回全局匹配的结果，没有 g 标识则返回一次匹配的结果

17. ### [敏感词过滤封装](17.敏感词过滤封装.html)
18. ### [正则中中括号的用法](18.正则中中括号的用法.html)
19. ### [贪婪与懒惰](19.贪婪与懒惰.html)
20. ### [分组匹配与捕获](20.分组匹配与捕获.html)
