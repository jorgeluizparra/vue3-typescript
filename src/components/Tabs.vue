<template>
    <div>
        <button 
          v-for="(tab, index) in tabs" 
          :key="index"
          @click="$emit('update:tab', tab)">{{tab}}</button>
        <slot></slot>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        tabs: {
            type: Array,
            required: true
        }
    }
});
</script>
<style lang="scss">
    button {
        margin: 0 10px 10px 0;
    }
</style>