# 在工作中使用了的以前没有用过的sql语句或者sql函数

- ### 语句
    + sql语句嵌套查询
        
        ``` sql
                SELECT   
                    {$condition['select']}  
                FROM  
                    (SELECT  
                        $select_field  
                    FROM   
                        good g  
                    left join  
                        (SELECT cc.id,cc.customer_name,cc.customer_number,cc.customer_address,cc.post_code,cp.customer_company FROM customer cc,customer_company cp where cc.customer_company = cp.id) c  
                    on  
                        g.custom_id = c.id  
                    left join   
                        (SELECT r.id,r.receiving_number,rp.receiving_company FROM receiving r,receiving_company rp where r.receiving_company = rp.id) re  
                    on  
                        g.receiving_id = re.id  
                    left join   
                        (SELECT s.id,s.shipping_number,sp.shipping_company,s.ship_to_customer_time FROM shipping s,shipping_company sp where s.shipping_company = sp.id) s  
                    on  
                        g.shipping_id = s.id  
                    left join   
                        operation_group o  
                    on
                        g.group_id = o.id  
                    left join 
                        (  
                        select 
                            id,
                            GROUP_CONCAT(filenameUUID SEPARATOR '|') as filenameUUID,
                            GROUP_CONCAT(filename SEPARATOR '|') as filename,
                            GROUP_CONCAT(description SEPARATOR '|') as description,
                            GROUP_CONCAT(type SEPARATOR '|') as type,
                            main_id 
                        from 
                            linked_img 
                        group by 
                            main_id 
                        ) l
                    on
                        g.id = l.main_id
                    left join 
                        status status
                    on
                        g.status = status.id
                    left join 
                        status rma
                    on
                        g.rma_type = rma.id
                    left join 
                        status special_handle
                    on
                        g.special_handle = special_handle.id
                    left join 
                        responsible_person assign
                    on
                        g.current_assigned_owner = assign.id
                    left join 
                        responsible_person sr_owner
                    on
                        g.sr_owner = sr_owner.id
                    ) g {$condition['where']} {$condition['whereCustom']} {$condition['orderby']} {$condition['limit']}
        ```

    + 根据一个字段的值去查询另一个表中包含该字段的值有多少条记录，主要也是使用了 `group by` 与 ` COUNT() ` 结合。
        
        ``` sql
        SELECT
             *
        FROM 
            operation_group o
        Left Join
            (
            select 
                COUNT(id) as number,
                group_id 
            from 
                good 
            group by 
                good.group_id            
            )g
        ON
           g.group_id = o.id
        ```

    + clone一条数据
        变量 $feild 是除了自增变量(id)以外，good表所有的字段
        ```sql
            INSERT INTO 
                good
            (
                $feild
            ) 
            (
                SELECT 
                    $feild
                FROM 
                    good
                WHERE 
                    id IN ($id)
            )
        ```

        替换某个 field 的值可以使用 REPLACE 

        ```sql
              INSERT INTO 
                    mall_level
                (
                    level_name,
                      level_remark
                ) 
                (
                    SELECT 
                        REPLACE(level_name, 
                                (SELECT 
                                    level_name 
                                FROM 
                                    mall_level 
                                WHERE 
                                    id 
                                IN 
                                    (17)
                                ), 
                                'HEHE'),
                        level_remark
                    FROM 
                        mall_level
                    WHERE 
                        id IN (17)
                )
        ```

        也可以直接在 feild 对应的位置上写值
        
        ```sql
            INSERT INTO 
                good
            (
                title,
                content
            ) 
            (
                SELECT 
                    title,
                    "hehe"
                FROM 
                    good
                WHERE 
                    id IN ($id)
            )
        ```
    + 多个表进行同时查询
        使用 `union` 的时候，查询每个表的列数以及字段类型都必须相同。
        ```sql
        SELECT
            *
        FROM
            (
                SELECT
                    FLAG,
                    SID,
                    ID,
                    NAME,
                    MOBILEPHONE,
                    1 AS userType
                FROM
                    TAB_1
                UNION
                    SELECT
                        FLAG,
                        SID,
                        ID,
                        NAME,
                        MOBILEPHONE,
                        2 AS userType
                    FROM
                        TAB_2
                    UNION
                        SELECT
                            FLAG,
                            SID,
                            ID,
                            NAME,
                            MOBILEPHONE,
                            3 AS userType
                        FROM
                            TAB_3
            ) d
        WHERE
            (
                d.NAME LIKE '%搜索内容%'
                OR d.MOBILEPHONE LIKE '%搜索内容%'
                OR d.ID LIKE '%搜索内容%'
                OR d.SID LIKE '%搜索内容%'
            )
        AND d.FLAG != 3
        ORDER BY
            userType ASC

        ```
    + 多列同时模糊查找
    
        ```sql
            SELECT 
                `jde`,
                `pn`,
                `sn`,
                `sr` 
            FROM 
                good 
            WHERE 
                CONCAT(`jde`,`pn`,`sn`,`sr`) 
            LIKE 
                '%0%'
        ```


- ### 函数
    + `SELECT TIMESTAMPDIFF(DAY, '2018-01-01 00:00:00', '2018-03-01 00:00:00') diff`  
        显示的是两个时间的差异，差异的单位以第一个参数为准。 两个日期相隔59天

        | diff |
        | :---: |
        | 59 |
    
    + `SELECT TIMEDIFF('12:00:00','10:00:00') diff`  
        TIMEDIFF函数接受两个必须为相同类型的参数，即TIME或DATETIME。TIMEDIFF函数返回表示为时间值的dt1 - dt2的结果。

        | diff |
        | :---: |
        | 02:00:00 |

    + `group_concat([DISTINCT] 要连接的字段 [Order BY ASC/DESC 排序字段] [Separator ‘分隔符’])` -->  `select GROUP_CONCAT(filenameUUID SEPARATOR '|') as filenameUUID from linked_img group by id `  
        在**有group by的查询语句中**，select指定的字段要么就包含在 group by 语句的后面，作为分组的依据，要么就包含在聚合函数中。

    + `REPLACE()`
        * 语法：replace(object,search,replace)
        * 意思：把object中出现search的全部替换为replace
        * 案例：
        
            ```sql
            -- 清除news表中content字段中的空格  
            UPDATE `news` SET `content`= REPLACE(`content`, $old , $new);
            ```

