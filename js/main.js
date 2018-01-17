new Vue({
    el: '#app',
    data: {
        title: 'Hello World',
        title2: ''
    },
    methods: {
        changeText () {
            this.title = 'Text';
        },
        inputText (event) {
            this.title2 = event.target.value;
        }
    }
});