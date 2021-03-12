<template>
    <form @submit.prevent="onSubmit">
        <Input v-model:value="product" type="text" label="Product name" />
        <br>
        <SubmitButton />
    </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";

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
        ...mapActions(["createProduct", "getProducts"]),
        onSubmit () {
            this.createProduct(this.product)
        }
    },
    mounted() {
        this.getProducts()
    }
});
</script>

<style lang="scss"></style>