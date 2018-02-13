<template>
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
        default: '#FFFFFF',
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
          background: this.thumb,
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

<style lang="scss" scoped>

</style>
