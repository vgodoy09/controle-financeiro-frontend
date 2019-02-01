<template>
  <div>
    <div class="pen-title">
      <h1>Atendimento Escola Bíblica</h1>
    </div>
    <!-- Form Module-->
    <div class="module form-module">
      <div class="toggle"></div>
      <div class="form">
        <h2>
          <img src="@/assets/logo.jpg" width="30%" height="20%" alt="Bíblia">
        </h2>
        <form v-on:submit.prevent="logged">
          <input type="text" ref="refLogin" v-model="login" autofocus placeholder="Usuário">
          <input type="password" v-model="password" placeholder="Senha">
          <button>Entrar</button>
        </form>
      </div>
      <div class="cta">
        <a href="#">Lembrar Senha!</a>
      </div>
    </div>
  </div>
</template>

<script>
//cliente http
import axios from "axios";
//variaveis globais
import { baseApiUrl } from "@/global";
//eventos
import { EventBusLogged } from "@/eventBus/eventBusLogged";

var configMessage = {
              iconPack: "fontawesome",
              position: "top-center",
              className: ["toast-global"],
              type: "error",
              duration: 3000
            }

export default {
  name: "Login",
  data() {
    return {
      login: null,
      password: null
    };
  },
  methods: {
    logged() {
      if(this.login == null) {
        this.$toasted.show("O usuário é obrigatório", configMessage);
        return;
      }

      if(this.password == null) {
        this.$toasted.show("A senha é obrigatório", configMessage);
        return;
      }

      axios.post(`${baseApiUrl}/login`, { userName: this.login, password: this.password}).then(resp => {
          if (resp.data.error) {
            this.$toasted.show(resp.data.message, configMessage);
          } else {
            sessionStorage.setItem("token", resp.data.token);
            sessionStorage.setItem("user", this.login);
            EventBusLogged.$emit("refreshLogged");
          }
        }).catch(error => {
          this.$toasted.show("Ocorreu um erro inesperado, contacte o administrador", configMessage);
        });
    }
  },
  mounted() {
    this.$refs.refLogin.focus();
  }
};
</script>

<style>
/* Pen Title */
.pen-title {
  padding: 20px 0;
  text-align: center;
  letter-spacing: 2px;
}
.pen-title h1 {
  margin: 0 0 20px;
  font-size: 48px;
  font-weight: 300;
  color: #666676;
}

.pen-title span {
  font-size: 12px;
}
.pen-title span .fa {
  color: #33b5e5;
}
.pen-title span a {
  color: #33b5e5;
  font-weight: 600;
  text-decoration: none;
}

/* Form Module */
.form-module {
  position: relative;
  background: #ffffff;
  max-width: 400px;
  width: 100%;
  border-top: 5px solid #33b5e5;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
}
.form-module .toggle {
  cursor: pointer;
  position: absolute;
  top: -0;
  right: -0;
  background: #33b5e5;
  width: 30px;
  margin: -5px 0 0;
  color: #ffffff;
  font-size: 14px;
  line-height: 30px;
  text-align: center;
}
.form-module .toggle .tooltip {
  position: absolute;
  top: 5px;
  right: -65px;
  display: block;
  background: rgba(0, 0, 0, 0.6);
  width: auto;
  padding: 5px;
  font-size: 14px;
  line-height: 1;
  text-transform: uppercase;
}
.form-module .toggle .tooltip:before {
  content: "";
  position: absolute;
  top: 5px;
  left: -5px;
  display: block;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-right: 5px solid rgba(0, 0, 0, 0.6);
}
.form-module .form {
  display: none;
  padding: 35px;
}
.form-module .form:nth-child(2) {
  display: block;
}
.form-module h2 {
  margin: 0 0 20px;
  color: #33b5e5;
  font-size: 20px;
  font-weight: 400;
  line-height: 1;
  text-align: center;
}
.form-module input {
  outline: none;
  display: block;
  width: 100%;
  border: 1px solid #d9d9d9;
  margin: 0 0 20px;
  padding: 10px 15px;
  box-sizing: border-box;
  transition: 0.3s ease;
}
.form-module input:focus {
  border: 1px solid #33b5e5;
  color: #333333;
}
.form-module button {
  cursor: pointer;
  background: #33b5e5;
  width: 100%;
  border: 0;
  padding: 10px 15px;
  color: #ffffff;
  transition: 0.3s ease;
}
.form-module button:hover {
  background: #178ab4;
}
.form-module .cta {
  background: #f2f2f2;
  width: 100%;
  padding: 15px 40px;
  box-sizing: border-box;
  color: #666666;
  font-size: 12px;
  text-align: center;
}
.form-module .cta a {
  color: #333333;
  text-decoration: none;
  font-size: 13px;
  font-weight: bold;
}

.form-module .cta a:hover {
  text-decoration: underline #178ab4;
}
</style>
