

var str = `<span c-bind="data.text"><em>我的微信连三界</em></span><span class="c-e-tag-3 c-font-normal" data-sc="{&quot;sc_meta&quot;:&quot;sc_cmp:b1&quot;}">正版免费</span>`;


function delSquareBrackets(str, ignoreFilterTagName) {
  var i;
  if(ignoreFilterTagName){
  	i = '\[^' + ignoreFilterTagName.join('|') + '\]';
  }else {
  	i = '\.'
  }
  let p = new RegExp('<(' + i + '*?)(\\s[^>]+)?>(\.*?)<\\\/\\1>');
  console.log(p);
  while (p.test(str)) {
    str = d(str);
  }

  function d(str) {
    return str.replace(p, ($1, $2, $3, $4) => $4)
  }
  return str;
}

console.log(delSquareBrackets(str));