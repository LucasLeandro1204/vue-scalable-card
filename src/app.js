import Vue from 'vue';
import VueScalableCard from './VueScalableCard.vue';

Vue.component('VueScalableCard', VueScalableCard);

Vue.component('Example', {
  template: `
    <vue-scalable-card
      style="width: 150px; height: 150px"
      thumb="http://via.placeholder.com/350x150"
      @click="open = ! open" :opened="open">
    </vue-scalable-card>
  `,
  data () {
    return {
      open: false,
    }
  },

  methods: {
    toggle () {
      this.open = ! this.open;
    }
  }
});

window.Vue = Vue;
