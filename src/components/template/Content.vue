<template>
  <div class="wrapper">
    <Slide>
      <a id="home" href="#">
        <i class="nc-icon nc-chart-pie-35"></i>
        <span>Inicio</span>
      </a>
      <a id="profile" href="#">
        <i class="nc-icon nc-circle-09"></i>
        <span>Perfil</span>
      </a>
      <a id="category" href="#">
        <i class="nc-icon nc-chart-pie-35"></i>
        <span>Categorias</span>
      </a>
      <a id="contas" href="#">
        <i class="nc-icon nc-chart-pie-35"></i>
        <span>Contas</span>
      </a>
      <a id="transaction" href="#">
        <i class="nc-icon nc-chart-pie-35"></i>
        <span>Transações</span>
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

<style>
.content {
  /* background: #b4bad2; */
  grid-area: content;
  padding: 2px 20px 10px 10px;
  margin-top: 0px;
  /* text-align: center; */
  /* height: 100% !important; */
}
.bm-burger-button {
  top: 10px !important;
}

main {
    /* background: #b4bad2; */
    height: 100%;
    overflow: auto;
    /* padding: 3em 2em; */
    /* text-align: center; */
}

</style>