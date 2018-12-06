
<template>
  <section class="form-dark">
   <!-- <div class="row">
      <div class="col-lg-12 col-md-5">-->
        <div class="card-image" :style="{'backgroundImage': 'url(https://mdbootstrap.com/img/Photos/Others/pricing-table7.jpg)', 'width': '28rem'}"> 
          <div class="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
            <div class="text-center">
              <h3 class="white-text mb-5 mt-4 font-weight-bold"><strong>SIGN</strong> <a class="green-text font-weight-bold"><strong> UP</strong></a></h3>
            </div>
            <div>
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                  <b-form-group id="loginInputGroup"
                                label="Login:"
                                label-for="loginInput1">
                    <b-form-input id="loginInput1"
                                  type="text"
                                  v-model="form.login"
                                  required
                                  placeholder="Enter login">
                    </b-form-input>
                  </b-form-group>
                  <b-form-group id="loginInputGroup2"
                                label="Password:"
                                label-for="loginInput2">
                    <b-form-input id="loginInput2"
                                  type="password"
                                  v-model="form.password"
                                  required
                                  placeholder="Enter Password">
                    </b-form-input>
                  </b-form-group>
                  <b-form-group id="loginGroup4">
                    <b-form-checkbox-group  v-model="form.checked" id="loginChecks">
                      <b-form-checkbox  value="true">Permanecer conectado</b-form-checkbox>
                    </b-form-checkbox-group>
                  </b-form-group>
                  <div class="row">
                      <div class="d-flex align-items-center mb-4">
                        <div class="text-center mb-3 col-md-12"> 
                          <b-button  color="success" rounded type="button" class="btn-block z-depth-1">Sign in</b-button>
                        </div>
                      </div>
                  </div>
                  <div class="col-lg-12 col-md-12">
                      <p class="font-small white-text d-flex justify-content-end">Have an account? <a href="#" class="green-text ml-1 font-weight-bold"> Log in</a></p>
                  </div>
                </b-form>
            </div>
          </div>
       </div>
      <!--</div>
    </div>-->
  </section>
</template>

<script>
export default {
  data () {
    return {
      form: {
        email: '',
        name: '',
        food: null,
        checked: []
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
    }
  }
}
</script>