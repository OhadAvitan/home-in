<template>
  <div class="home d-flex align-center flex-column">
    <div class="hero d-flex flex-column">
      <!-- <v-img :src="myImg"></v-img> -->
      <h1 class="px-7">העתיד שלך מתחיל בהשקעה של היום</h1>
    </div>
    <!-- <Ress /> -->
    <div class="on-us d-flex flex-column align-center justify-center">
      lets send
      <v-card class="pa-4" style="background-color: #fff; width: 340px; height: 340px;">
        <div class="d-flex flex-column">
          <v-text-field v-model="form.name" style="direction: rtl; text-align: center;"  color="#8186E8" label="שם" variant="solo"></v-text-field>
          <v-text-field v-model="form.message" color="#8186E8" label="טלפון" variant="solo"></v-text-field>
        </div>
        <v-btn @click="sendTo">send</v-btn>
      </v-card>
    </div>
    <div class="on-us">
      SERVISESSSSSS
    </div>
    <!-- GGGGGGGGGGGGGGGGGGGG -->
  </div>
</template>

<script>
import emailJs from '@emailjs/browser';
import Ress from "@/components/Ress.vue";

export default {
  data() {
    return {
      // myImg: "@/assets/image1.png",
      form: {
        name: '',
        message: '',
      },
      myImg: "/src/assets/image1.png",
    };
  },
  methods: {
    sendTo() {
      // emailjs.sendEmail(this.form)
      emailJs.init({publicKey: "G7VPrLPZtTI0HAYKM"});
      try {
        emailJs.send('service_ljmf46p','template_ily1rwj',this.form).then(alert('נשלח!'))
      } catch (error) {
        alert('תקלה')
      }
      // emailjs.send('service_ljmf46p','template_ily1rwj',this.form).then(alert('נשלח!'))
    }
  },
  components: {
    Ress,
  },
};
</script>

<style lang="scss">
.home {
  color: rgb(250, 250, 250);
  .hero {
    box-sizing: border-box;
    width: 100vw;
    height: 600px;
    background-image: url('@/assets/image1.png');
    background-size: cover;
    background-position: center;
    // background-image: '/assets/image1.png';
    
    h1 {
      text-align: center;
      margin-top: 120px;
      // font-size: 10vw;
      font-size: 40px;
      color: rgb(250, 250, 250);
    }

  }

  .on-us {
    direction: rtl !important;
    text-align: right !important;
    width: 100vw;
    height: 600px;
    // background-color: #126f55;
    // background: linear-gradient(55deg, #0f4334, #61d6b5);
    background: linear-gradient(37deg, #3b1d6c, #aed4ff);
    // background:
    //       linear-gradient(55deg, #0f4334, #61d6b5),
    //       url(https://grainy-gradients.vercel.app/noise.svg);
  }
}

@media (width >= 700px) {
  h1 {
    font-size: 70px !important;
  }
}
</style>