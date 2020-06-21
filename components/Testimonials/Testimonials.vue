<template>
<div class="root">
  <div :class="{ fixed: isDesktop }">
    <v-row class="spacing6">
      <v-col md="5" offset-lg="1" cols="12" class="px-6">
        <div class="item slider-wrap">
          <hidden point="smDown">
            <div class="decoration">
              <svg width="900px" height="618px" viewBox="0 0 900 618" version="1.1">
                <defs>
                  <linearGradient id="linearGradient-1" x1="78.2441494%" y1="65.8737759%" x2="10.5892887%" y2="33.8596367%">
                    <stop :stop-color="$vuetify.theme.themes.dark.primary" offset="0%" />
                    <stop :stop-color="$vuetify.theme.themes.dark.primarydark" offset="100%" />
                  </linearGradient>
                </defs>
                <g stroke="none" stroke-width="0" fill="none" fill-rule="evenodd">
                  <path id="Oval" d="M442.972909,617.331576 C569.290851,617.331576 618.618612,525.937324 804.142458,549.304771 C989.666303,572.672218 872.7227,109.743835 732.652282,54.307977 C592.581863,-1.12788075 538.308155,61.549598 304.148084,8.36113994 C69.9880137,-44.8273182 0,167.6782 0,308.489881 C0,450.379879 177.014996,617.331576 442.972909,617.331576 Z" fill="url(#linearGradient-1)" />
                </g>
              </svg>
            </div>
          </hidden>
         <div class="wrapper-content">
            <title-main :align="isMobile ? 'center' : 'left'">
                    <span>
                                 {{ $t('saasLanding.testi_title') }}
                    </span>
                  </title-main>
        
          <p
                      :class="[isMobile ? 'text-center' : 'text-left']"
            v-html="$t('saasLanding.testi_content')"
            class="testi-subtitle use-text-subtitle2 text-left"
            ></p>

            <v-btn class="button" target="_blank" href="https://explorer.livepeer.org/accounts/0xf4e8ef0763bcb2b1af693f5970a00050a6ac7e1b/campaign" color="btn-cta">
              Stake LPT
                  <v-icon dark right>fas fa-external-link-alt</v-icon>
            </v-btn>
        </div>
        </div>
      </v-col>
      <v-col md="6" cols="12" class="item use-hidden-sm-down px-6">
         <div class="illustration-right">
              <section v-if="loaded" class="parallax-wrap">
                <parallax
                  :speed-factor="isMobile ? 0 : 0.15"
                  :section-height="isMobile ? 0 : 300"
                  direction="up"
                >
                  <div class="viewport">
                    <figure class="figure screen">
                      <img :src="imgAPI.staking[0]" alt="screen" />
                    </figure>
                  </div>
                </parallax>
              </section>
              <section
                v-if="loaded && !isMobile"
                class="parallax-wrap"
              >
                <parallax
                  :speed-factor="isMobile ? 0 : 0.15"
                  :section-height="100"
                  direction="down"
                >
                  <div class="viewport">
                    <figure class="figure graphic">
                      <img :src="imgAPI.staking[1]" alt="illustration" />
                    </figure>
                  </div>
                </parallax>
              </section>
            </div>
      </v-col>
    </v-row>
  </div>
</div>
</template>

<style lang="scss" scoped>
@import './testi-style.scss';
</style>

<script>
import Parallax from 'vue-parallaxy'
import Hidden from '../Hidden'
import imgAPI from '~/static/images/imgAPI'
import Title from '../Title'

export default {
  components: {
    Parallax,
    Hidden,
    Slick: () => import('vue-slick'),
    'title-main': Title
  },
  data() {
    return {
      imgAPI,
      loaded: false,
      currentSlide: 0,
      slickOptions: {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        fade: true,
        arrows: false,
        pauseOnHover: false
      }
    }
  },
  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.includes(this.$mq)
    },
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.includes(this.$mq)
    }
  },
  mounted() {
    this.loaded = true
  },
  methods: {
    handleAfterChange(event, slick, currentSlide) {
      this.currentSlide = currentSlide
    },
    gotoSlide(index) {
      this.$refs.slider.goTo(index)
    }
  }
}
</script>
