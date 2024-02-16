import { defineStore } from "pinia";
// import axios from "axios";
// axios.defaults.withCredentials = true;

export const subjectStore = defineStore("subjects", {
  state: () => ({
    Search: '',    
    subjects: {
        History: {
            title: 'ისტორია',
            headers: {
                'შუასაუკუნეები': ['ვიკინგების ექსპედიცია', 'ჯვაროსნული ლაშქრობები', 'გოთიკური არქითექტურა', 'შავი ჭირი'],
            }
        },    
        Georgian: {
            title: 'ქართული ენა და ლიტერატურა',
            headers: {
                'ლიტერატურა': ['ვეფხისტყაოსანი'],
            }
        },
        Mathematics: {
            title: 'მათემატიკა',
            headers: {                
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
        CS: {
            title: 'ინფორმატიკა',
        },
    }
  }),
  actions: {
  }})
