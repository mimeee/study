/*
 * 块级作用域测试
 *
{
	let i = 1;
}
console.log(i); //i is not defined ---> let所在的大括号形成了块级作用域
*/


/*
 * 变量提升测试
 *
function isRise(){
	console.log(sVar); //没有报错，但sVar为 undefined
	console.log(sLet); //报错， sLet is not defined

	var sVar = 'aaa';
	let sLet = 'bbb';
}
isRise();
*/


/*
 * 在同一个作用域下，let不能重复定义两个同名的标识符测试
 *
function isRise(){
	var sVar = 'aaa';
	var sVar = 'aaa';
	console.log(sVar); //aaa
	
	let sLet = 'bbb';
	let sLet = 'bbb';
	console.log(sLet); //报错， Identifier 'sLet' has already been declared
}
isRise();
*/


/*
 * 在不同作用域下可以使用同名的标识符测试
 *

let a = 123;
{
	let a = 'aaa';
	console.log(a); // aaa
}
console.log(a); // 123
 
 */


/*
 * var的覆盖与let的隐蔽
 *
	window.slet = 'let';
	window.svar = 'var';

	let slet = 'let-inner';
	var svar = 'var-inner';

	console.log(slet); 
	console.log(window.slet); 
	console.log(svar); 
	console.log(window.svar); 
 */


/**
 * let 应用之：循环打印绑定点击事件的索引
 *
 */
	//源程序
	var aBtn = document.querySelectorAll('button');
	// for(var i = 0;i < aBtn.length;i++){
	// 	aBtn[i].onclick = function(){
	// 		alert(i);
	// 	}
	// }

	// 改1：给每个btn绑定不同的index
	// for(var i = 0;i < aBtn.length;i++){
	// 	aBtn[i]['index'] = i; 
	// 	aBtn[i].onclick = function(){
	// 		alert(this.index);
	// 	}
	// }
	

	// 改2:使用闭包
	// for(var i = 0;i < aBtn.length;i++){
	// 	(function(param){
	// 		aBtn[param].onclick = function(){
	// 			alert(param);
	// 		}
	// 	})(i)
	// }

 
	// 改3:使用let
	for(let i = 0;i < aBtn.length;i++){
		aBtn[i].onclick = function(){
			alert(i);
		}
	}



