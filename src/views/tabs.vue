<template>
    <div class='tabs'>
        <span v-if='!unfinishnum'>0 items left</span>
        <span v-else>{{unfinishnum}} items left</span>
        <p>
            <span v-for="item in state" :key="item" :class="{'active':item === cursta}" @click="sel(item)">&nbsp;&nbsp;{{item}}&nbsp;&nbsp;</span>
        </p>
        <span @click="showcom">Clear completed</span>
    </div>
</template>

<script>
export default {
    props:{
        todo:{
            type:Array
        }
    },
    data(){
        return {
            state:['all','active','completed'],
            cursta:'all',
            ifshow:''
        }
    },
    computed:{
        unfinishnum(){
            return this.todo.filter(item => {
                return !item.completed
            }).length
        }
    },
    methods:{
        showcom(){
            this.$emit('showfilcom')
        },
        sel(item) {
            this.cursta = item
            this.$emit('seltodos',item)
        }
    }
}
</script>

<style scoped>
span:nth-child(n+2){
    cursor: pointer;
}
.tabs{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 500px;
    height: 30px;
    margin-left: 50%;
    transform: translateX(-50%);
    margin-top: 20px;
}
.active{
    border: 3px solid brown;
    border-radius: 5px;
}
</style>