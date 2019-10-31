const filePath = '../服务协议（修改版）';
//html的title
const title = '服务协议';
//replavceStr优先级高的在前面
const replaceStr = [
  ['影视天堂搜索软件', "{%$data['productFullName']%}"],
  ['影视天堂', "{%$data['productName']%}"]
];
//加粗的样式类名
const bold = 'bold';
//条目的样式类名
const titleClass = 'title';
//默认color，docs出现该颜色不会添加style
const defaultColor = '2B2B2B';



const admZip = require('adm-zip');
const fs = require('fs');
const zip = new admZip(filePath + '.docx');
// console.log(zip);

//将该docx解压到指定文件夹result下
zip.extractAllTo(filePath, /*overwrite*/ true);

let contentXml = zip.readAsText("word/document.xml");

let arr = parse(contentXml);

let header = `
<!DOCTYPE html>
<html lang="zh">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-COMPATIBLE" content="IE=Edge,chrome=1">
  <meta name="renderer" content="webkit|chrome">
  <meta name="format-detection" content="telephone=no" />
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta http-equiv="X-UA-COMPATIBLE" content="IE=Edge">
  <!-- 预加载DNS -->
  <meta http-equiv="x-dns-prefetch-control" content="on">
  <meta name="viewport"
    content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <title>${title}</title>
  <script inline src="../../../jsLibs/calcRem.js"></script>
  <link inline href="../../privacyPolicy/dist/css/index.css" rel="stylesheet">
  <style>s{text-decoration: none;} .bold{font-weight: bold;}</style>
</head>

<body>
<div class="wrapper static">

`;
let footer = "</div>\n</body>\n </html>";

let str = header + arr.join("") + footer;

fs.writeFile(filePath + ".html", str, (err) => {console.log(err||'success')})

function parse(content) {
  var patternP = /<w:p.*?>.*?<\/w:p>/gi;
  var resultList = [];
  var matchedWP = content.match(/<w:p.*?>.*?<\/w:p>/gi);
  //继续匹配每个<w:p></w:p>里面的<w:t>,这里必须判断matchedWP存在否则报错
  if (matchedWP) {
    matchedWP.forEach(function(wpItem) {
      var matchedWR = wpItem.match(/(<w:r.[^>]*?>.*?<\/w:r>)/gi);
      //注意这里<w:t>的匹配，有可能是<w:t xml:space="preserve">这种格式，需要特殊处理
      var textBarrel = [];
      var textContent = "";
      if (matchedWR) {
        var reallyBold = false;
        var reallyColor = false;
        matchedWR.forEach(function(wrItem) {
          wtItem = wrItem.match(/(<w:t>.*?<\/w:t>)|(<w:t\s.[^>]*?>.*?<\/w:t>)/gi)[0] || '';
          if (wtItem) {
            colorMatch = wrItem.match(/<w:color w:val="(.*?)"\/>/);
            color = (colorMatch&&colorMatch[1] || '') === defaultColor ? '' : (colorMatch&&colorMatch[1] || '');
            //如果不是<w:t xml:space="preserve">格式
            if (wtItem.indexOf('xml:space') === -1) {
              textContent = wtItem.slice(5, -6);
            } else {
              textContent = wtItem.slice(26, -6);
            }
            if (/<w:b\/>/gi.test(wrItem)) {
                if(!reallyBold) textBarrel.push(`<span class='${bold}'${color ? ' style="color:#'+ color +'"' : ''}>`);
                reallyBold = true;
            }else{
                if (reallyBold) textBarrel.push(`</span>`);
                reallyBold = false;
            }
            if (color) {
                if(!reallyColor) textBarrel.push(`<s style="color:#${color}"}>`);
                reallyColor = true;
            }else{
                if (reallyColor) textBarrel.push(`</s>`);
                reallyColor = false;
            }

            textBarrel.push(textContent);

          }

        });
        if (reallyColor) textBarrel.push(`</s>`);
        if (reallyBold) textBarrel.push(`</span>`);
        textContent = textBarrel.join("");
        replaceStr.forEach(pattern => {
          textContent = textContent.replace(pattern[0], pattern[1]);
        })
        if (/[一|二|三|四|五|六|七|八|九|十]、/.test(textContent)) {
          textContent = `<p class="${titleClass}">${textContent}</p>`
        } else {
          textContent = `<p>${textContent}</p>`
        }
        resultList.push(textContent)
      }
    });
  }
  // console.log(resultList);
  return resultList;
}