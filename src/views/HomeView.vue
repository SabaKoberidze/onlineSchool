<template>
    <article>
        <div class="subjects">
            <div class="subjectContainers" v-for="(subject, key) in subjects.subjects">
                <div  class="subject" @click="pickSubject(key)">
                    <img :src="getImageUrl(key)">
                    <p class="title">{{ subject.title }}</p>        
                    <div class="leftSide"></div>                  
                    <div class="rightSide"></div>
                    <div class="bottomSide"></div>
                    <div class="subjectBack"></div>
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
        @media  (max-width: 600px) {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        }
        @media  (max-width: 520px) {
            grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
        }
        .subjectContainers{
            width: 400px;
            height: 500px;    
            @media  (max-width: 600px) {
                align-self: center;
                width: 200px;
                height: 250px;    
            }
            @media  (max-width: 520px) {
                align-self: center;
                width: 160px;
                height: 200px;    
            }
            @media  (max-width: 380px) {
                align-self: center;
                width: 240px;
                height: 300px;    
            }
            position: relative;       
            &:hover{   
                .subject{
                    position: relative;                        
                    transform: scale(1.02) rotate3d(1, -1 ,0, 30deg);                                    
                    .subjectBack{
                        box-shadow: 2px 2px 15px #000000a5;          
                    }
                }       
               
            }
          
            .subject{
                transform-style: preserve-3d;    
                user-select: none;
                cursor: pointer;
                border-radius: 4px;
                display: flex;
                justify-content: start;
                flex-direction: column;
                align-items: center;     
                gap: 10px;                
                color: white;
                transition: 400ms;
                width: 100%;
                height: 100%;
                position: relative;
                border-radius: 4px 8px 8px 4px;
                //overflow: hidden;
                border-right: 0 solid white;
                background: rgb(220, 219, 219);    
                letter-spacing: 0px; 
              
               
                
                img{
                  // width: auto;
                   width: 100%;
                   height: 100%;
                   aspect-ratio: 1/1;
                   border-radius: 0px 8px 8px 0px;
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
                .rightSide,.bottomSide,.leftSide{
                    content: '';
                    background-color: rgb(213, 210, 210);
                    position: absolute;
                    height: 95%;
                    width: 60px;
                    z-index: -1;
                    right: 2.5%;
                    top: 2.5%;
                    transform-origin: right;
                    transform:  rotate3d(0, 1 ,0, -90deg);
                    transform-style: preserve-3d;
                }
                .leftSide{
                    height: 100%;  
                    transform-origin: left;
                    left:0;
                    top: 0;
                    background-color: rgb(152, 152, 152);
                    transform:  rotate3d(0, 1 ,0, 90deg);
                }
                .bottomSide{
                    bottom: 2.5%;
                    left: 0.5%;
                    top: unset;
                    z-index: -1;
                    width: 97%;
                    height: 60px;
                    transform-origin: bottom;
                    transform:  rotate3d(1, 0 ,0, 90deg);
                }
                .subjectBack{
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    background-color: grey;
                    z-index: -1;
                    transform-style: preserve-3d;
                    transform: translateZ(-60px);
                    border-radius: 0px 8px 8px 0px;
                    box-shadow: 0px 0px 15px #0000004d;       
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
                    top: 0;
                }    
            }
        }
       
    }
}

</style>