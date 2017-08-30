//数据结构map  用来储存不重复键值的hash结构 
//而对象的键只能是字符串，map则没有该限制

const map=new Map([
	['2',2],[2,2]
])
console.log(map)
console.log(map.size)

map.set(3,4).set(true,false).set(3,2)
console.log(map)
console.log(map.get(3))//2
console.log(map.get(7))//undefined

map.delete(3) //删除后返回值为true
map.delete(3) //返回值为false

console.log(map.has(2))//true
console.log(map.has(3))//false

//map.clear() //清空数据

console.log(map.keys())//遍历键值
console.log(map.values())//遍历值
console.log(map.entries())//遍历键值对
map.forEach(function(key,value,map){
	console.log(key+"haahahahah")
	console.log(value+"haahahahah")
	console.log(map+"haahahahah")
	
})
map.clear()

map.set({},2).set({},3)
console.log(map)

console.log({}==={})//false  内存地址




