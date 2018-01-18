<template>
    <div>
        <input type="text" :value="msg" @input="inputText">
        <p>{{ mess }}</p>
    </div>
</template>

<script>
    export default {
        name: 'field',
        props: ['msg'],
        data () {
            return {
                mess: ''
            }
        },
        methods: {
            inputText (event) {
                this.mess = event.target.value;
                this.$emit('msgChange', this.mess);
            }
        }
    }
</script>

<style></style>
