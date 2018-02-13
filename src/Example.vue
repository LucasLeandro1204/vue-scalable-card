<template>
  <vue-scalable-card
    class="card"
    :opened="open"
    thumb="https://cdn-images-1.medium.com/max/2000/1*-KgEvwnPZwvfEL5mSi4Cyg.jpeg"
    pointer
    :bottom="-25"
    gradient="linear-gradient(to top, rgba(221, 94, 137, .8), rgba(255, 255, 255, .5))"
    @click="toggle">
  </vue-scalable-card>
</template>

<script>
  import VueScalableCard from './VueScalableCard.vue';

  export default {
    components: {
      VueScalableCard,
    },

    data () {
      return {
        open: false,
      };
    },

    methods: {
      toggle () {
        this.open = ! this.open;
      },
    },
  };
</script>

<style>
  .card {
    width: 100%;
    height: 250px;
    max-width: 320px;
  }
</style>
