<template>
    <div class="app_ac">
       <!-- {{ NODE_ENV}} -->
       <div class='content'>
          <navheader></navheader>
          <todo></todo>
          <navfooter></navfooter>
       </div>
    </div>
</template>

<script>
import navheader from '@/views/header.vue'
import navfooter from '@/views/footer.vue'
import todo from '@/views/todo.vue'

export default {
    components:{
        navheader,
        navfooter,
        todo
    },
    data(){
        return {
            NODE_ENV:process.env.NODE_ENV
        }
    }
}
</script>
<style  scoped>
.app_ac{
    position: relative;
    left: 0;
    right: 0;
    top:0;
    bottom:0;
    width: 100%;
    height: 100%;
}
.content{
    position: absolute;
    left :0;
    right: 0;
    top :0;
    bottom :0;
    width: 100%;
    height: 100%;
    background-color: #999;
    opacity :0.6;
}
</style>