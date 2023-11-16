import PostCard from '../../src/components/PostCard.vue'
import {test,expect, describe, beforeEach, afterEach,it} from 'vitest'
import {flushPromises, mount, shallowMount} from '@vue/test-utils'



describe('PostCard.vue Implementation Test', ()=>{
    let wrapper = null;

    //run before to each unit test
    beforeEach(()=>{

        //render the component
        wrapper = shallowMount(PostCard,{
            propsData:{
                title:'',
                allrate:[],
                image:[{buffer:""}],
                description:"",
                id:''
    
            }
        })
    })

    afterEach(()=>{
        wrapper.unmount()
    })

    it('processes valid props data',async ()=>{

        wrapper.setProps({
            title:'first Post',
            allrate:[],
            image:[{buffer:"image"}],
            description:"this is my first post",
            id:1
        })

        await flushPromises()

        expect(wrapper.vm.title).toMatch('first Post')
        expect(wrapper.vm.allrate.length).toEqual(0)
        expect(wrapper.vm.image[0].buffer).toMatch("image")
        expect(wrapper.vm.description).toMatch("this is my first post")
        expect(wrapper.vm.id).toEqual(1)
        // expect(wrapper.findComponent({name:'v-btn'}).length).toEqual(1)
      
    })
  
})
