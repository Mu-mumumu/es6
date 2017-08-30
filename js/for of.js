
const arr=[1,2,3,4,5]
for(let i of arr){
	console.log(i)  //1   2   3    4     5
}
//即i是数据结构中的每一项

const map1=new Map([['a',2],[3,'c']])
map1.set(2,5)
for (let i of map1) {
	console.log(i)//打印出map1中每个键值对  如['a',2]
}
for (let [key,value] of map1){
	console.log(key,value)//  如  a 2
}
	
