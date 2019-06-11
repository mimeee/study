import fatherOne from './components/father_one.vue'
import fatherTwo from './components/father_two.vue'
import sonOne from './components/father_one_son_one.vue'
import sonTwo from './components/father_one_son_two.vue'
import bigHeader from "./components/big_Header.vue"

export const routes = [
	{
		path:"/fone",
		components:{
			'bigHeader':bigHeader,
			default : fatherOne
		},
		beforeEnter:(to,from,next)=>{
			console.log("r.js");
			next(true);
		}
	},
	{
		path:"/ftwo",
		name:"father_two",
		component:fatherTwo,
		children: [
			{
				path:":id",
				name:"father_two_son",
				component:sonOne,
				children:[
					{
						path:":subid",
						name:"father_two_son_son",
						component:sonOne
					}
				]
			}			
		]
	},
	{
		path:'*',
		redirect:{name:"father_two"}
	}
]