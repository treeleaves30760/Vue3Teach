const app = {
	data() {
		return {
			counter: 0,
		};
	},
	mounted() {
		setInterval(() => {
			this.counter++;
		}, 1000);
	},
};

Vue.createApp(app).mount("#app");
