## set
- 语法 `let oSet = new Set( array )` 是 ES6 中一种新的数据结构
    + 参数: 接受一个 `array`
    + 返回值： 类似于数组，但是但是其键和值都是唯一的，不存在重复，而且其键值相等。
    + 简单示例 
        
        ```javascript
            //空 set
            var oSet = new Set();
            console.log(oSet); // Set []
            //传入一个 array
            var oSet = new Set([1,3,2,33,3]);
            console.log(oSet); // Set(4) [ 1, 3, 2, 33 ]
            //传入一个节点列表转化的数据
            console.log(document.querySelectorAll("div")); //NodeList(5) [ div, div, div, div, div ]
            console.log([...document.querySelectorAll("div")]); //Array(5) [ div, div, div, div, div ]
            var oSet = new Set([...document.querySelectorAll("div")]); 
            console.log(oSet); //Set(5) [ div, div, div, div, div ]
        ```
    
    + 属性和方法
        * `size`
            返回 `set` 的长度
            ```javascript
            var oSet = new Set([1,3,2,33,3]);
            console.log(oSet); // Set(4) [ 1, 3, 2, 33 ]
            console.log(oSet.size); //4
            ```

        * `add()`
            向 `set` 添加值
            ```javascript
            var oSet = new Set([1,3,2,33,3]);
            console.log(oSet); // Set(4) [ 1, 3, 2, 33 ]
            oSet.add(100)        
            console.log(oSet); // Set(5) [ 1, 3, 2, 33, 100 ]
            ```

        * `delete()`
            删除 `set` 的值
            ```javascript
            var oSet = new Set([1,3,2,33,3]);
            console.log(oSet); // Set(4) [ 1, 3, 2, 33 ]
            oSet.delete(33)        
            console.log(oSet); // Set(3) [ 1, 3, 2 ]
            ```

        * `has()`
            判断 `set` 中是否存在某值 
            ```javascript
            var oSet = new Set([1,3,2,33,3]);
            console.log(oSet); // Set(4) [ 1, 3, 2, 33 ]
            console.log(oSet.has(33)) //true  
            console.log(oSet.has(100)) //false
            ```

        * `clear()`
            清空 `set` 
            ```javascript
            var oSet = new Set([1,3,2,33,3]);
            console.log(oSet); // Set(4) [ 1, 3, 2, 33 ]
            oSet.clear();
            console.log(oSet); // Set []
            ```

- `set` 与 `array`
    + `set` 转化为 `array`
        * `[ ...set ]`
        * `Array.from( set )`

    + `array` 转化为 `set`
        * `new Set( array )`

- `set` 与 `for..in..`
        由于 `set` 的键值对是一样的，所以不方便根据索引来访问值。而使用 `for ... in ...` ，访问不了 `set`;

        ```javascript
            var oSet = new Set([1,3,2,33,3]);
            for(var i in oSet){
                console.log(i) //无打印值
            }
        ```
        
- `set` 的应用
    + 数组去重       
        ```javascript
            let arr = array( 2,3,2,2,3,3,2 );
            let arr2 = [ ...new Set( arr ) ]; 
            console.log( arr2 ); //Array [ 2, 3 ]
        ```

    + 求两个 `set` 的交集，并集，差集
        ```javascript
            var oSet1 = new Set([1,2,3]);
            var oSet2 = new Set([3,4,5]);

            //交集
            let intersection = new Set( [ ...oSet1 ].filter( x => oSet2.has(x) ));
            console.log( intersection ); //Set [ 3 ]

            //差集
            let diffSet = new Set( [ ...oSet1 ].filter( x => !oSet2.has(x) ));
            console.log( diffSet ); //Set [ 1, 2 ]

            //并集
            let unionSet = new Set([...oSet1],[...oSet2]);
            console.log(unionSet); //Set(3) [ 1, 2, 3 ]
        ```

    + 遍历 `set`
        ```javascript
            var set = new Set( [ 1,2,3 ] );
            set = new Set( [...set].map( value => value * 2) );
            console.log(set); //Set(3) [ 2, 4, 6 ]
            set = new Set( Array.from( set, value => value * 2 ) );
            console.log(set); //Set(3) [ 4, 8, 12 ]
        ```

- `set` 的遍历相关的 api
    + `keys()`: 返回键名
        使用 `for ... of ...` 或者 `next()` 来访问结果；
        ```javascript
            let oSet = new Set( [ 1, 2, 3, 2, 1] );
            let oRes = oSet.keys();
            // 这里存在一个指针，怎么充值指针
            console.log( oRes.next() ); //Object { value: 1, done: false }
            for(var i of oRes){
                console.log(i);//2 //3
            }
        ```

    + `values()` 返回值
    使用 `for ... of ...` 或者 `next()` 来访问结果；
        ```javascript
            let oSet = new Set( [ 1, 2, 3, 2, 1] );
            let oRes = oSet.keys();
            // 这里存在一个指针，怎么充值指针
            console.log( oRes.next() ); //Object { value: 1, done: false }
            for(var i of oRes){
                console.log(i);//2 //3
            }
        ```

    + `entries()` 返回键值
    使用 `for ... of ...` 或者 `next()` 来访问结果；
        ```javascript
            let oSet = new Set( [ 1, 2, 3, 2, 1] );
            let oRes = oSet.keys();
            // 这里存在一个指针，怎么充值指针
            console.log( oRes.next() ); //Object { value: (2) [ 1,1 ], done: false }
            for(var i of oRes){
                console.log(i);//Array [ 2, 2 ] //Array [ 3, 3 ]
            }
        ```
    + `forEach` 循环遍历
        ```javascript
            let oSet = new Set( [ 1, 2, 3, 2, 1] );
            oSet.forEach( ( x , y ) => console.log( x , y ) );
            // 1 1 
            // 2 2 
            // 3 3
        ```
    
            
            