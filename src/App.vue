<template>
  <div class="app">
    <!-- conteúdo geral -->
    <Header v-if="!loading && isLogged"/>
    <Content v-if="!loading && isLogged"/>
    <Footer v-if="!loading && isLogged"/>
    <!-- fim -->

    <!-- página de login-->
    <Login class="application-login" v-if="!loading && !isLogged"/>
    <!-- carregamento da tela-->
    <!-- Carregamento-->
    <div v-if="loading" class="application-center-load-login">
      <img src="@/assets/save-form.gif" alt="Carregando">
    </div>
  </div>
</template>

<script>
//mapeamento de objetos gerais
import { mapState } from "vuex";
import { baseApiUrl } from "@/global";
//cliente http
import axios from "axios";
//eventos
import { EventBusLogged } from "@/eventBus/eventBusLogged";
//componentes
import Header from "@/components/template/Header";
import Content from "@/components/template/Content";
import Footer from "@/components/template/Footer";
import Login from "@/components/auth/Login";

export default {
  name: "App",
  computed: mapState(["isLogged"]),
  components: { Header, Content, Footer, Login },
  data() {
    return {
      loading: true
    };
  },
  methods: {
    async logged() {
      this.loading = true;
      const token = sessionStorage.getItem("token");
      const user = sessionStorage.getItem("user");
      console.log(this)
      this.$store.commit("ADD_ISLOGGED", false);
      if (token && user) {
        axios.post(`${baseApiUrl}/checkLogged`, { login: user, token: token }).then(resp => {
            if (!resp.data.error) {
              this.$store.commit("ADD_USER_CONTEXT", resp.data.userContext);
              this.$store.commit("ADD_ISLOGGED", true);
            }
            this.loading = false;
          });
      } else {
        this.$router.push({ name: "admin" });
        this.loading = false;
      }
    }
  },
  mounted() {
    this.logged();
    //evento de recarregar informações do usuário logado
    EventBusLogged.$on("refreshLogged", () => {
      this.logged();
    });
  }
};
</script>


<style>
* {
  font-family: "Lato", sans-serif;
}

body {
  margin: 0;
}

.app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  display: grid;
  grid-template-rows: 60px 1fr 40px;
  grid-template-columns: 100%;
  grid-template-areas:
    "header header"
    "content content"
    "footer footer";
}

</style>