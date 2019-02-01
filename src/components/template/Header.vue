<template>
  <header class="header shadow">
    <!-- simbolo da home -->
    <!-- <a class="home-item">
      <i class="fa fa-home icon"></i>
    </a> -->

    <!-- <div class="title">{{title}}</div> -->
    
  </header>
</template>

<script>

export default {
  name: "Header",
  data() {
    return {
      title: "Controle Financeiro"
    };
  }
};
</script>

<style>
.header {
  grid-area: header;
  /* background-color: rgba(219, 218, 218, 0.493); */
  border-top: 3px solid #02b1d896;
  border-bottom: 3px solid rgba(83, 83, 83, 0.24);
  /* background-color: #33b5e5; */
  background: linear-gradient(to right, #04507c96, #02b1d896);
  max-height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
}

.shadow {
  -webkit-box-shadow:  inset 0 0 10px rgb(39, 39, 39);  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow:    inset 0 0 10px rgb(39, 39, 39);  /* Firefox 3.5 - 3.6 */
  box-shadow:          inset 0 0 10px rgb(39, 39, 39);  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
}

.title {
  font-size: 1.6rem;
  color: #ffffff;
  font-weight: bold;
  flex-grow: 1;
  text-align: center;
}

.icon {
  color: #ffffff;
  font-size: 1.6rem;
}

header.header > a.home-item {
  width: 60px;
  height: 100%;
  justify-self: flex-start;
  text-decoration: none;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
}

header.header > a.home-item:hover {
  color: #fff;
  background-color: rgba(0, 0, 0, 0.336);
}

</style>