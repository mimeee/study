# 上传文件总结
    
    今天想到一个上传多个文件的需求，记录一下。

    html代码

    ```html
        <input type="file" id="file">
        <div id="showFileList"></div>
        <button type="button">btn</button>
    ```

    ```javascript
    //使用jquery
    //用来存储每次上传文件的信息
    var aFile = [];


    $("#file").change(function(){
        //获取单个上传文件信息
        var oFile = $(this)[0].files[0];
        $("#showFileList").append("<div data-file='"+aFile.push(oFile)+"'>"+oFile['name']+"</div>");
    })

    //删除要上传的file
    $("#showFileList").click(function(e){
        aFile.splice($(e.target).attr('data-file') - 1 , 1);
        $(e.target).remove();
    })

    function dealFileList(aFiles){
        //创建一个formData表单用来作为所有file信息的载体传输给后台
        //formData的构造函数接受一个formElement的参数
        var formData = new FormData();
        for(var i = 0;i < aFiles.length;i++){
            //使用append方法将file信息附着在form上
            formData.append('file'+i,aFiles[i]);
        }
        return formData;
    }

    $("button").click(function(){
        //使用ajax传值，显示上传文件名
        $.ajax({
            url:'go.php',
            type:'POST',
            data:dealFileList(aFile),
            processData: false,                // jQuery不要去处理发送的数据
            contentType: false,                // jQuery不要去设置Content-Type请求头
            success:function(res){
                console.log(JSON.parse(res));
            }
        })       
    })
    ```
    