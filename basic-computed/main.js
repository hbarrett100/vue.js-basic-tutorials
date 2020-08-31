Vue.component('calc-table', {
    template: `   
    <div>
        <input id="input" v-model="calcNumber" type="number">
        <table>
            <thead>
                <tr>
                    <th>{{ this.calcNumber }} squared</th>
                    <th>{{ this.calcNumber }} cubed</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td> {{ this.numberSquared }} </td>
                    <td>{{ this.numberCubed }}</td>
                </tr>
            </tbody>
        </table>
    </div>`, 
    data() {
        return {
            calcNumber: 0,
        }

    }, 
    computed: {
        numberSquared() {
            return this.calcNumber * this.calcNumber;
        },
        numberCubed() {
            return this.calcNumber * this.calcNumber * this.calcNumber;
        },

    }
})

new Vue({
    el: "#root",
});