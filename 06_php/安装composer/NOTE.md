- ### 下载安装
    + [国外官网](https://getcomposer.org/)
    + [中国镜像](https://pkg.phpcomposer.com/#how-to-install-composer)
    + [php 资源仓库](https://packagist.org/)
    + 如果在国外官网下载速度很慢或者下载不了的时候，就使用中国镜像的网站
    + 下载安装步骤
        * 下载安装之前的准备
            - 确定是否安装php，在cmd命令界面中输入`php -v`来查看版本号
            - 确定在`php.ini`是否打开`ssl`。如果没有打开`php.ini`文件，搜索`extension=php_openssl.dll`，将注释取消即可
        * 下载安装
            - 输入命令 `php -r "copy('https://install.phpcomposer.com/installer', 'composer-setup.php');"`  
                该命令会下载一个`composer-setup.php`安装脚本
            - 在下载`composer-setup.php`安装脚本的目录下运行`php composer-setup.php`;  
                该命令会执行安装过程
            - `php -r "unlink('composer-setup.php');"`  
                该命令会删除安装脚本。
        * 安装完成
            - 安装完成后会生成一个`composer.phar`文件。在该文件存在的根目录下使用`php composer.phar`指令就可以使用Composer了
            - 批处理  
                在`composer.phar`文件的同一目录下创建一个 composer.bat 文件，在该文件中输入`@php "%~dp0composer.phar" %*`；由此可以使用`composer`来代替`php composer.phar`来使用Composer了
            - 配置全局变量
                将`composer.phar`文件的目录添加环境变量中去就可以访问的
    + 安装后的全局配置
        * 由于国外镜像下载速度缓慢，可以替换下载镜像的地址，使用指令 `composer config -g repo.packagist composer https://packagist.phpcomposer.com`
        * 查看全局配置文件`composer.json`  
            打开文件`composer.phar`可以查找到
            **`COMPOSER_HOME is c:\Users\<user>\AppData\Roaming\Composer on Windows and /home/<user>/.composer on unix systems.`**
            可以在该目录找到相关的配置文件等等。
    + [使用文档中文](https://docs.phpcomposer.com/)/[使用文档英文](https://getcomposer.org/doc/)
    + 运行过程
        * Composer运行的使用会调用环境变量中指定默认的php版本，如果安装需要使用php7版本，需要把环境变量中指定php版本换成php7的
