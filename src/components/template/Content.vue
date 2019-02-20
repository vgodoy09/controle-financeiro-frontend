<template>
  <div class="wrapper">
    <Slide >
      <a id="home" href="home">
        <!-- <b-row>
          <b-col> -->
            <i class="fa fa-home"></i>
          <!-- </b-col>
          <b-col> -->
          <!-- <div class="line-up"> -->
            <span >Inicio</span>            
          <!-- </div> -->
          <!-- </b-col>
        </b-row> -->
      </a>
      <a id="profile" href="#">
        <!-- <b-row>
          <b-col> -->
            <i class="fa fa-user"></i>
          <!-- </b-col>
          <b-col> -->
            <span class="line-up">Perfil</span>            
          <!-- </b-col>
        </b-row> -->
      </a>
      <a id="category" href="category">
        <!-- <b-row>
          <b-col> -->
            <i class="fa fa-cubes"></i>
          <!-- </b-col>
          <b-col> -->
            <span class="line-up">Categorias</span>            
          <!-- </b-col>
        </b-row> -->
      </a>
      <a id="contas" href="#">
        <!-- <b-row>
          <b-col> -->
            <i class="fa fa-university"></i>
          <!-- </b-col>
          <b-col> -->
            <span class="line-up">Contas</span>            
          <!-- </b-col>
        </b-row> -->
      </a>
      <a id="transaction" href="#">
        <!-- <b-row>
          <b-col> -->
            <i class="fa fa-exchange"></i>
          <!-- </b-col>
          <b-col > -->
            <span class="line-up">Transações</span>            
          <!-- </b-col>
        </b-row> -->
      </a>
    </Slide>
    <main id="page-wrap">
      <div class="content">
        <router-view>

        </router-view>
      </div>
    </main>
  </div>
</template>

<script>
import { Slide } from 'vue-burger-menu'

export default {
  name: "Content",
  components: {
    Slide // Register your component
  }
};
</script>

<style scoped>
.bm-menu a {
    color: #b8b7ad;
}

.content {
  /* background: #b4bad2; */
  grid-area: content;
  padding: 2px 20px 10px 10px;
  margin-top: 0px;
  /* text-align: center; */
  /* height: 100% !important; */
}
.wrapper >>> .bm-burger-button {
  top: 10px !important;
}

main {
    /* background: #b4bad2; */
    height: 100%;
    overflow: auto;
    /* padding: 3em 2em; */
    /* text-align: center; */
}

.line-up {
  /* margin-left: 5px !important; */
  /* margin-top:-5px; */
  font-weight: bold;
  color:white;
  /* text-align: center; */
}


</style>