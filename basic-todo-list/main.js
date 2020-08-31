Vue.component('task', {
    props: ['done'],
    template: `<li @click="toggleIsDone"><slot></slot>: {{ this.isDone }} </li>`,
    data() {
        return {
            isDone: NaN
        }
    },
    mounted() {
        this.isDone = this.done;
    },
    methods: {
        toggleIsDone() {
            this.isDone = ! this.isDone;
        }
    }
})

Vue.component('task-list', {
    props: [],
    template: `
        <div>
            <ul>
                <task v-for="task in tasks" :done="task.done">
                {{ task.description}}
                </task>
            </ul>
        </div>
    `,
    data() {
        return {
            tasks: [{description: "water cat", done: "true"},
            {description: "feed conor", done: "true"},
            {description: "watch tv", done: "false"}
            ]
        }
    },
    methods: {

    }
})

new Vue({

    el: "#root",
});