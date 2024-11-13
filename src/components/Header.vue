<template>
  <div class="header d-flex flex-column justify-center align-end">
    <div class="container pe-3 d-flex justify-center align-center">
      <div
        class="d-flex flex-column px-2 text-700"
        style="
          font-weight: 600;
          font-size: 20px;
          line-height: 20px;
          text-align: right;
        "
      >
        <div class="">הום</div>
        <div class="">השקעות</div>
      </div>
      <!-- <div class="px-2 my-auto">הום</div> -->
      <v-img :src="imgSrc" class="logo"></v-img>
      <!-- <img :src="imgSrc" class="logo" alt="" /> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgSrc: "/favicon.ico",
      //   imgSrc: "/public/favicon.ico",
    };
  },
};
</script>

<style lang="scss">
.header {
  width: 100vw;
  height: 70px;
  //   background-color: #c6ffdb;
  background-color: #d5d0ff;
  font-family: Fredoka, sans-serif;
  //   background-color: #414141;

  .logo {
    display: inline-flex;
    width: 44px;
    height: 44px !important;
  }
}

@media (width >= 700px) {
  .container {
    padding-inline-end: 28px !important;
  }
}
</style>