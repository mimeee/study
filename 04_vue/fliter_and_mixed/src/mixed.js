export const Mixed = {
	data(){
		return {
			one:'one'
		}
	},
	methods:{
		show(){
			alert(123);
		}
	},
	created(){
		alert('init');
	}
}