<template>
  <h1 :class="message.color">{{ message.text }}</h1>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { messageInterface } from "../interfaces/message";

export default defineComponent({
  props: {
    message: Object as PropType<messageInterface>
  }
});
</script>

<style lang="scss">
@import "../assets/style.scss";
.primary {
  color: $primary;
}
.success {
  color: $success;
}
.error {
  color: $error;
}
</style>
