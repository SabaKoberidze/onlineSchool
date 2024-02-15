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
            }
        },    
        History: {
            title: 'ისტორია',
            headers: {
                'შუასაუკუნეები': ['ვიკინგების ექსპედიცია', 'ჯვაროსნული ლაშქრობები', 'გოთიკური არქითექტურა', 'შავი ჭირი'],
            }
        },    
        Physics : {
            title: 'ფიზიკა',
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
