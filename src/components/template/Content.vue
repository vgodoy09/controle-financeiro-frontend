<template>
  <div class="wrapper">
    <Slide>
      <a id="home" href="#">
        <span>Home</span>
      </a>
    </Slide>
    <div class="content">
      <router-view>

      </router-view>
    </div>
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
  grid-area: content;
  padding: 2px 20px 10px 170px;
  margin-top: 0px;
}
.bm-burger-button {
  top: 14px !important;
}

</style>