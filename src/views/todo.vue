<template>
    <div class='contain'>
        <input 
        class="input-do"
        type="text"
        autofocus="autofocus"
        placeholder="接下来做什么"
        @keyup.enter="addTodo"
        >
        <showitem @delitem='delitem' :todo='item' v-for='item in filtersTodoData' :key='item.id' v-model="item.completed"></showitem>
        <tabs :todo='tododata' @seltodos='selfilter' @showfilcom='showuncomplete'></tabs>
    </div>
</template>

<script>
import showitem from '@/views/item.vue'
import tabs from '@/views/tabs.vue'

let id = 0
export default {
    components:{
        showitem,
        tabs
    },
    data(){
        return {
            tododata:[],
            filter:'all'
        }   
    },
    computed:{
        filtersTodoData(){
            if(this.filter === 'all') {
                return this.tododata
            } else {
                let complet = this.filter === 'completed'
                return this.tododata.filter(item => {
                    return item.completed === complet
                })
            }
        }
    },
    methods:{
        showuncomplete(){
            this.tododata = this.tododata.filter(item => {
                return item.completed === false
            })
        },
        selfilter(fl){
            this.filter = fl
        },
        addTodo(e){
            if(e.target.value==''){
                return
            }else{
                this.tododata.unshift({
                    id:id++,
                    content:e.target.value,
                    completed:false
                })
                e.target.value = ''
            }
        },
        delitem(id){
            this.tododata.splice(this.tododata.findIndex( item => {
                return item.id == id
            }),1)
        }
    }
}
</script>

<style scoped>
.input-do{
    border: none;
    outline: none;
    width: 500px;
    height: 50px;  
    z-index: 2;
    margin-left: 50%;
    font-size: 20px;
    padding-left: 10px;
    transform: translateX(-50%);
}
</style>