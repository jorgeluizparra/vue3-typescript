<template>
    <table>
        <tr>
            <th 
              v-for="(header, index) in headers" 
              :key="index">
                {{header.text}}
            </th>
        </tr>
        <tr 
          v-for="(item, index) in items" 
          :key="index">
            <td 
              v-for="(header, index) in headers" 
              :key="index">
                {{ item[header.value] }}
              </td>
        </tr>
    </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        headers: {
            type: Array,
            required: true
        },
        items: {
            type: Array,
            required: true
        }
    }
});
</script>

<style lang="scss">
@import "../assets/_style.scss";

table {
    margin-top: 30px;
    border-collapse: collapse;
    th {
        background-color: $primary;
        color: white;
        padding: 13px 30px;
    }
    td {
        padding: 10px;
        border: 1px solid lightgray;
    }
}
</style>