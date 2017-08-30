let a='yy'
let b=true
let odiv=`<div>
			<div class="four"></div>
			<div class="four">${a}</div>
			<div class="four">${b?'四条木':'?'}</div>
			<div class="four"></div>
		</div>`
console.log(odiv)
//模板字符串 由` `包住  用${}作字符串拼接
let v='四条木'

console.log(v.repeat(4))//四条木四条木四条木四条木
console.log(v.includes('四'))//true
console.log(v.includes('s'))//false

//同理 startsWith(a) 是指是否由a字符串开头  endsWith(a) 。。。。。结尾
