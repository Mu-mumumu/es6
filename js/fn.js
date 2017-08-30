function fn(a,b){
	a=a||20
	b=b||30
	console.log(a+b)
}

fn() //50
fn(0,10) //30  因为0被当作false 所以a的值仍是20


function ffn(a=20,b=30){
	
	console.log(a+b)
}

ffn() // 50
ffn(0,10) //10

//rest 可代替arguments对象  用于获取函数多余参数
function sum(...arr){
	var res=0;
	for(var i=0;i<arr.length;i++){
		res+=arr[i]
	}
	console.log(res)
}

sum(1,2,3,4)//10

//rest前可以传一个参数 rest后不行

/*箭头函数 （）=>*/
const fwd=e=>e;
//两种写法等同
const fwd1=function(g){
	return g
}
console.log(fwd(1))//1
console.log(fwd1(1))//1





