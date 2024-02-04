<template>
    <article>
        <div class="subjects">
            <div class="subjectContainers" v-for="(subject, key) in subjects.subjects">
                <div  class="subject" @click="pickSubject(key)">
                    <img :src="getImageUrl(key)">
                    <p class="title">{{ subject.title }}</p>                          
                </div>
            </div>           
        </div>
    </article>
</template>
<script lang="ts" setup>
import {subjectStore} from '../stores/subjects.js'
import router from '../router';
const subjects = subjectStore()
function pickSubject(key: string){
    router.push({ name: 'Subject', params: { id: key } });
}
function getImageUrl(image: string): string {
        let relativePath: string = `./images/subjects/${image}`
        console.log(relativePath + '.png')       
        return relativePath + '.png'
    }
</script>
<style lang="scss" scoped>
article{
    max-width:100%;
    height: 100%;
    padding: 40px;   
    .subjects{    
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        justify-items: center;
        gap: 40px;
        width: 100%;
        max-width:100%;
        .subjectContainers{
            width: 400px;
            height: 500px;
            &:hover{   
                .subject{
                    box-shadow: 20px 0px 25px #000000a5;                
                    transform: scale(1.02) rotate3d(0, 2 ,0, 30deg);
                    border-right: 25px solid rgb(220, 219, 219);
                    transform-style: preserve-3d;
                    img{                    
                        //object-fit: cover;
                    }
                    .title{
                        letter-spacing: -1px;
                    }
                }       
               
            }
            .subject{
                user-select: none;
                cursor: pointer;
                border-radius: 4px;
                display: flex;
                justify-content: start;
                flex-direction: column;
                align-items: center;     
                gap: 10px;  
                box-shadow: 0px 0px 15px #0000006f;       
                color: white;
                transition: 400ms;
                width: 400px;
                height: 500px;
                position: relative;
                border-radius: 4px 8px 8px 4px;
                overflow: hidden;
                border-right: 0 solid white;
                background: rgb(220, 219, 219);    
                letter-spacing: 0px; 
              
               
                @media(max-width:600px) {
                    width: calc(50vw - 5px);
                } 
                img{
                  // width: auto;
                   width: 100%;
                   height: 100%;
                   aspect-ratio: 1/1;
                   border-radius: 4px 8px 8px 4px;
                }
                .title{
                    padding: 5% 0;
                    width: 100%;
                    text-align: center;
                    background-color: rgba(0, 0, 0, 0.391);
                    //background-color: rgba(238, 242, 245, 0);
                    color: rgba(0, 0, 0, 0.645);
                    text-shadow: 0px 0px 5px rgb(0, 0, 0);
                    //backdrop-filter: blur(1px);
                    position: absolute;
                    color: white;
                    font-size: 22px;
                    font-weight: 600; 
                    top: 5%;      
                    transition: 200ms;            
                }   
                &::after{
                    z-index: 1;
                    content: "";
                    position: absolute;
                    height: 100%;
                    width: 2.5%;
                    background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(18, 18, 18, 0.486) 50%,  rgba(255, 255, 255, 0) 100%);
                    left: 1%;
                }                   
            }
        }
       
    }
}

</style>