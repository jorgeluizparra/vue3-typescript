<template>
    <Header :header="header"/>
    <OrderForm orderType="sell"/>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { headerInterface } from "@/interfaces/header";

export default defineComponent({
    components: {
        Header: require("@/components/Header").default,
        OrderForm: require('@/components/OrderForm').default,
    },
    data() {
        return {
            header: {
                text: "Sales Page",
                color: "primary"
            } as headerInterface,
        }
    },
});
</script>
<style lang="">
    
</style>