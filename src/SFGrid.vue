<template>
  <div class="v-sfgrid">
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
  }
};
</script>

<style scoped lang="scss">
h2 {
  font-size: 30px;
  color: blue;
}
</style>
