<template>
    <div class="wrapper">
      <div class="main-panel">
        <!-- conteúdo geral -->
        <Header />
        <Content />
        <!-- <Footer /> -->
        <!-- fim -->  
      </div>
    </div>
</template>

<script>

//componentes
import Header from "@/components/template/Header";
import Content from "@/components/template/Content";
import Footer from "@/components/template/Footer";

export default {
  name: "principal",
  components: { Header, Content, Footer },
  data() {
    return {
    }
  }
};

</script>

<style>
.wrapper {
    position: relative;
    top: 0;
    height: 100vh;
}
body, .wrapper {
    min-height: 100vh;
    position: relative;
}
.main-panel {
    background: rgba(203, 203, 210, 0.15);
    position: relative;
    float: right;
    width: calc(100% - 260px);
    min-height: 100%;
}
</style>