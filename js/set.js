//集合 key和value值相同 没有重复的value  无序且唯一

const s=new Set([1,2,3])
console.log(s)

console.log(s.size)//set属性

s.add(5).add("s").add([2,3])//返回结构本身

console.log(s)

s.delete(5)  //返回一个布尔值，表示删除是否成功
console.log(s)
//s.delete(5).delete("s")//不能这么写

console.log(s.has('s'))//判断是否含有该值，返回布尔值

//console.log(s.clear())  //清除所有值，没有返回值

//遍历器 
console.log(s.keys())
console.log(s.values())
//结果相同，因为集合的键和值是相同的

console.log(s.entries())
//遍历键值对

s.forEach(function(value,key,set){
	console.log(key)
})


s.add(1)  //加入重复数值后依旧是原来的集合 可利用这个特性为数组去重(遍历一遍即可)

//数组去重
var a=[1,1,1,2,2,3,3,4,4,'4']
const ss=new Set(a)//集合
console.log(ss)
var sss=[...ss]//...为拓展运算符(遍历)
const ssss=[ss.keys()]
console.log(sss)//数组
console.log(ssss)