export const mixed = {
	computed:{
		reverseMix(){
			return this.vocabulary.split("").reverse().join("");
		},
		calcMix(){
			return this.vocabulary + "(" + this.vocabulary.length + ")";
		}
	}
}