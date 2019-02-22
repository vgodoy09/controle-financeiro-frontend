<template>
  <div class="wrapper">
    <Slide >
      <a id="home" href="home">
          <div class="image-menu">
            <i class="fa fa-home"></i>
          </div>
          <div class="line-up">
            <span  >Inicio</span>            
          </div>
      </a>
      <a id="profile" href="#">
          <div class="image-menu">
            <i class="fa fa-user"></i>
          </div>
          <div class="line-up">
            <span >Perfil</span>            
          </div>
      </a>
      <a id="category" href="category">
          <div class="image-menu">
            <i class="fa fa-cubes"></i>
          </div>
          <div class="line-up">
            <span >Categorias</span>            
          </div>
      </a>
      <a id="contas" href="#">
          <div class="image-menu">
            <i class="fa fa-university"></i>
          </div>
          <div class="line-up">
            <span >Contas</span>            
          </div>
      </a>
      <a id="transaction" href="#">
          <div class="image-menu">
            <i class="fa fa-exchange"></i>
          </div>
          <div class="line-up">
            <span >Transações</span>            
          </div>
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
  width: 100%; 
  margin-top : -1px;
  margin-left: 20px;
  font-weight: bold;
  color:white;
}

.image-menu {
  width: 40px;
}

</style>