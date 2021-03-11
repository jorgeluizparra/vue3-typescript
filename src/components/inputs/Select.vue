<template>
    <select 
      :value="value"
      @input="$emit('update:value', $event.target.value)" >
        <option selected value="">Select a product</option>
        <slot></slot>
    </select>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        value: {
            type: String
        }
    }
});
</script>

<style lang="scss">
@import '../../assets/_style.scss';
select {
    width: 50vw;
    border-radius: 10px;
    height: 55px;
    padding: 10px;
    border: 2px solid $secondary;
    margin-bottom: 20px;
    &:focus {
        outline: none;
    }
}
</style>