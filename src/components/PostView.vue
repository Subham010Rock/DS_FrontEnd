<template>
<div><h1>All Post</h1></div>
<div  class="d-flex flex-wrap justify-space-around mb-6 " v-if="allPosts.length>0">
    <post-card class="mt-6" v-for="post in allPosts" :key="post._id" :title="post.title" :description="post.description" :image="post.file" :id="post._id" :allrate="post.ratedBy"></post-card>

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
       allPosts(){
            return this.$store.state.post.allPost
       }
    },

    async mounted(){
        if(!this.allPosts.length){
            const response  = await fetch("http://localhost:3000/allpost")
            const responseData = await response.json()
            this.$store.state.post.allPost = responseData
            console.log("executed database query")
        }
        else{
            console.log("caching successfully")
        }
        
    }
}

</script>