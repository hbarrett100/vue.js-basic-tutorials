Vue.component('task-list', {

    //wrap in div because template in component needs single root element
    template: '<div><task v-for="task in tasks"> {{ task.description }} </task></div>',

    // can't return object because component isn't linked to a single instance
    data() {
        return {
            tasks: [
                { description: 'Go to the store', complete: true },
                { description: 'Make conor tea', complete: false },
            ]
        }
    },

    computed: {
        incompleteTasks() {
            return this.tasks.filter(task => !task.completed);
        },
    
        completeTasks() {
            return this.tasks.filter(task => task.completed);
        }
    }
  
});

Vue.component('task', {
    template: '<li><slot></slot></li>',

    // can't return object because component isnt linked to a single instance
    data() {
        return {
            message: 'Foobar'
        }
    }
});

new Vue({

    el: "#root",

    data: {
        showModal: false
    }

});