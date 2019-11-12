<template>
  <div class="v-sfGrid">
    <div class="v-sfTable">
      <table>
        <thead>
          <tr>
            <th v-for="(column, index) in filterColumns" :key="index">
              {{ column.text }}
            </th>
          </tr>
        </thead>
        <tbody>
          <template v-if="dataTable.rows.length">
            <tr v-for="row in filteredRows" :key="row.id">
              <td
                v-for="(col, index) in filterColumns"
                :key="index"
                :class="col.tdClass"
                :style="col.tdStyle"
              >
                <!-- <td> component (tdComp) -->
                <component
                  v-if="col.tdComp"
                  :is="forDynCompIs(col.tdComp)"
                  :row="row"
                  :field="col.field"
                  :value="row[col.field]"
                  :nested="row.__nested__"
                  v-bind="$props"
                >
                </component>
                <template v-else>
                  {{ row[col.field] }}
                </template>
              </td>
            </tr>
          </template>
          <tr v-else>
            <td :colspan="colLen" class="text-center text-muted">
              اطلاعاتی وجود ندارد.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "vue-sfgrid1",
  props: ["dataTable"],
  data() {
    return {
      rows: [],
      columns: []
    };
  },
  computed: {
    filteredRows() {
      this.rows = this.dataTable.rows;

      return this.dataTable.rows;
    },
    filterColumns() {
      this.columns = this.dataTable.columns.filter(x => {
        return typeof x.visible === "undefined" || x.visible;
      });
      return this.columns;
    },
    colLen() {
      return this.filterColumns.length;
    }
  },
  methods: {
    forDynCompIs(component) {
      return component; //typeof component === "object" ? component : this.comp[component];
    }
  }
};
</script>

<style scoped lang="scss">
.v-sfTable {
  width: 100%;
  overflow-x: auto;
  max-width: 100%;
  background-color: #fff;
  border: 1px solid #eee;

  table {
    width: 100%;
    direction: rtl;
    border-collapse: separate !important;
    border-spacing: 0;

    th {
      padding: 12px 30px;
      direction: rtl;
      font-family: tahoma;
      font-size: 14px;
      border-bottom: 1px solid #eee;
      color: rgb(33, 37, 41);
      font-weight: normal;
      background: #f9f9f9;
      vertical-align: bottom;

      &:not(:last-child) {
        border-left: 1px solid #eee;
      }
    }

    tr {
      td {
        padding: 14px 7px;
        line-height: 25px;
        text-align: center;
        min-width: 50px;

        &:not(:last-child) {
          border-left: 1px solid #eee;
        }
      }

      &:not(:last-child) td {
        border-bottom: 1px solid #eee;
      }

      &:nth-of-type(2n + 2) {
        background-color: #f9f9f9;
      }
    }
  }
}
</style>
