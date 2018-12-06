<template>
	<div id="app">
        <LoginPage />
	</div>
</template> 

<script>

//import Header from "./components/template/Header";
import LoginPage from "./components/template/login/LoginPage";

export default {
  name: "App",
  components: { LoginPage },
  data: function() {
    return {
      
    };
  }

};

</script>