	    //2.初始化select的change事件
    $("#sel_exportoption").change(function () {
        $('table').bootstrapTable('refreshOptions', {
            exportDataType: $(this).val()
        });
        console.log($('table').bootstrapTable('getOptions')['exportDataType']);
    });

    var datas = [
        {
            "id": 0,
            "name": "Item 0",
            "price": "$0",
            "amount": 3
        },
        {
            "id": 1,
            "name": "Item 1",
            "price": "$1",
            "amount": 4
        },
        {
            "id": 2,
            "name": "Item 2",
            "price": "$2",
            "amount": 8
        }
    ];

    $('table').bootstrapTable({
        toolbar: '#toolbar',                //工具按钮用哪个容器
        striped: true,                      //是否显示行间隔色
        cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
        pagination: true,                   //是否显示分页（*）
        sortable: false,                     //是否启用排序
        sortOrder: "asc",                   //排序方式
        queryParams: function (params) {
            var temp = {   //这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的
                limit: params.limit,   //页面大小
                offset: params.offset,  //页码
                departmentname: $("#txt_search_departmentname").val(),
                statu: $("#txt_search_statu").val()
            };
            return temp;
        },//传递参数（*）
        sidePagination: "client",           //分页方式：client客户端分页，server服务端分页（*）
        pageNumber: 1,                       //初始化加载第一页，默认第一页
        pageSize: 2,                       //每页的记录行数（*）
        pageList: [10, 25, 50, 100],        //可供选择的每页的行数（*）
        clickToSelect:true,
        showExport: true,                     //是否显示导出
        exportDataType: "basic",              //basic', 'all', 'selected'.
        exportOptions:{
            ignoreColumn: [0,1,2,3],  //忽略某一列的索引
            fileName: 'SpirentRepairCenterRecords',  //文件名称设置
            worksheetName: 'sheet1',  //表格工作区名称
            tableName: 'SpirentRepairCenterRecords'
        },
        data:datas,    
        columns:dealDBInfo(['id','name','price'])['th']

    })          

    function dealDBInfo(obj) {
        var t = {};
        t['th'] = [];
        t['data'] = [];
        data = {};
        t['th'].push({
            fields: "chosse",
            checkbox:true,
            align: 'center',
            

        },{
            fields: "id",
            title:"id",

        });
        for (var i = 0; i < obj.length; i++) {
            var temp = {};

            temp.field = obj[i];
            temp.title = obj[i];
            if (obj[i] == 'aa') {
                temp.sortable = true;
                temp.width = '50px';
                temp.class = "like";
                temp.events = {
                    'click .like': function(e, value, row, index) {
                        console.log(e);
                        console.log(value);
                    }
                }
            }

                t['th'].push(temp);
                data['id'] = i; 
                data[obj[i]] = i;
            }
            for (var j = 0; j < 10; j++) {
                t['data'].push(data);
            }
            return t;
        }

    $(function () {
        $('button').click(function () {
            console.log($('table').bootstrapTable('getSelections'))
        });
    });