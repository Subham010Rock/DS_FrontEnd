export default{
    storePost(state,payload){
        state.allPost = payload.postData
    },
    removePost(state,payload){
        state.allPost = state.allPost.filter((ele)=>{
                return ele._id!==payload.postId
        })
    },
    uploadPost(){
        alert("Post uploaded Successfully")
    },

    deletePost(){
        alert("Post deleted Successfully")
    }
}