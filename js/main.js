Vue.filter('capitalize', function (val) {
    if (!val) return '';
    val = val.toString();
    return val.replace(/\b\w/g, function (l) { return l.toUpperCase() });
});

new Vue({
    el: '#app',
    data: {
        show: true,
        message: 'message (v-else)',
        cars: [
            {model: "bMW", speed: 250.8},
            {model: "audi", speed: 240.55},
            {model: "mercedes-benz AMG", speed: 350.05},
            {model: "ford", speed: 160.75}
        ]
    },
    methods: {
        toggleText () {
            this.show = !this.show
        }
    },
    computed: {
        showMessage () {
            return this.message.toUpperCase();
        }
    },
    filters: {
        lowercase (val) {
            return val.toLowerCase();
        }
    }
});