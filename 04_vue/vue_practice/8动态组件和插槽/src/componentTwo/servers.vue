<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item" 
          @click = "clickEvent(server)"
          v-for="(server,i) in servers">
        server NO.{{ server.id }} ---- {{ server.status }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:['clickEvent'],
  data(){
    return {
      servers:[
        {id:1,status:'normal'},
        {id:2,status:'create'},
        {id:3,status:'using'},
        {id:4,status:'unconnect'},
        {id:5,status:'ok'},
      ]
    }
  } 
}
</script>

<style>
  li{
    cursor: pointer;
  }

</style>
