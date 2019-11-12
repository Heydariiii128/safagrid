<template>
  <div class="v-sfGrid">
    <div class="v-sfTable">
      <table>
        <thead>
          <tr>
            <th v-for="(column, index) in dataTable.columns" :key="index">
              {{ column.text }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in filteredRows" :key="index">
            <td v-for="(col, index) in row" :key="index">{{ col.text }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <h2>SF GRID</h2>
  </div>
</template>

<script>
export default {
  props: ["dataTable"],

  data() {
    return {
      currentPage: 1,
      searchBy: "",
      rows: [],
      sort: {
        sortBy: "",
        desc: true
      }
    };
  },
  computed: {
    filteredRows() {
      return {
        rows: this.dataTable.rows
      };
    }
  }
};
</script>

<style scoped lang="scss">
h2 {
  font-size: 30px;
  color: blue;
}
</style>
