<template>
<div class="page-title">
  <div>
    <i v-if="icon" :class="icon" :style="{fontSize: fontSize + 'px'}"></i>
    <span class="ml-3" :style="{fontSize: fontSize + 'px'}">{{ title }}</span> 
  </div>
  <hr>
</div>    
</template>

<script>
export default {
  name: "PageTitle",
  props: ["icon", "title", "fontSize"]
};
</script>

<style>
.page-title {
   grid-area: pageTitle;
}
.page-title h4 {
  margin: 0px;
}

/* .page-title i, span {
  color: #147dbf;
} */

.title-h1 {
  font-size: 40px;
}

.title-h4 {
  font-size: 20px;
}

hr {
  margin-top: 1px;
  color: #6d0a0a3f;
}
</style>