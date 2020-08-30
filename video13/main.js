
// root vue instance
window.Event = new Vue();

Vue.component('coupon', {
    template: '<input placeholder="Enter your coupon code" @blur="onCouponApplied">',

    methods: {
        onCouponApplied() {

            // emit an event. Can pass any data needed as second arg
            Event.$emit('applied');

        }
    }
})

new Vue({

    el: "#root",

    data: {
        couponApplied: false
    },

    // any component can listen for event in the root instance
    created() {
        Event.$on('applied', () => alert('handling it!'))
    }

});

