<template>
  <div class="ress">
    <!-- <h2>Ress</h2> -->
    <h3>כמה שאלות</h3>
    <v-card elevation="4">
      <!-- <v-carousel hide-delimiters :show-arrows="false">
        <template v-slot:prev="{ props }">
          <v-btn color="success" variant="elevated" @click="props.onClick"
            >Previous slide</v-btn
          >
        </template>
        <v-carousel-item
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          cover
        ></v-carousel-item>

        <v-carousel-item
          src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
          cover
        ></v-carousel-item>

        <v-carousel-item
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          cover
        ></v-carousel-item>
      </v-carousel> -->
      <v-carousel
        v-model="model"
        height="400"
        progress="#8186e8"
        hide-delimiters
        :show-arrows="false"
        style="direction: rtl; transform: matrix(-1, 0, 0, 1, 0, 0)"
      >
        <div>
          <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-sheet height="100%" style="transform: matrix(-1, 0, 0, 1, 0, 0)">
              <!-- <div class="d-flex fill-height justify-center align-center flex-column"> -->
              <!-- justify-center align-center -->
              <div class="d-flex flex-column py-6 px-4">
                <div><h2>{{ slide.question }}</h2></div>
                <div class="d-flex flex-column">
                  <v-radio-group v-model="survey[i]" style="direction: rtl">
                    <v-radio
                      class="py-2"
                      v-for="n in slide.options.length"
                      :value="slide.options[n - 1]"
                      :label="slide.options[n - 1]"
                      :key="n"
                    ></v-radio>
                  </v-radio-group>
                </div>
              </div>
            </v-sheet>
          </v-carousel-item>
        </div>
      </v-carousel>
    </v-card>
    <div class="d-flex justify-space-around align-center py-4">
      <v-btn variant="text" @click="model = Math.min(model + 1, slides.length-1)">המשך</v-btn>
      <v-btn variant="text" @click="model = Math.max(model - 1, 0)">הקודם</v-btn>
      <!-- {{ model }} -->
    </div>
    <v-btn @click="print()">PRINT</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lili: '#d5d0ff',
      // lili: 'linear-gradient(90deg, #d5d0ff, #8186e8)',
      model: 0,
      slides: [
        {
          question: "מה סכום ההלוואה שאתם צריכים?",
          options: ["עד 20 אלף שח", "עד 100 אלף שח", "עד 500 אלף שח"],
        },
        {
          question: "יש בבעלותכם נכס?",
          options: ["כן", "לא"],
        },
        {
          question: "q3",
          options: ["זסבזבזסבז", "עגגכעגכעגכעגכ", "כרכרכרכרכ"],
        },
      ],
      survey: {},
    };
  },
  methods: {
    print(){
      console.log(this.survey);
    }
  }
};
</script>

<style lang="scss">
.ress {
  display: block;
  width: 92%;
  .v-card {
    padding: 0;
    border-radius: 12px;

    .pre-btn {
      position: absolute;
      bottom: 20px;
      left: 20px;
    }
    .next-btn {
      position: absolute;
      bottom: 20px;
      right: 20px;
    }
  }
}
</style>






<!-- 
<template v-slot:prev="{ props }">
  <v-btn
    style="transform: matrix(-1, 0, 0, 1, 0, 0)"
    class="pre-btn"
    color="#fff"
    variant="elevated"
    @click="props.onClick"
  >
    הקודם</v-btn
  >
</template>
<template v-slot:next="{ props }">
  <v-btn
    style="transform: matrix(-1, 0, 0, 1, 0, 0); animation: none;"
    class="next-btn"
    color="info"
    variant="elevated"
    @click="props.onClick"
  >
    המשך</v-btn
  >
</template> -->