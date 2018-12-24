
<template>
    <div v-if="!logado" class="limiter">
      <div class="container-login100">
        <div class="wrap-login100 p-l-85 p-r-85 p-t-55 p-b-55">
          <div id="login" class="transform-perspective-right">
            <span class="login100-form-title p-b-32"> 
              Login
            </span>
   <!-- <section class="form-dark">
    <div class="row">
      <div class="col-lg-12 col-md-5">
        <div class="card-image" :style="{'backgroundImage': 'url(https://mdbootstrap.com/img/Photos/Others/pricing-table7.jpg)', 'width': '28rem'}"> 
          <div class="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
            <div class="text-center">
              <h3 class="white-text mb-5 mt-4 font-weight-bold"><strong>SIGN</strong> <a class="green-text font-weight-bold"><strong> UP</strong></a></h3>
            </div>-->
            <div>
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                  <span class="txt1 p-b-11"> 
                    Username
                  </span>
                  <div class="wrap-input100 validate-input m-b-36" data-validate = "Username is required">
                      <b-form-input class="input100" id="loginInput1" @keyup.enter="clickLogin"
                                    type="text"
                                    size="lg"
                                    v-model="form.login"
                                    required
                                    placeholder="Login">
                      </b-form-input>
                      <span class="focus-input100"></span>
                  </div>
                  <span class="txt1 p-b-11"> 
                    Password
                  </span>
                  <div class="wrap-input100 validate-input m-b-12" data-validate = "Password is required">
                    <span class="btn-show-pass">
                      <i class="fa fa-eye"></i>
                    </span>
                    <b-form-input class="input100" id="loginInput2" @keyup.enter="clickLogin"
                                  type="password"
                                  v-model="form.password"
                                  size="lg"
                                  required
                                  placeholder="Password">
                    </b-form-input>
                    <span class="focus-input100"></span>
                  </div>
                  <div class="flex-sb-m w-full p-b-48">
                    <b-form-checkbox-group v-model="form.checked" id="loginChecks">
                        <b-form-checkbox  id="ckb1" value="true"><label class="label-checkbox100New" for="ckb1"> Remember me</label></b-form-checkbox>
                    </b-form-checkbox-group>
                    <div>
                      <a href="#" class="txt3">
                        Forgot Password?
                      </a>
                    </div>
                  </div>
                  <div class="container-login100-form-btn">
                  <b-button class="login100-form-btn" @click="clickLogin" >
                    Login
                  </b-button>
                </div>
                  <!--<div class="row">
                      <div class="d-flex align-items-center mb-4">
                        <div class="text-center mb-3 col-md-12"> 
                          <b-button  color="success" rounded type="button" class="btn-block z-depth-1">Sign in</b-button>
                        </div>
                      </div>
                  </div> 
                  <div class="col-lg-12 col-md-12">
                      <p class="font-small white-text d-flex justify-content-end">Have an account? <a href="#" class="green-text ml-1 font-weight-bold"> Log in</a></p>
                  </div> -->
                </b-form>
            </div>
          <!--</div>
       </div>
      </div>
    </div>
    </section>-->
          </div>
        </div>
      </div>
    </div>
    <div v-else> 
        <HomePage />
    </div>
</template>

<style>
  .form-control {
        border: 0px solid #ced4da !important;
        height: 55px !important;
        border-radius: 0rem !important;
        padding: 0 25px 0 25px !important;
  } 
  .form-control-lg {
    font-size: 1rem !important;
  }
</style>




<script>

//import HomePage from "../home/HomePage";

export default {
  //components: { HomePage },
  data () {
    return {
      form: {
        logado: false,
        email: '',
        name: '',
        food: null,
        checked: [],
        messageError: ''
      },
      foods: [
        { text: 'Select One', value: null },
        'Carrots', 'Beans', 'Tomatoes', 'Corn'
      ],
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.name = '';
      this.form.food = null;
      this.form.checked = [];
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    },
    clickLogin: function() {
			loggerInstance(this);
		}
  }
}

//método de logar usuário
function loggerInstance(vue) {
	
	if(vue.login == '' || vue.password == '') {
		vue.messageError = "Usuario inexistente";
		vue.error = true;
		return;
	}
	console.log('login' + vue.login);
	console.log('password' + vue.password);
	/*axios.post("/clinica/login/"+vue.login + "/"+vue.password).then(response => {

		if(response.data.error) {
			vue.messageError = response.data.message;
			vue.error = true;
		}
		else {
			window.location.href = "/clinica";
		}
		
	}).catch(error => {
		console.log(error)
	})*/
  vue.logado = true;
}
</script>