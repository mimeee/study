<template>
<div id="app" class="container">
	<transition enter-active-class="animated bounce" leave-active-class="animated fade">
		<router-view name="bigHeader"></router-view>
	</transition>
	<hr>
	{{ this.$route.params }}//{{ this.$route.query }}
	<hr>
	<ul class="nav nav-pills">
		<li class="nav-item">
		    <router-link to="/fone" class="nav-link" active-class="active">father one</router-link>	
		</li>
		<li class="nav-item">
		    <router-link :to="ft" class="nav-link" active-class="active" exact>father two</router-link>
		</li>
		<li class="nav-item">
		    <router-link :to="fts" class="nav-link" active-class="active">/ftwo/1 --- fts</router-link>
		</li>
		<li class="nav-item">
		    <router-link :to="ftss" class="nav-link" active-class="active">/ftwo/dd/2</router-link>
		</li>
		<li class="nav-item" v-for="item in ids">
		    <router-link :to="'/ftwo/dd/' + item" class="nav-link" active-class="active">/ftwo/dd/{{ item }}</router-link>
		</li>
	</ul>
	<hr>
 	<router-view></router-view>
</div>
</template>

<script>

export default {
	data(){
		return {
			ids:[1,3,4,5,6],
			ft:{
				name:'father_two'
			},
			fts:{
				name:'father_two_son',
				params:{id:1},
				query:{located:"en"}
			},
			ftss:{
				name:'father_two_son_son',
				params:{id:"dd",subid:"Aa"}
			}
		}
	}


}
</script>

<style>


</style>
