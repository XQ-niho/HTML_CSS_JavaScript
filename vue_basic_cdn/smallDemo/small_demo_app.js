new Vue({
	el: "#vue-app-demo",
	
	data() {
		return {
			change: 100,
			ended: false
		};
	},

	methods: {
		punch() {
			this.change -= 10;
			if (this.change <= 0) {
				this.ended = true;
			}
		},

		restart() {
			this.change = 100;
			this.ended = false;
		}

	},

	computed: {
		
	}
});
