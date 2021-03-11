<template>
    <router-link class="link" 
      v-for="(page, index) in pages" 
      :key="index" 
      :to="page.route">
        {{ page.title }}
    </router-link>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { navInterface } from "@/interfaces/nav";

export default defineComponent({
    props: {
        pages:  Array as PropType<navInterface[]>
    }
});
</script>
<style lang="scss">
@import '../assets/_style.scss';
.link {
    color: $secondary;
    font-weight: 600;
    font-size: 20px;
    margin: 0 10px 10px 0;
}
</style>