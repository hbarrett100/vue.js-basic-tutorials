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


Vue.component('message', {

    props: ['title', 'body'],

    data() {
        return {
            isVisible: true
        };
    },

    template: `
    <article class="message" v-show="isVisible">

        <div class="message-header">
            {{ title }}

            <button type="button" @click="hideModal">x</button>
        </div>

        <div class="message-body">
            {{ body }}
        </div>

    </article>`,

    methods: {
        hideModal() {

            this.isVisible = false;
        }
    }
});


Vue.component('modal', {
    template: `

    <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="box">
                <slot></slot>
            </div>
        </div>
        <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
    </div>
    `
})

Vue.component('tabs', {
    template: `
    <div>
        <div class="tabs">
            <ul>
                <li class="is-active"><a>Pictures</a></li>
                <li><a>Music</a></li>
                <li><a>Videos</a></li>
                <li><a>Documents</a></li>
            </ul>
        </div>

        <div class="tabs-details">
            <slot></slot>
        </div>
    </div>


    `,

    mounted() {
        console.log(this.$children);
    }

});

Vue.component('tab', {
    template: `
        <div><slot></slot></div>    
    `
})


new Vue({

    el: "#root",

    data: {
        showModal: false
    }

});