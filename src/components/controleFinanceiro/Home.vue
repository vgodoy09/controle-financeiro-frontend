<template>
    <div class="home">
        <b-row>
          <b-col>
              <div class="col-xl-3 col-md-6">
                  <b-card>
                      <div class="icon-warning">
                          <i class="nc-icon nc-chart text-warning"></i>
                      </div>
                      <div >
                          <p class="card-category">Capacity</p>
                          <h4 class="card-title">105GB</h4>
                      </div>
                      <div >
                          <i class="fa fa-refresh"></i>Updated now
                      </div>
                  </b-card>
              </div>
          </b-col>
        </b-row>
        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-warning">
              <i class="nc-icon nc-chart text-warning"></i>
            </div>
            <div slot="content">
              <p class="card-category">Capacity</p>
              <h4 class="card-title">105GB</h4>
            </div>
            <div slot="footer">
              <i class="fa fa-refresh"></i>Updated now
            </div>
          </stats-card>
        </div>

        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-success">
              <i class="nc-icon nc-light-3 text-success"></i>
            </div>
            <div slot="content">
              <p class="card-category">Revenue</p>
              <h4 class="card-title">$1,345</h4>
            </div>
            <div slot="footer">
              <i class="fa fa-calendar-o"></i>Last day
            </div>
          </stats-card>
        </div>

        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-danger">
              <i class="nc-icon nc-vector text-danger"></i>
            </div>
            <div slot="content">
              <p class="card-category">Errors</p>
              <h4 class="card-title">23</h4>
            </div>
            <div slot="footer">
              <i class="fa fa-clock-o"></i>Last day
            </div>
          </stats-card>
        </div>

        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-info">
              <i class="nc-icon nc-favourite-28 text-primary"></i>
            </div>
            <div slot="content">
              <p class="card-category">Followers</p>
              <h4 class="card-title">+45</h4>
            </div>
            <div slot="footer">
              <i class="fa fa-refresh"></i>Updated now
            </div>
          </stats-card>
        </div>

    </div>
</template>

<script>
import {baseApiUrl} from "@/global"
import axios from "axios"


export default {
    name: "Home",
    data() {
        return {
            loading: true,
            loadingImport: true
        }
    },
    methods: {
        
    }
}

</script>

<style >
/* .text-center {
	text-align: center;
} */
.container-fluid{
    padding-right: 15px;
    padding-left: 15px;
}

.card {
    border-radius: 4px;
    background-color: #FFFFFF;
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
