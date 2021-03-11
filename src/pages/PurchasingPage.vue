<template>
    <Header :header="header" />
    <Tabs :tabs="tabs" v-model:tab="tab">
        <NewProductForm v-if="tab == 'Add product'" />
        <OrderForm orderType="buy" v-else />
    </Tabs>
</template>
<script lang="ts">
import { defineComponent } from "vue";

// Interfaces
import { headerInterface } from "@/interfaces/header";

export default defineComponent({
    components: {
        Header: require('@/components/Header').default,
        Tabs: require('@/components/Tabs').default,
        NewProductForm: require('@/components/NewProductForm').default,
        OrderForm: require('@/components/OrderForm').default,
    },
    data() {
        return {
            header: {
                text: "Purchasing Page",
                color: "primary"
            } as headerInterface,
            tab: "Add product",
            tabs: ["Add product", "Buy product"]
        }
    }
});
</script>
<style lang="scss"></style>