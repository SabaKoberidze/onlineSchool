<template>
    <div class="loginContainer">
        <div class="loginContainer__loginForm">
            <p class="loginContainer__loginForm__header">Login</p>
            <div class="loginContainer__loginForm__inputs">
                <input v-model="username" class="loginContainer__loginForm__inputs__username" type="text" placeholder="username">
                <input v-model="password" class="loginContainer__loginForm__inputs__password" :type="fieldType" placeholder="password" >
                <div class="loginContainer__loginForm__inputs__button" @click="changeFieldType()">
                    <button type="button" class="loginContainer__loginForm__inputs__button__eye" :class="{visible: (fieldType === 'password')}"></button>
                </div>
            </div>
            <button class="loginContainer__loginForm__submit" v-on:click="sendVerificationData()">SUBMIT</button>
        </div>
    </div>
</template>
<script lang="ts" setup>
import{ref, Ref, onMounted } from 'vue'
import { logInState  } from "../stores/auth.js";
import router from '../router';
const auth = logInState();
const fieldType:Ref<string> = ref('password')
const username:Ref<string> = ref('')
const password:Ref<string> = ref('')
function changeFieldType(){
    fieldType.value === 'password' ? fieldType.value = 'text' : fieldType.value = 'password'
}
function sendVerificationData(){
    auth.logIn(username.value, password.value)
}
onMounted(() => {
  if(auth.isLoggedIn){
    router.push('/')
  }
})
</script>
<style lang="scss" scoped>
.loginContainer{
    & *{
        
        font-family: 'Indie Flower';
    }
    width: 100vw;
    height: 100vh;
    background-image: url('../../images/file-2L7u8IGPewqBQ3cOhAIlnLvV.png');
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(231, 236, 242);
    &__loginForm{  
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: transparent;  
        //box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.184);
        height: 250px;
        width: auto;
        aspect-ratio: 2/1;
        transform: scale(2);
        gap: 20px;
        &__header{
            width: 50%;
            font-weight: 600;
            font-size: 22px;
            color: rgba(0, 0, 0, 0.716);
        }
        &__inputs{
            display: flex;
            flex-direction: column;
            position: relative;
            gap: 20px;
            width: 50%;
            input{
                border: none;
                outline: none;
                border-bottom: 1px solid rgba(128, 128, 128, 0.595);
                background-color: transparent;
                width: 100%;
                height: 25px;
            }
            &__username{
            }
            &__password{
            }
            &__button{
                cursor: pointer;      
                position: absolute;
                display: flex;
                justify-content: center;
                align-items: center;      
                bottom: 0px;
                right: -35px;            
                width: 25px;
                height: 25px;
                opacity: 0.6;
                overflow: hidden;
                &__eye{
                    background: transparent;
                    background-image: url(../../images/visible.png);
                    background-size: cover;                
                    background-repeat: no-repeat;
                    background-position: center;
                    cursor: pointer;     
                    border: 0;
                    width: 100%;
                    height: 100%;
                    transition: 200ms;
                    background-size: 100%;
                    &::before{
                        content: '';
                        transition: 200ms;
                        position: absolute;
                        left: -100%;
                        top: -55%;
                        background-color: black;
                        width: 100%;
                        height: 2%;
                        transform: rotate(45deg);
                    }
                    &.visible{
                        background-size: 80%;
                        &::before{
                            left: 0%; 
                            top: 45%;
                        }
                    }
                }
               
            }
        }
        &__submit{
            border:0;
           // background: linear-gradient(to right, #ee3535 0%, #ff7171 51%, #a1c4fd 100%);
           // background-size: 200%;
           background-color: transparent;
           border-bottom: 1px solid rgba(197, 84, 84, 0.595);
           cursor: pointer;
           width: 15%;
           height: 15%;
           transition: 200ms;
           color: white;
           color: rgba(0, 0, 0, 0.736);
            font-weight: 600;
            font-size: 15px; 
            position: relative;          
            &:hover{
                color:rgba(148, 65, 65, 0.595);
                border-bottom: 1px solid rgba(197, 84, 84, 0.595);
            } &:active, .active{               
            }
        }
    }
}
  
    
</style>