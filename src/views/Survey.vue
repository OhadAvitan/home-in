<template>
  <div>
    <div class="header-space"></div>
    <SurveyCmp />
  </div>
</template>

<script>

import SurveyCmp from '@/components/SurveyCmp.vue'

export default {
    components: {
        SurveyCmp,
    }

}
</script>

<style lang="scss">
.header-space {
    width: 100vw;
    height: 70px;
  }
</style>