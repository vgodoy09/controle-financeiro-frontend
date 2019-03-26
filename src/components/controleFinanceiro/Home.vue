<template>
  <div class="home">
    <b-row>
      <b-col>
        <div class="col-xl-3 col-md-6">
          <b-card>
            <div class="icon-warning">
              <i class="fa fa-pie-chart fa-4x"></i>
            </div>
            <div>
              <p class="card-category">Capacity</p>
              <h4 class="card-title">105GB</h4>
            </div>
            <div>
              <i class="fa fa-refresh"></i>Updated now
            </div>
          </b-card>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { baseApiUrl } from "@/global";
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      loading: true,
      loadingImport: true
    };
  },
  methods: {}
};
</script>

<style >
/* .text-center {
	text-align: center;
} */
.container-fluid {
  padding-right: 15px;
  padding-left: 15px;
}

.card {
  border-radius: 4px;
  background-color: #ffffff;
  margin-bottom: 30px;
}

.card {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}
</style>
