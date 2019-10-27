const filePath = '../猫项目主包隐私政策修订-20190916';

const admZip = require('adm-zip');
const fs = require('fs');
const zip = new admZip(filePath + '.docx');
console.log(zip);

//将该docx解压到指定文件夹result下
zip.extractAllTo(filePath, /*overwrite*/ true);

let contentXml = zip.readAsText("word/document.xml");

let arr = parse(contentXml);

let header = "<!DOCTYPE html>\n" +
    "<html lang=\"en\">\n" +
    "<head>\n" +
    "  <meta charset=\"UTF-8\">\n" +
    "  <title>Title</title>\n" +
    "</head>\n" +
    "<body>"
let footer = "</body>\n" +
    "</html>";

let str = header +  "<p>\n" + arr.join("</p>\n<p>") + "</p>\n" + footer;

fs.writeFile(filePath + ".html", str, (err) => {
    console.log('111', err)
})

function parse(content) {
    var patternP = /<w:p.*?>.*?<\/w:p>/gi;
    var resultList = [];
    var matchedWP = content.match(/<w:p.*?>.*?<\/w:p>/gi);
    //继续匹配每个<w:p></w:p>里面的<w:t>,这里必须判断matchedWP存在否则报错
    if (matchedWP) {
        matchedWP.forEach(function(wpItem) {
            //注意这里<w:t>的匹配，有可能是<w:t xml:space="preserve">这种格式，需要特殊处理
            var matchedWT = wpItem.match(/(<w:t>.*?<\/w:t>)|(<w:t\s.[^>]*?>.*?<\/w:t>)/gi);
            var textContent = '';
            if (matchedWT) {
                matchedWT.forEach(function(wtItem) {
                    //如果不是<w:t xml:space="preserve">格式
                    if (wtItem.indexOf('xml:space') === -1) {
                        textContent += wtItem.slice(5, -6);
                    } else {
                        textContent += wtItem.slice(26, -6);
                    }
                });
                resultList.push(textContent)
            }
        });
    }
    return resultList;
}