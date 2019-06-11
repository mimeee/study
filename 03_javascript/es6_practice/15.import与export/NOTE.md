## import 和 export
- 当一个js文件需要引用另外一个js文件里的函数或者变量的时候，就需要使用 `import` 和 `explore`。
- 例：a.js 文件想要使用 b.js 文件中的 bb 函数。则
    + 在 a.js 中使用 `import`
        ```javascript
            import { bb as b} from b.js; //使用 as 可以取别名
            console.log( b ); 
        ```
    + 在 b.js 中使用 `explore`
        ```javascript
            export function bb(){ return 'b';}
        ```


