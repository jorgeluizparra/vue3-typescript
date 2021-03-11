<template>
  <Header :header="header" />
  <Nav :pages="pages" />
  <router-view />
  <Table :headers="table.headers" :items="table.data" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { headerInterface } from "@/interfaces/header";
import { navInterface } from "@/interfaces/nav";
import { productVolumeInterface } from "./interfaces/productVolume";

export default defineComponent({
  components: {
    Header: require("@/components/Header").default,
    Nav: require("@/components/Nav").default,
    Table: require('@/components/Table').default,
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
      ] as navInterface[],
      table: {
        headers: [
          {
            text: "Product code",
            value: "_id"
          },
          {
            text: "Product",
            value: "productName"
          },
          {
            text: "Quantity",
            value: "volume"
          }
        ],
        data: [
          {
            _id: "25647895",
            productName: "banana",
            volume: "80"
          },
          {
            _id: "25647896",
            productName: "maça",
            volume: "102"
          },
          {
            _id: "25647898",
            productName: "melancia",
            volume: "50"
          }
        ] as productVolumeInterface[]
      }
    };
  }
});
</script>

<style lang="scss">
body {
  font-family: arial;
}
</style>
