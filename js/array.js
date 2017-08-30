var fwd=document.querySelectorAll('li')

console.log(fwd)
console.log(Array.isArray(fwd)) //false  获取的到的是类数组(NodeList) 而不是数组(Array)

var fwd1=Array.from(fwd)//转化为数组

console.log(fwd1)
console.log(Array.isArray(fwd1))  // true

var fwd2=[1,2,3,4,5,6,7]

//find() 寻找数组中满足条件的元素并返回第一个满足条件的元素，都不符合 返回undefined
var res=fwd2.find(function(a){
	return a>4
})
console.log(res) //5

//findIndex()寻找数组中满足条件的元素并返回第一个满足条件的元素的下标，如果找不到，则返回-1
var res1=fwd2.findIndex(function(a){
	return a<3
})

console.log(res1) //0

const fwd3=[4,2,4,3,5,6,7,2]
fwd3.fill('woods',1,2)  //两个参数  从a起（包含）至b（不包含） 填充  不写参数则把所有数据都换掉 
console.log(fwd3)