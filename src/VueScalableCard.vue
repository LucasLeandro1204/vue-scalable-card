<template>
  <div class="vsc-wrapper">
    <div :class="['vsc-thumb', thumbClass]" :style="thumbStyle" ref="thumb">
      <div :style="{ background: gradient }" v-if="gradient"></div>
    </div>
  </div>
</template>

<script>
  const ScrollLeft = 0;

  export default {
    props: {
      opened: {
        type: Boolean,
        default: false,
      },

      bottom: {
        type: Number,
        default: 0,
      },

      thumb: {
        type: String,
      },

      thumbClass: {
        type: String,
        default: 'vsc-thumb--background',
      },

      transition: {
        type: String,
        default: '.3s',
      },

      gradient: {
        type: String,
      },
    },

    created () {
      window.addEventListener('resize', () => this.$forceUpdate());
    },

    computed: {
      thumbStyle () {
        const [top, left, right, bottom] = this.thumbPosition;

        return {
          top,
          left,
          right,
          bottom,
          transition: this.transition,
          backgroundImage: 'url(' + this.thumb + ')',
        };
      },

      thumbPosition () {
        if (! this.opened || ! this.$refs.thumb) {
          return [0, 0, 0, 0];
        }

        const boundings = this.$refs.thumb.getBoundingClientRect();

        return [
          boundings.top * -1 + 'px',
          boundings.left * -1 + 'px',
          boundings.right - window.innerWidth + 'px',
          this.bottom + 'px',
        ];
      },
    },
  };
</script>

<style lang="scss">
  .vsc-wrapper {
    position: relative;
  }

  .vsc-thumb {
    position: absolute;

    &.vsc-thumb--background {
      background-size: cover;
      background-position: center;
    }

    div > {
      width: 100%;
      height: 100%;
    }
  }
</style>
