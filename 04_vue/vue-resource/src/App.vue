<template>
  <div id="app">
	<div class="container">
		<div class="row">
		username:<input type="text" v-model="username" class="form-control">
			email:<input type="text" v-model="email" class="form-control">
		</div>
		<button class="btn btn-primary w-100" type="button" @click="sub">btn</button>
		<div>{{ result.body }}</div>

		<button class="btn btn-danger" @click="re">request</button>
		{{ data }}
		<hr>
		<button class="btn btn-warning" @click="resou">resourceBTN</button>
	</div>
  </div>
</template>

<script>

export default {
	data(){
		return {
			username:"",
			email:"",
			result:{},
			data:{},
			resource:null
		}
	},
	created(){
		
		const custom = {
			saveAlt:{
				method:'POST',
				url:"server2.php"
			}
		};
		this.resource = this.$resource('{node}',{},custom);
	},
	methods:{
		sub(){
			this.$http.post("server.php" ,{user:this.username},{emulateJSON: true})
				.then(response=>{
					this.data = response.body;
				},error=>{
					this.result = error
				})
		},
		re(){
			this.$http.get("server1.php").then(response=>{
				this.data = response.body;
			},error=>{
				console.log(error);

			})
		},
		resou(){
			this.resource.saveAlt({node:"server1.php"},{'a':'v'}).then(data=>data.json()).then(data=>console.log(data));
		}
	}
}
</script>

<style>

	.row{
		margin-bottom: 15px;
		margin-top: 15px;
	}		

</style>
