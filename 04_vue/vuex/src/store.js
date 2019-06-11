import Vue from 'vue';
import VueX from 'vuex';
Vue.use(VueX);


export const store = new VueX.Store(
	{
		state:{
			counter: 0
		},
		getters:{
			haha(){
				alert(counter);
			},
			doubleCounter:(state, getters)=>(id)=>{
				console.log(id);
				return state.counter * 2
			}  
		},
		mutations:{
			changeCounter(state,obj){
				state.counter = obj;
			}
		},
		actions:{
			changeCounter:(context,n)=>{
				
					context.commit("changeCounter",n)
				
			}
		}
	}
)