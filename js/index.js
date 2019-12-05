import PrdModel from './models/PrdModel.js';

new Vue({
	el: '#app',
	data: {
		query: '',
		resultData: [],
	},
	methods: {
		onReset(e) {
			this.query = '';
			this.resultData = [];
		},
		onSubmit(e) {
			this.resultData = PrdModel.list();
			console.log(this.resultData);
		}
	}
});