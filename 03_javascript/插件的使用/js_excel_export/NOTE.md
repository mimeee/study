# 使用js导出简单的excel
- 方法1：将表格导出为excel
    + 首先将要打印的内容以表格的形式显示
    + 为下载资源创建一个 URI  
    + 将要打印的表格放至模板中
    + 对模板进行编码放至 URI 后
    + 将 URI 赋给一个超级链接
    + (示例)[example/excel.two.html]
- 方法2：将表格导出为excel
    + 获取要打印的HTML模板
    + 将要打印的变量作为 data 传给构造函数 Blob, 并且设定媒体格式等。
    + 利用URL.createObjectURL()方法为a元素生成blob URL
    + 将 URL 赋给一个超级链接
    + (示例)[example/excel.one.html]
- 以上两种方法大同小异, 改变样式可以使用 css 。 在 excel 中默认的行高单位为磅, 列宽默认的单位字符宽度。  
默认列宽是是8.38个字符宽度(64px)，默认行高是12.75磅(17px)，在 ppi = 200的时候。 可以将鼠标单击 !()[width.png] 查看具体的长度。  
单位的默认转换为:   
1xp = 3/4磅 = 127/480毫米 = 1/16十二点活字 = 127/4800厘米 = 1/96英寸 


# 使用js导入excel为json数据
- 需要用到 [js-xlxs](https://github.com/SheetJS/js-xlsx) 插件 
- 关于 [`FileReader`](https://www.javascripture.com/FileReader)
    + FileReader 是继承 [Blob](https://www.javascripture.com/Blob)  
        Blob 是一个可以存储二进制文件的容器，使用 new 的方式来实例化一个对象
    + FileReader 读取文件的四种方式
        * readAsArrayBuffer(blob : Blob)：将文件读取为ArrayBuffer
        * readAsDataURL(blob : Blob)：将文件读取为Data URL
        * readAsText(blob : Blob, [encoding : String])：将文件读取为文本，encoding缺省值为'UTF-8'
        * readAsBinaryString(blob : Blob)：将文件读取为二进制字符串
    + 导入方法
        * 实例化一个 FileReader 对象
        * 根据需求决定以何种方式来读取文件(比如转化为二进制等)
        * 使用 XLSX 对其进行读取
        * [例子](example/excel.import.html)，第一行作为键输出
            
