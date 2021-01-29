// //全局变量
// let data = {
	
// };

// //创建全局组件
// Vue.compoment("当前组件名字", {
// 	//html模板
// 	template: `
// 		<p>这是一个全局组件</p>
// 	`


// 	//属性/方法



// });

// 实例化vue对象
new Vue({
	el: "#vue-app",
	data(){
		return {
			name: "SMITH",
			wechat: "24354656",
			website: 'https://www.baidu.com',
			websiteTag: "<a href='https://www.taobao.com'>taobao</a>",
			age: 20,
			x: 0,
			y: 0,
			worker: '深圳',
			address: '',
			a: 0,
			b: 0,
			mrChangeColor: false,
			error: false,
			success: true,
			characters: ['小猪佩奇', '神奇宝贝', '电机小子'],
			users: [
				{ id: 1, name: "XQ", age: 20 },
				{ id: 1, name: "QZ", age: 21 },
				{ id: 1, name: "LH", age: 22 }
			] 	
		};
	},

	methods: {
		// greet: function () {
		// 	return 'Good nigth ' + this.name;
		//  }
		greet(time) {
			// return 'Good nigth ' + this.name;
			return `Good ${time} ${ this.name }`;
		},
		
		haveLunch() {
			return `吃了午饭嘛`;
		},

		add(inc) {
			this.age += inc;
		},

		sub(dec) {
			this.age -= dec;
		},

		updateXY(event) {
			//  console.log(event);
			this.x = event.offsetX;
			this.y = event.offsetY;
		},

		onClick() {
			alert("hello world!");
		},

		logName() {
			console.log("正在输入姓名....");
		},

		logAge() {
			console.log("正在输入年龄....");
		},

		getAddress() {
			// console.log(this.$refs.address.value);
			this.address = this.$refs.address.value;
		},

		// AddToA() {
		// 	console.log("AddToA");
		// 	return this.age + this.a;
		// },

		// AddToB() {
		// 	console.log("AddToB");
		// 	return this.age + this.b;
		// }
	},

	// watch监听数据变化
	watch: {
		worker(val, oldVal) {
			console.log(val, oldVal);
		},
	},

	//computed计算属性:发生改变才会触发计算属性
	// 与methods区别：methods中一个函数被执行，其余函数都会执行，而computed不会且调用时不用加括号，
	// computed一定要有返回值
	computed: {
		AddToA() {
			console.log("AddToA");
			return this.age + this.a;
		},

		AddToB() {
			console.log("AddToB");
			return this.age + this.b;
		},

		compClasses() {
			return {changeColor:this.mrChangeColor}
		}

	}
});