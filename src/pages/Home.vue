<template>
    <Header :header="header"/>
    <h3>Wellcome to the stock system manager.</h3>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { headerInterface } from "@/interfaces/header";

export default defineComponent({
    components: {
        Header: require('@/components/Header').default
    },
    data() {
        return {
            header: {
                text: "Home",
                color: "primary"
            } as headerInterface
        }
    },   
});
</script>
<style lang="scss">
@import "../assets/_style.scss";
h3 {
    color: $secondary;
    font-weight: 600;
}
</style>