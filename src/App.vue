<template>
  <Header :message="message" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { messageInterface } from "@/interfaces/message";

export default defineComponent({
  components: {
    Header: require("@/components/Header").default
  },
  data() {
    return {
      message: {
        text: "Stock manager system",
        color: "primary"
      } as messageInterface
    };
  }
});
</script>

<style lang="scss">
body {
  font-family: arial;
}
</style>
