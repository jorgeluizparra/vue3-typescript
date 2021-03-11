<template>
    <Header :header="header"/>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { headerInterface } from "@/interfaces/header";

export default defineComponent({
    components: {
        Header: require("@/components/Header").default
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