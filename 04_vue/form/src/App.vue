<template>
  <div id="app" class="container">
	<form action="">
		<div class="form-group">
			<div class="col-1">
				<label for="user">user</label>
			</div>
			<div class="col">
				<input type="text" name="user" class="form-control" id="user" v-model="user">
			</div>
		</div>
		<div class="form-group">
			<div class="col-1">
				<label for="email">email</label>
			</div>
			<div class="col">
				<input type="text" name="email" class="form-control" id="email" v-model="email">
			</div>
		</div>
		<div class="form-group">
			<div class="col-1">
				<label for="age">age</label>
			</div>
			<div class="col">
				<input type="text" name="age" id="age" class="form-control" v-model="age">
			</div>
		</div>	
		<div class="form-check">
			<div class="form-check-inline">
				subject
			</div>
			<div class="form-check-inline">
				<input type="checkbox" name="subject" value="math" class="form-check-input"  v-model="subject">
				<label for="math" class="form-check-label">math</label>
			</div>
			<div class="form-check-inline">
				<input type="checkbox" name="subject" value="english" class="form-check-input" v-model="subject">
				<label for="math" class="form-check-label">english</label>
			</div>
			<div class="form-check-inline">
				<input type="checkbox" name="subject" value="chinese" class="form-check-input" v-model="subject">
				<label for="math" class="form-check-label">chinese</label>
			</div>
			<div class="form-check-inline">
				<input type="checkbox" name="subject"  value="physical" class="form-check-input" v-model="subject">
				<label for="math" class="form-check-label">physical</label>
			</div>
		</div>
		<div class="form-check">
			<div class="form-check-inline">
				fruit
			</div>
			<div class="form-check-inline">
				<input type="radio" name="fruit" value="math" class="form-check-input" v-model="fruit">
				<label for="math" class="form-check-label">math</label>
			</div>
			<div class="form-check-inline">
				<input type="radio" name="fruit" value="english" class="form-check-input" v-model="fruit">
				<label for="math" class="form-check-label">english</label>
			</div>
			<div class="form-check-inline">
				<input type="radio" v-model="fruit" name="fruit" value="chinese" class="form-check-input">
				<label for="math" class="form-check-label">chinese</label>
			</div>
			<div class="form-check-inline">
				<input type="radio" name="fruit"  v-model="fruit" value="physical" class="form-check-input">
				<label for="math" class="form-check-label">physical</label>
			</div>
		</div>	
		<div class="form-group">
			<input type="submit" value="sub" class="btn btn-primary w-100">
		</div>
	</form>
	<hr>
		<ul class="list-group">
			<li class="list-group-item">user :{{ user }}</li>
			<li class="list-group-item">email :{{ email }}</li>
			<li class="list-group-item">age :{{ age }}</li>
			<li class="list-group-item">subject :{{ subjects }}</li>
			<li class="list-group-item">fruit :{{ fruit }}</li>
		</ul>
  </div>
</template>

<script>

export default {
	data(){
		return {
			user:"",
			email:"",
			age:"",
			subject:[],
			fruit:""
		}
	},
	computed:{
		subjects(){
			return this.subject.join(",");
		}
	}
}
</script>

<style scoped="">
	#app{
		padding: 20px;
	}
</style>
