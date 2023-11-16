import {wait} from '../../../service/setTimeout'
export default{
      async createPost(context,payload){
        const formdata = new FormData() 
        const token = context.rootGetters.getToken
        formdata.append('title',payload.title)
        formdata.append('description',payload.description)
        formdata.append('postedBy',context.rootGetters.getUserId)
        formdata.append('photos',payload.image)
     

        const result = await fetch('http://localhost:3000/createpost',{
           method:'POST',
           headers:{
             'authorization':`Bearer ${token}`
           },
       
           body:formdata
        })
            
       
       const allPost = await result.json()

        context.commit('storePost',{postData:allPost})

       await wait()  //wait for 2 sec
      }

      
}