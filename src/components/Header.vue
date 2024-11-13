<template>
  <div class="header d-flex flex-column justify-center align-end menu-out">
    <div class="container pe-3 d-flex justify-center align-center">
      <div
        class="d-flex flex-column px-2"
        style="
        font-weight: 500;
          font-size: 20px;
          line-height: 20px;
          text-align: right;
        ">
        <div class="">הום</div>
        <div class="">משכנתאות</div>
        <!-- <div class="">השקעות</div> -->
      </div>
      <!-- <div class="px-2 my-auto">הום</div> -->
      <v-img :src="imgSrc" class="logo"></v-img>
      <!-- <v-img :src="asd" class="logo"></v-img> -->
      <!-- <img :src="imgSrc" class="logo" alt="" /> -->
    </div>
  </div>
</template>

<script>
// import asd from '@/assets/logohi.png'

export default {
  data() {
    return {
      imgSrc: "favicon.ico",
      // imgSrc1: "/favicon.ico",
      //   imgSrc: "/public/favicon.ico",
    };
  },
};
</script>

<style lang="scss">
.header {
  box-shadow: 0px 1px 12px 0px rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100vw;
  height: 70px;
  color: white;
  color: rgb(41, 23, 113);
    // background-color: #c6ffdb;
  // background-color: #d5d0ff;
  // background-color: #b6b8ff;
  background-color: #fdfdff;
  font-family: Fredoka, sans-serif;
  //   background-color: #414141;

  .logo {
    display: inline-flex;
    width: 44px;
    height: 44px !important;
  }
}

@keyframes menuOut {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-70px);
  }
}

.menu-out {
  animation: menuOut linear;
  animation-timeline: view();
  // animation-range: entry 0%;
  animation-range: entry 100%;
}


@media (width >= 700px) {
  .container {
    padding-inline-end: 28px !important;
  }
}
</style>