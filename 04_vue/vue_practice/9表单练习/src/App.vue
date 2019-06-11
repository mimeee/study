<template>
  <div id="app">
     <div class="container">
       <form action="" v-if="trigger">
          <div class="form-group row">
            <div class="col row">
              <div class="col-2">
                <label for="firstName" class="col-form-label">firstName</label>
              </div>
              <div class="col">
                <input type="text" name="fistName" id="firstName" class="form-control" v-model="fistName">
              </div>
            </div>
            <div class="col row">
              <div class="col-2">
                <label for="lastName">lastName</label>
              </div>
              <div class="col">
                <input type="text" name="lastName" id="lastName" class="form-control" v-model="lastName">
              </div>
            </div>
          </div>
          <div class="form-group row">
              <div class="col-1">
                <label for="mail" class="col-form-label">mail</label>
              </div>
              <div class="col">
                <input type="text" name="mail" id="mail" class="form-control" v-model="mail">
              </div>
          </div>
          <div class="form-group row">
              <div class="col-1">
                <label for="mail" class="col-form-label">password</label>
              </div>
              <div class="col">
                <input type="text" name="password" id="password" class="form-control" v-model="password">
              </div>
          </div>
          <div class="form-group row">
            <div class="col-1">
              <label for="mail" class="col-form-label">isStore</label>
            </div>
            <div class="col">
              <div class="form-check form-check-inline">
                <input type="radio" name="isStore" value="yes" class="form-check-input" v-model="isStore">yes
                <label class="form-check-label"></label>
              </div>
              <div class="form-check form-check-inline">
                <input type="radio" name="isStore" value="no" v-model="isStore" class="form-check-input">no 
                <label class="form-check-label"></label>
              </div>
            </div>
          </div>
       </form>
       <ul class="list-group" v-else="!trigger">
         <li class="list-group-item">fullName:{{ fullName }}</li>
         <li class="list-group-item">mail:{{ mail }}</li>
         <li class="list-group-item">password:{{ password }}</li>
         <li class="list-group-item">isStore:{{ isStore }}</li>
       </ul>
     </div> 
     

     <button type="button" class="btn btn-primary" @click="trigger = !trigger">sub</button>
  </div>
</template>

<script>



export default {
 data(){
  return {
    fistName:"",
    lastName:"",
    mail:"",
    password:"",
    isStore:"",
    trigger:true
  }
 },
 computed:{
  fullName(){
    return this.fistName + this.lastName;
  }
 }
}
</script>

<style scoped="">
  #app{
    padding: 15px;
  }
</style>
