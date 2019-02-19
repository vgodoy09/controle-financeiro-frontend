<template>
  <footer class="footer">
    <div>
      <span>
        ©2019
        <strong>Victor Prado de Godoy</strong> - Todos os direitos reservados
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style>
.footer {
  grid-area: footer;
  background-color: #ddd;
  color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 10px;
}
</style>