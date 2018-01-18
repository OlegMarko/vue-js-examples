<template>
    <div>
        <h1>{{ message }}</h1>
        <hr>
        <field :msg="message" @msgChange="message = $event"></field>
    </div>
</template>

<script>
    import Field from './Field.vue';

    export default {
        name: 'example',
        data () {
            return {
                message: 'Main title.'
            }
        },
        components: {
            field: Field
        }
    }
</script>

<style></style>
