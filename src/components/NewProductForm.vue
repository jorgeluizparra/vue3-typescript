<template>
    <form @submit.prevent="onSubmit">
        <Input v-model:value="product" type="text" label="Product name" />
        <br>
        <SubmitButton />
    </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    components: {
        Input: require("../components/inputs/Input").default,
        SubmitButton: require("../components/inputs/SubmitButton").default,
    },
    data() {
        return {
            product: ""
        }
    },
    methods: {
        onSubmit () {
            console.log(this.product);
        }
    }
});
</script>

<style lang="scss"></style>