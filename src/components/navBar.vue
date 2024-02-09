<script setup lang="ts">
import router from '../router';
import {subjectStore} from '../stores/subjects.js'
defineProps<{ msg: string }>()
//const count = ref(0)
const subjects = subjectStore()
function gotToHome():void {
    router.push('/')
}
</script>

<template>
    <nav>
        <h1 v-on:click="gotToHome()">{{msg}}</h1>
        <input v-model="subjects.Search" class="search" placeholder="Search">
        <div class="navigation">
            <!-- <router-link to="/">Home</router-link> 
            <router-link to="/about">about</router-link>  -->
        </div>
        <button class="logoutButton">Logout</button>
    </nav>
</template>

<style scoped lang="scss">
*{
    color: white;
}
nav{
    padding: 0 2%;
    z-index: 5;
    background: #20214586;
    backdrop-filter: blur(5px);
    position: fixed;
    top: 0;
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1{
        font-size: 40px;
        cursor: pointer;
    }
    a{
        text-decoration: none;
        font-size: 18px;
    }
    .search{
        outline: 0;
        color: black;
        text-align: center;
        border-radius: 8px;
        border: 0;
        height: 40%;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        background-color: rgba(255, 255, 255, 0.737);
        &:active{
            outline: 0;
        }
    }

    .navigation{
        display: flex;
        gap: 15px;
        font-weight: 500;
    }
    .logoutButton{
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.541);
        border:0;
        padding: 5px 10px;
        border-radius: 5px;
        font-weight: 500;
        font-size: 16px;
    }
}
</style>
