### babel的安装与使用

    babel是一个编译器，把ES6编译成ES5的语法来兼容低版本的浏览器。

- #### 使用 nodejs 安装 babel  
    - `npm init`  
        初始化一个 package 文件(.json)。
    - `npm install babel-cli -g`  
        安装命令行工具，用于调用转码规则
    - `npm install babel-preset-es2015 --save-dev`  
        本地安装 babel 的转码规则 —— babel-preset-es2015

- #### 创建babel文件的配置文件 .babelrc  
    使用命令行调用 babel 时，编译器会自动搜寻该文件来得到配置信息。在该配置文件中写入初始化的信息：

    ``` json
    {
        "presets":[
            "es2015"
        ],
        "plugins":[]
    }
    ```

- #### 使用命令行执行编译
    + `label lib.js`  
        将lib.js编译的结果在终端中输出
    + `label lib.js -o lib.es5.js`  
        将lib.js编译的结果在文件( lib.es5.js )中输出
    + `label <output filename> -d <output url>`  
        结果在文件中输出, output filename 是需要编译的文件的url, dist 是输出的目标路径
