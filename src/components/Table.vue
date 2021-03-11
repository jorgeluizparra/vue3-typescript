<template>
    <table>
        <tr>
            <th>Code</th>
            <th>Product</th>
            <th>In stock</th>
        </tr>
        <tr>
            <td>05465</td>
            <td>Banana</td>
            <td>50</td>
        </tr>
        <tr>
            <td>05465</td>
            <td>Banana</td>
            <td>50</td>
        </tr>
    </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        headers: {
            type: []
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
}
</style>