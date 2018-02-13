<template>
  <div class="vsc-wrapper">
    <div class="vsc-thumb" :style="thumbStyle" ref="thumb">
      <div :style="{ background: gradient }" v-if="gradient"></div>
    </div>
  </div>
</template>

<script>
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
        if (! this.opened) {
          return [0, 0, 0, 0];
        }

        const boundings = this.$refs.banner.getBoundingClientRect();

        return [
          boundings.top * -1 + 'px',
          boundings.left * -1 + 'px',
          boundings.width - boundings.right + 'px',
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
    div > {
      width: 100%;
      height: 100%;
    }
  }
</style>
