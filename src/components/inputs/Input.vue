<template>
    <input
      :type="type" 
      :placeholder="label"
      :value="value" 
      @input="$emit('update:value', $event.target.value)"/>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        value: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        label: {
            type: String
        }
    }
})
</script>
<style lang="scss">
@import '../../assets/_style.scss';
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
</style>