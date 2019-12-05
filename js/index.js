new Vue({
	el: '#app',
	data: {
		query: '',
	},
	methods: {
		onReset(e) {
			this.query = '';
		}
	}
});