<template>
    <article>
        <div class="subjectHeaders" v-for="(header, key, index) in subjects.subjects[curretSubject].headers"> 
            <div class="subjectHeaders__header" @click="selectHeader(index)">{{ key }}</div>
            <template  v-for="subHeader in header">
                <Transition name="size">                
                    <div class="subjectHeaders__subHeader" v-show="selectedHeader === index">{{subHeader}}</div>                   
                </Transition>   
            </template>
        </div>
    </article>
   
</template>
<script lang="ts" setup>
// import { router } from '../router';
import { useRoute } from 'vue-router';
import { Ref, ref } from 'vue';
import { subjectStore } from '../stores/subjects';
const selectedHeader:Ref<number> = ref(-1)
const subjects:any = subjectStore()
const currentRoute:Ref<any> = ref(useRoute());
const curretSubject:Ref<string> = ref('')
curretSubject.value = currentRoute.value.params.id;
function selectHeader(index: number){
    if(selectedHeader.value === index){
        selectedHeader.value = -1
        return
    }
    selectedHeader.value = index
}



</script>
<style lang="scss" scoped>
   
    article{
        max-width:100%;
        height: calc(100vh - 70px);
        background-color: rgba(250, 163, 1, 0.296);
        width: 20%;
        .subjectHeaders{
            width: 100%;
            cursor: pointer;
            &__header{
                user-select: none;
                display: flex;
                align-items: center;
                height: 30px;
                font-size: 17px;
                padding-left: 5%;
                transition: 300ms;
                &:hover{
                    background-color: rgb(218, 138, 53);
                }  
            }
            &__subHeader{
                display: flex;
                align-items: center;
                height: 30px;  
                padding-left: 10%;
                overflow: hidden; 
                transition: 300ms;
                &:hover{
                    background-color: rgb(224, 186, 121);
                }         
            }
        }
    }
    .size-enter-from,
    .size-leave-to {
        transition: 200ms;
        height: 0px !important;        
    }
    .size-enter-active,
    .size-leave-active {
        height: 50px;
        transition: 200ms;
    }

</style>