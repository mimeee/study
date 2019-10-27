console.log(contents);

// const patternP = /<w:p(?:\sw:\w*="\w*")*>(.*?)<\/w:p>/;

// var matchedWP = contents.match(patternP)[1];

// const patternPpr = /<w:pPr>(.*?)<\/w:pPr>/;

// var matchPpr = console.log(matchedWP.match(patternPpr))


var parser=new DOMParser();
var xmlDoc=parser.parseFromString(contents,"text/xml"); 

var body = xmlDoc.getElementsByTagName('w:body')

console.log(body);
