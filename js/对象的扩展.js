var a=1
var obj={
	a,
	fwd:function(){
		console.log('yeah')
	},
	fwd1(){
		console.log('wow')
	}
	
}
//对象简洁表示
console.log(obj.a)
obj.fwd()
obj.fwd1()


var obj1={c:2,k:'ssss'}
var obj2={c:3,d:4}
var obj3={f:"ssss"}

Object.assign(obj1,obj2,obj3)  //把后两个参数的对象合并到第一个中
console.log(obj1)   //{c:3,k:'ssss',d:4,f:'ssss'}

console.log(Object.is(obj1,obj2));// false  判断两个对象是否相同
