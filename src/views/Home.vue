<template>
  <div class="home d-flex align-center flex-column">
    <div class="header-space"></div>
    <div class="hero d-flex flex-column">
      <!-- <v-img :src="myImg"></v-img> -->
      <h1 class="px-7">
        העתיד שלך מתחיל
        <span style="color: #b6b8ff; text-shadow: rgb(0 0 0 / 10%) 0px 0px 14px"
          >בהשקעה</span
        >
        של היום
      </h1>
      <h2 class="pa-11 mx-auto text-right">
        קבלו את המשכנתא שמתאימה לכם בדיוק – ליווי מקצועי, <br />
        שקיפות מלאה וביטחון כל הדרך לבית שלכם!
      </h2>
    </div>
    <!-- <Form /> -->
    <div class="on-us d-flex flex-column align-center justify-center">
      lets send
      <v-card class="pa-4 glass" style="width: 340px; height: 340px">
        <div class="d-flex flex-column">
          <v-text-field
            reverse
            v-model="contactForm.name"
            style="direction: rtl; text-align: center"
            color="#8186E8"
            label="שם"
            variant="solo"
          ></v-text-field>
          <v-text-field
            reverse
            v-model="contactForm.message"
            color="#8186E8"
            label="טלפון"
            variant="solo"
          ></v-text-field>
        </div>
        <v-btn @click="onSend">send</v-btn>
      </v-card>
    </div>
    <div class="on-us">SERVISESSSSSS</div>
    <!-- GGGGGGGGGGGGGGGGGGGG -->
  </div>
</template>
  
  <script>
import emailJs from "@emailjs/browser";

export default {
  data() {
    return {
      // myImg: "@/assets/image1.png",
      contactForm: {
        name: "",
        message: "",
      },
      myImg: "/src/assets/image1.png",
    };
  },
  methods: {
    checkContactForm() {
      if (
        this.contactForm.name.length <= 1 ||
        (this.contactForm.message.length > 10 && this.contactForm.message.length < 9)
      ) {
        alert("no good");
        return false;
      } else return true;
    },
    onSend() {
      if (this.checkContactForm()) {
        emailJs.init({ publicKey: "G7VPrLPZtTI0HAYKM" });
        emailJs.send("service_ljmf46p", "template_ily1rwj", this.contactForm);
        // resirect() to thank you page
      }
      // .then(alert("נשלח!"));

      // if() {

      // }

      // emailJs.init({ publicKey: "G7VPrLPZtTI0HAYKM" });
      // try {
      //   emailJs
      //     .send("service_ljmf46p", "template_ily1rwj", this.form)
      //     .then(alert("נשלח!"));
      // } catch (error) {
      //   alert("תקלה");
      // }
      // emailjs.sendEmail(this.form)
      // emailjs.send('service_ljmf46p','template_ily1rwj',this.form).then(alert('נשלח!'))
    },
  },
  components: {
  },
};
</script>
  
  <style lang="scss">
.home {
  .header-space {
    width: 100vw;
    height: 70px;
  }
  .v-text-field {
    // background: #ffffff00;
  }
  color: rgb(250, 250, 250);
  .hero {
    box-sizing: border-box;
    width: 100vw;
    height: 600px;
    background-image: url("@/assets/image1.png");
    background-size: cover;
    background-position: center;
    filter: blur(0px);
    animation-name: bluring;
    animation-duration: 3.1s;
    // background-image: '/assets/image1.png';

    h1 {
      text-align: center;
      margin-top: 120px;
      // font-size: 10vw;
      font-size: 44px;
      color: rgb(250, 250, 250);
    }

    h2 {
      font-weight: 400;
    }
  }

  .on-us {
    direction: rtl !important;
    text-align: right !important;
    width: 100vw;
    height: 600px;
    // background-color: #126f55;
    // background: linear-gradient(55deg, #0f4334, #61d6b5);
    // background: linear-gradient(37deg, #3b1d6c, #aed4ff);
    background: linear-gradient(313deg, #73599e, #ffffff);
    // background:
    //       linear-gradient(55deg, #0f4334, #61d6b5),
    //       url(https://grainy-gradients.vercel.app/noise.svg);

    .glass {
      background: rgba(255, 255, 255, 0.4);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      backdrop-filter: blur(3px);
      -webkit-backdrop-filter: blur(3px);
      border-radius: 10px;
      border: 1px solid rgba(255, 255, 255, 0.18);
    }
  }
}

@keyframes bluring {
  from {
    filter: blur(4px);
  }
  to {
    filter: blur(0px);
  }
}

@media (width >= 700px) {
  h1 {
    font-size: 70px !important;
  }
  h2 {
    font-size: 40px !important;
    font-weight: 500;
  }
}
</style>