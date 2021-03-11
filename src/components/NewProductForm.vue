<template>
    <form @submit.prevent="onSubmit">
        <input v-model="product" type="text" placeholder="Product name">
        <br>
        <button type="submit">Save</button>
    </form>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
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
<style lang="scss">
@import '../assets/_style.scss';
input {
    width: 50vw;
    border-radius: 10px;
    height: 30px;
    padding: 10px;
    border: 2px solid $secondary;
    margin-bottom: 20px;
    &:focus {
        outline: none;
    }
}
button {
    background-color: $primary;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 16px;
    &:focus {
        outline: none;
    }
}
</style>