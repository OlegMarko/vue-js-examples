Vue.component('cars', {
    data: function () {
        return {
            cars: [
                {model: "BMW"},
                {model: "Audi"},
                {model: "Mercedes-Benz AMG"},
                {model: "Ford"},
                {model: "Volvo"}
            ]
        };
    },
    template: '<div><div class="car" v-for="car in cars"><p>{{ car.model }}</p></div></div>'
});


new Vue({
    el: '#app',
    data: {
        //
    },
    methods: {
        //
    },
    computed: {
        //
    },
    filters: {
        //
    }
});