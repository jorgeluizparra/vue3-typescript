<template>
  <h1 :class="header.color">{{ header.text }}</h1>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { headerInterface } from "@/interfaces/header";

export default defineComponent({
  props: {
    header: Object as PropType<headerInterface>
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
