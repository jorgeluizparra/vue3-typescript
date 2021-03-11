<template>
    <form @submit.prevent="onSubmit">
        <Select v-model:value="order.productCode">
            <option 
              v-for="(product, index) in products" 
              :key="index" 
              :value="product.code">
                {{product.name}}
            </option>
        </Select>
        <Input v-model:value="order.volume" type="number" label="Quantity" />
        <br>
        <SubmitButton />
    </form>
</template>
<script lang="ts">
import { defineComponent } from "vue";

// Interfaces
import { newOrderInterface } from '@/interfaces/newOrder';

export default defineComponent({
    components: {
        Input: require("../components/inputs/Input").default,
        Select: require("../components/inputs/Select").default,
        SubmitButton: require("../components/inputs/SubmitButton").default,
    },
    props: {
        orderType: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            products: [
                {
                    name: "Banana",
                    code: "045698"
                },
                {
                    name: "Manga",
                    code: "089698"
                }
            ],
            order: {
                productCode: "",
                orderType: this.orderType,
                volume: "0"
            } as newOrderInterface,
        }
    },
    methods: {
        onSubmit () {
            console.log(this.order);
        }
    }
});
</script>
<style lang="scss">
@import '../assets/_style.scss';
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