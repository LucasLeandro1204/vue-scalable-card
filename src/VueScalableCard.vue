<template>
  <div class="vsc-wrapper" @click="click">
    <div
      :class="['vsc-thumb', thumbClass, { [thumbOpen]: opened }, { 'vsc-pointer': pointer }]"
      :style="thumbStyle"
      ref="thumb">

      <div class="vsc-thumb--gradient" :style="{ background: gradient }" v-if="gradient"></div>
      <div></div>
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

      pointer: {
        type: Boolean,
        default: false,
      },

      thumbOpen: {
        type: String,
        default: 'vsc-thumb--open',
      },

      thumbClass: {
        type: String,
        default: 'vsc-thumb--default',
      },

      transition: {
        type: String,
        default: 'all .3s cubic-bezier(0.420, 0.000, 0.580, 1.000)',
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

    methods: {
      click (e) {
        this.$emit('click', e);
      }
    },
  };
</script>

<style lang="scss">
  .vsc-wrapper {
    position: relative;
  }

  .vsc-thumb {
    position: absolute;

    &.vsc-thumb--default {
      border-radius: 8px;
      background-size: cover;
      background-position: center;

      .vsc-thumb--gradient {
        border-radius: 8px;
      }
    }

    &.vsc-thumb--open {
      border-radius: 0 !important;

      .vsc-thumb--gradient {
        border-radius: 0 !important;
      }
    }

    .vsc-thumb--gradient {
      width: 100%;
      height: 100%;
    }
  }

  .vsc-pointer {
    cursor: pointer;
  }
</style>
