new Vue({
    el: '#app',
    data: {
        show: true,
        cars: [
            {model: "BMW", speed: 250.8},
            {model: "Audi", speed: 240.55},
            {model: "Mercedes-Benz AMG", speed: 350.05},
            {model: "Ford", speed: 160.75}
        ]
    },
    methods: {
        toggleText () {
            this.show = !this.show
        }
    },
    computed: {
        //
    }
});