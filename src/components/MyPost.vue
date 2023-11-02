<template>


<div  class="d-flex flex-wrap justify-space-around mb-6 ">
    <post-card class="mt-6" v-for="post in posts" :key="post._id" :title="post.title" :description="post.description" :image="post.file" :id="post._id" :allrate="post.ratedBy"></post-card>

</div>

</template>


<script>
import PostCard from './PostCard.vue'

export default{
    components:{
        'post-card':PostCard
    },

    data(){
       return {
      
       }
    },
    computed:{
        posts(){
            return this.$store.state.user.userPost
        }
    },
    mounted(){
        if(!this.posts.length){
            this.$store.dispatch('user/getPost')
            console.log("database query executed")
        }
        else{
            console.log("cache successfully")
        }
    }
}

</script>