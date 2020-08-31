<template>
    <div class='item-content'>
        <input type="checkbox" class='check' @click="com"/>
        <label :class="{'show':completed}">{{todo.content}}</label>
        <span class='delitem' @click="del(todo.id)">delete</span>
    </div>
</template>
<script>
export default {
    model:{
        prop:'completed',
        event:'change'
    },
    props:{
        completed:{
            type:Boolean,
            default:false
        },
        todo:{
            type:Object
        }
    },
    data(){
        return{}
    },
    methods:{
        com(){
            this.completed=!this.completed
            this.$emit('change',this.completed)
        },
        del(id){
            this.$emit('delitem',id)
        }
    }
}
</script>
<style scoped>
.item-content{
    position: relative;
    width:500px;
    height: 50px;
    display: flex;
    align-items: center;
    margin-left: 50%;
    transform: translateX(-50%);
    border-bottom: 1px solid white;
}
.delitem{
    opacity: 0;
    position: absolute;
    color:skyblue;
    right: 0;
    cursor: pointer;
}
.item-content:hover .delitem{
    opacity: 1;
}
.check{
    width: 30px;
    height: 30px;
    margin-right: 30px;
    background: red;
    text-align: left;
}
.show{
    text-decoration: line-through;
}
</style>