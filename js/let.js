//let 声明变量 只在命令所在的代码块有效


{
	let a=4
	console.log("1a:"+a)
	var b=2
}
console.log(b)
//console.log(a)//报错

//let 声明变量不会被提升

console.log(c)
var c=2   //undefined

//console.log(d)
//let d=2  //报错

let f=2
function kk(){
	f=3
	console.log(f)
//	let f=4    //报错  如不加这句 则不报错   加了这句 22行为暂时性死区  即使已在全局声明过
}
kk()


var g;
var g;
//let g  //报错  提示已声明过a


let h;
//let h;   //报错


// let在for中的应用
var wDiv=document.getElementsByTagName("div")

//for (var i=0;i<wDiv.length;i++){
//	wDiv[i].index=i*2;
//	wDiv[i].onclick=function(){
//		console.log(this.index)
//	}
//	
//}

//普通情况下 闭包
//for (var i=0;i<wDiv.length;i++){
//	(function(i){
//		wDiv[i].onclick=function(){
//			console.log(i)
//		}
//	})(i)
//	
//}
//直接用let 
for (let i=0;i<wDiv.length;i++){
	wDiv[i].onclick=function(){
		console.log(i)
	}
	
}



//结构赋值      
//本质上是一种匹配模式   只要等式两边的格式相同  则左边变量就可以被赋值
//数组
let [i,j,k]=[1,2,3]
console.log(i,j,k)
let [aa,[bb,cc]]=[2,[[2],3]]
console.log(aa,bb,cc)   //2,[2],3

let [y=1]=[]
console.log(y)  //1
//对象
let {aaa,bbb}={bbb:"bbbb",aaa:"aaaa"}
console.log(aaa,bbb)  // aaaa  bbbb


let {bb:jj}={bb:123}
console.log(jj)  //123
//console.log(bb)  //报错
