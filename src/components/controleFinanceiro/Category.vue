<template>
  <div class="category">
    <section class="separate">
      <h1 class="title"></h1>
    </section>
    <b-card>
      <div class="table-responsive">
        <div>
          <b-form-group horizontal label="Filtro" class="mb-0">
            <b-input-group>
              <b-form-input v-model="filter" placeholder="O que deseja buscar?"/>
            </b-input-group>
          </b-form-group>
        </div>
        <section class="separate">
          <h1 class="title"></h1>
        </section>
        <b-table
          :items="categories"
          :fields="fields"
          :current-page="currentPage"
          :per-page="perPage"
          :filter="filter"
          @filtered="onFiltered"
          class="table specific table-specific"
        >
          <template slot="process" slot-scope="row">
            <div class="rigth-especific">
              <b-button size="sm" @click="clickUpdate(row.item)" class="mr-2">Download</b-button>
            </div>
          </template>
        </b-table>
        <b-pagination
          :total-rows="totalRows"
          :per-page="perPage"
          v-model="currentPage"
          class="my-0"
        />
      </div>
    </b-card>

    <b-modal
      ref="myModalRef"
      no-close-on-esc
      no-close-on-backdrop
      id="modal1"
      centered
      class="text-center"
      hide-footer
      hide-header
    >
      <div v-show="loadingImport" style="width: 100%; text-align: center;">
        <img alt src="@/assets/loading-image.gif">
      </div>
    </b-modal>
  </div>
</template>

<script>
import { baseApiUrl } from "@/global";
import axios from "axios";

export default {
  name: "Category",
  data() {
    return {
      loading: true,
      loadingImport: true,
      linkPrint: "",
      fields: [
        { key: "id", label: "id Categoria" },
        { key: "name", label: "Nome" },
        { key: "id_category_father", label: "Categoria Pai" },
        { key: "process", label: "" }
      ],
      products: [],
      categories: [],
      wrapped: [],
      currentPage: 1,
      perPage: 5,
      totalRows: 0,
      pageOptions: [5, 10, 15],
      filter: null,
      modalInfo: { title: "", content: "" }
    };
  },

  mounted() {
    axios.get(`${baseApiUrl}/api/categories`).then(res => {
      this.categories = res.data;
      console.log(this.categories);
      this.totalRows = this.categories.length;
    });
  },

  methods: {
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },

    clickUpdate(category) {
      console.log(category);
    }
  }
};
</script>

<style>
.text-center {
  text-align: center;
}
.table thead th {
  border-bottom: unset !important;
}

.table-espefic {
  margin-bottom: unset;
  margin-top: unset;
}

.table-espefic-margin {
  margin-bottom: -1rem;
  margin-top: -1rem;
}

.table {
  padding: unset !important;
}

.table-specific td {
  background-color: #e6e8e880;
}

.table-specific thead {
  background-color: #02b1d896;
  width: 100%;
  height: 50px;
  margin: 0;
  color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.separate {
  height: 25px;
}
.rigth-especific {
  text-align: right !important;
}
.form-row {
  margin-right: unset;
  margin-left: unset;
}
</style>
