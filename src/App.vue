<template>
  <Message :message="message" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { messageInterface } from "@/interfaces/message";

export default defineComponent({
  components: {
    Message: require("@/components/Message").default
  },
  data() {
    return {
      message: {
        text: "Hello from app!",
        color: "blue"
      } as messageInterface
    };
  }
});
</script>

<style lang="scss"></style>
