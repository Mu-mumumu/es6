class woods{
	constructor(z,j){   //a、b参数
		this.z=z;
		this.j=j;
		return this;
	}
	sayHello(){
		console.log(this.z+" "+this.j)
	}
}

const fourwoods=new woods('four','woods').sayHello();
/*
方法与方法间不需要加逗号
类的所有方法都定义在类的prototype属性上
类中的方法都是不可枚举的

* * */