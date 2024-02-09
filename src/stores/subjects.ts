import { defineStore } from "pinia";
// import axios from "axios";
// axios.defaults.withCredentials = true;

export const subjectStore = defineStore("subjects", {
  state: () => ({
    Search: '',
    subjects: {
        Mathematics: {
            title: 'მათემატიკა',
            headers: {
                header1: ['bomba', 'domba', 'gomba'],
                header2: ['jaba', 'soza', 'zuro'],
                header3: ['gega', 'geno', 'guga']
            }
        },    
        Physics : {
            title: 'ფიზიკა',
        },
        History: {
            title: 'ისტორია',
        },    
        Geography: {
            title: 'გეოგრაფია',
        },
        Biology: {
            title: 'ბიოლოგია',
        },
        Chemistry: {
            title: 'ქიმია',
        },
        Georgian: {
            title: 'ქართული ენა და ლიტერატურა',
        },
        CS: {
            title: 'ინფორმატიკა',
        },
    }
  }),
  actions: {
  }})
