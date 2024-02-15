<template>
    <article>
        <nav>
            <p class="subjectName">{{subjects.subjects[curretSubject].title}}</p>
            <div class="subjectHeaders" v-for="(header, key, index) in subjects.subjects[curretSubject].headers"> 
                <div class="subjectHeaders__header" @click="selectHeader(index)">{{ key }}</div>
                <template  v-for="subHeader in header">
                    <Transition name="size">                
                        <div class="subjectHeaders__subHeader" v-bind:class="{current: quiz.lesson === subHeader}" v-show="selectedHeader === index" v-on:click="openQuestions(subHeader)">{{subHeader}}</div>                   
                    </Transition>   
                </template>
            </div>
        </nav>
        <section>
            <div class="questions">   
                <template v-for="(i, index) in quiz.questions">
                    <div class="questions__current" v-show="currentQuestionIndex === index && !isFinished">
                        <img class="questions__current__img" :src="generateImgPath(index)">
                        <p class="questions__current__title">{{ i.question }}</p>  
                        <div class="questions__current__answers">
                            <div class="questions__current__answers__answer" v-for="(answer, index) in i.answers" v-on:click="pickAnswer(i, answer)" v-bind:class="{right: (pickedAnswer === index && correctAnswer), wrong: (pickedAnswer === index && !correctAnswer)}">
                                <p class="questions__current__answers__answer__text" >{{answer}}</p>
                            </div>               
                        </div>
                    </div>
                </template>              
                <div v-show="isFinished" class="finishedTest">
                    <h1>ტესტი დასრულებულია</h1>
                    <h2>ქულა: {{score}}/{{quiz.questions?.length}}</h2>
                </div>
            </div>
        </section>
    </article>
    
</template>
<script lang="ts" setup>
// import { router } from '../router';
import { useRoute } from 'vue-router';
import { Ref, ref } from 'vue';
import { subjectStore } from '../stores/subjects';
import DB from '../assets/DB.json'
const selectedHeader:Ref<number> = ref(-1)
const subjects:any = subjectStore()
const currentRoute:Ref<any> = ref(useRoute());
const curretSubject:Ref<string> = ref('')
const quiz: Ref<any> = ref({})    
const currentQuestionIndex: Ref<number> = ref(0)
const previousQuestionIndex: Ref<number> = ref(-1)
const pickedAnswer:Ref<number> = ref(-1)
const correctAnswer:Ref<boolean> = ref(false)
const isFinished: Ref<boolean> = ref(false)
const score: Ref<number> = ref(0)
curretSubject.value = currentRoute.value.params.id;
function selectHeader(index: number){
    if(selectedHeader.value === index){
        selectedHeader.value = -1
        return
    }
    selectedHeader.value = index
}
function openQuestions(subHeader: string){
    quiz.value = DB.find(o => o.lesson === subHeader)
    reset()
}
function reset(){
    correctAnswer.value = false
    pickedAnswer.value = -1
    currentQuestionIndex.value = 0
    isFinished.value = false
    score.value = 0
}
function generateImgPath(questionIndex: number): string{ 
    return `./images/questions/${ quiz.value.lesson}/${questionIndex}.png`
}
function pickAnswer(question: any, answer: string){
    if(correctAnswer.value === true){
        return
    }
    pickedAnswer.value = question.answers.indexOf(answer)
    if(answer === question.correctAnswer){
        correctAnswer.value = true
        setTimeout(()=>{
            correctAnswer.value = false
            pickedAnswer.value = -1
            score.value++
            if(currentQuestionIndex.value === quiz.value.questions.length - 1){
                isFinished.value = true
                return
            }
            currentQuestionIndex.value++
        }, 1000)
    }else{
        if(previousQuestionIndex.value !== currentQuestionIndex.value){
            score.value--
        }
        previousQuestionIndex.value = currentQuestionIndex.value
        correctAnswer.value = false
    }
}



</script>
<style lang="scss" scoped>  
article{
    display: flex;
} 
    nav{
        max-width:100%;
        height: calc(100vh - 70px);
        background-color: rgba(0, 0, 0, 0.157);
        min-width: 300px;
        margin-top: 70px;
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
        .subjectName{
            display: flex;
            justify-content: start;
            align-items: center;
            font-weight: 600;
            padding-left: 2%;
            height: 50px;
            font-size: 25px;
            width: 100%;
            color: rgb(53, 53, 53);
        }
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
                &.current{
                    background-color: rgb(239, 216, 177);
                }       
            }
        }
    }
    section{
        margin-top: 70px;
        width: 100%;
        height: calc(100vh - 70px);
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
       
        .questions{
            width: 70vw;
            aspect-ratio: 16/9;
            border-radius: 1vw;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            position: absolute;
            &__current{
                display: flex;
                align-items: center;
                justify-content: space-between;
                flex-direction: column;
                position: relative;
                width: 100%;
                height: 100%;
                &__img{
                    z-index: -1;
                    left: 0;
                    top: 0;
                    position: absolute;                    
                    width: 100%;
                    object-fit: cover;
                    height: 100%;
                }
                &__title{
                    font-size: 1.6vw;
                    width: 100%;
                    padding: 2% 10%;
                    text-shadow: 2px 2px 20px black;
                    text-align: start;
                    color: white;
                    background: linear-gradient(180deg, rgba(0, 0, 0, 0.684) 0%, rgba(0, 0, 0, 0) 100%);
                    margin-top: 0%;
                }
                &__answers{
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    width: 100%;
                    height: 50%;
                    align-items: center;
                    justify-items: center;
                    background-color: rgba(0, 0, 0, 0.369);
                    &__answer{
                        width: 100%;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border: 1px solid rgba(154, 193, 189, 0.385);
                        transition: 400ms;
                        &:hover{
                            cursor: pointer;
                            backdrop-filter: blur(5px);
                        }
                        &.wrong{
                            background-color: rgba(132, 26, 26, 0.435);
                            backdrop-filter: blur(2px);
                        }
                        &.right{
                            background-color: rgba(48, 116, 48, 0.364);
                            backdrop-filter: blur(2px);
                        }
                        &__text{
                            color: white;
                            text-align: start;
                            width: 50%;
                            font-size: 0.9vw;

                        }
                    }
                }
            }
        }
        .finishedTest{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 5%;
            text-align: center;
            h1{
                font-size: 2vw;
                color: rgb(65, 97, 159);            
            }
            h2{
                font-size: 1.5vw;
                color:rgb(255, 200, 152);    
                -webkit-text-stroke: 1px rgb(65, 97, 159);              
            }
        }
    }
  

</style>