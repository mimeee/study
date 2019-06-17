# 关于 hybird 混合应用

适用哪些hybird

# Chrome 调试 hybird 混合应用 ——— 安卓

## 准备工作

1. **chrome** 浏览器
2. 安卓手机
3. 翻墙软件

## 开始

1. 手机设置为开发者模式，并开启允许usb调试。不同的手机有不同的打开方式。以我自己的手机(华为 nova4)为例:

   进入 设置 -> 系统 -> 开发者选项 -> 打开usb调试

   如果没有开发者选项则： 设置 -> 系统 -> 关于手机 -> 狂戳 **版本号** -> 返回系统 ->  开发者选项 -> 打开usb调试

2. 打开 chrome 浏览器，输入 url : [chrome://inspect/#devices](chrome://inspect/#devices)，打开开发者工具， 可以看到页面如下图：

   ![](/Users/mimee/Documents/my-git/学习笔记/10_工具/image/20190613hybird_1.png)

3. 将手机连接电脑

4. 可以看见下图

   ![](/Users/mimee/Documents/my-git/学习笔记/10_工具/image/20190613hybird_2.png)

5. 打开一个hybird app或者chrome(手机)l浏览器，就可以看见记录

   ![](/Users/mimee/Documents/my-git/学习笔记/10_工具/image/20190613hybird_3.png)

6. 点击上述的 **inspect** 会弹出一个新的页面，在这个页面就可以进行调试了。

   ![](/Users/mimee/Documents/my-git/学习笔记/10_工具/image/20190613hybird_4.png)

7. 如果是第一次，则会出现空白页面，或者是404；这个时候需要你打开你的翻墙软件，在重复上述操作即可。要保证翻墙成功哦！翻墙一次后，以后都不需要了。



# 调试 hybird 混合应用 ——— IOS

