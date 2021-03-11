<template>
  <Header :header="header" />
  <Nav :pages="pages" />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { headerInterface } from "@/interfaces/header";
import { navInterface } from "@/interfaces/nav";

export default defineComponent({
  components: {
    Header: require("@/components/Header").default,
    Nav: require("@/components/Nav").default
  },
  data() {
    return {
      header: {
        text: "Stock Manager System",
        color: "primary"
      } as headerInterface,
      pages: [
        {
          title: "Home",
          route: "/"
        },
        {
          title: "Purchasing",
          route: "/purchasing"
        },
        {
          title: "Sales",
          route: "/sales"
        }
      ] as navInterface[]
    };
  }
});
</script>

<style lang="scss">
body {
  font-family: arial;
}
</style>
