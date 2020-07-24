<template>
  <div class="root">
    <div class="decoration">
      <svg class="wave">
        <use xlink:href="/images/saas/deco-bg.svg#main" />
      </svg>
    </div>
    <v-container :class="{ fixed: isDesktop }">
      <div class="item">
        <title-main align="center">
          <span>
            {{ $t('saasLanding.feature_title1') }}
            <strong>
              {{ $t('saasLanding.feature_titlestrong1') }}
            </strong>
          </span>
        </title-main>
        <div class="tab">
          <v-row class="spacing6">
            <v-col
              v-if="!isMobile"
              class="pa-6"
              md="1"
              cols="12"
            />
            <v-col md="10" cols="12" class="pa-6">
                                  <section>
                      <h6 class="text-center use-text-subtitle2">
                        {{ $t('saasLanding.feature_desc1') }}
                      </h6>
                      <div class="illustration-center">
                          <img src="/images/livepool-excavator-flat.png" alt="screen" />
                      </div>
                    </section>
            </v-col>
          </v-row>
        </div>
      </div>
      <div class="item">
        <u-animate-container>
          <v-row :class="[isMobile ? 'column-reverse' : 'row']">
            <v-col cols="12" md="6">
              <div class="illustration-left">
                <section v-if="loaded" class="parallax-wrap use-hidden-md-down">
                  <parallax
                    :speed-factor="isMobile ? 0 : 0.15"
                    :section-height="isMobile ? 0 : 400"
                    direction="up"
                  >
                    <div class="viewport">
                      <figure class="screen">
                        <img class="responsive" src="/images/livepool-transcoding.png" alt="screen" />
                      </figure>
                    </div>
                  </parallax>
                </section>
                <section v-if="loaded" class="use-hidden-md-up">
                    <div class="viewport">
                      <figure class="screen">
                        <img class="responsive" src="/images/livepool-transcoding.png" alt="screen" />
                      </figure>
                    </div>
                </section>
              </div>
            </v-col>
            <v-col md="6" cols="12">
              <u-animate
                :offset="-100"
                name="fadeInLeftShort"
                delay="0.2s"
                duration="0.4s"
              >
                <div class="desc">
                  <title-main :align="isMobile ? 'center' : 'left'">
                    <span>
                      {{ $t('saasLanding.feature_title2') }}
                      <strong>
                        {{ $t('saasLanding.feature_titlestrong2') }}
                      </strong>
                    </span>
                  </title-main>
                  <h6 :class="[isMobile ? 'text-center' : 'text-left']" class="use-text-subtitle2">
                    {{ $t('saasLanding.feature_desc2') }}
                  </h6>
                </div>
              </u-animate>
            </v-col>
          </v-row>
        </u-animate-container>
      </div>
      <div class="item">
        <v-row>
          <v-col md="6" cols="12">
            <u-animate-container>
              <u-animate
                :offset="-100"
                name="fadeInRightShort"
                delay="0.2s"
                duration="0.4s"
              >
                <div class="desc">
                  <title-main :align="isMobile ? 'center' : 'right'">
                    <span>
                      {{ $t('saasLanding.feature_title3') }}
                      <strong>
                        {{ $t('saasLanding.feature_titlestrong3') }}
                      </strong>
                    </span>
                  </title-main>
                  <h6 :class="[isMobile ? 'text-center' : 'text-right']" class="use-text-subtitle2">
                    {{ $t('saasLanding.feature_desc3') }}
                  </h6>
                </div>
              </u-animate>
            </u-animate-container>
          </v-col>
          <v-col md="6" cols="12">
            <div class="illustration-right">
              <section v-if="loaded" class="parallax-wrap use-hidden-md-down">
                <parallax
                  :speed-factor="isMobile ? 0 : 0.15"
                  :section-height="isMobile ? 0 : 300"
                  direction="up"
                >
                  <div class="viewport">
                    <figure class="screen">
                      <img class="responsive" src="/images/livepool-parallel-work.png" alt="screen" id="parallel-transcoding-img" />
                    </figure>
                  </div>
                </parallax>
              </section>
              <section v-if="loaded" class="use-hidden-md-up">
                  <div class="viewport">
                    <figure class="screen">
                      <img class="responsive" src="/images/livepool-parallel-work.png" alt="screen" id="parallel-transcoding-img" />
                    </figure>
                  </div>
            
              </section>
            </div>
          </v-col>
        </v-row>
      </div>
      <div class="item last">
        <u-animate-container>
          <v-row :class="[isMobile ? 'column-reverse' : 'row align-center']">
            <v-col cols="12" md="6">
              <div v-if="!isMobile" class="illustration-left illustration-notop">
                <section
                  v-if="loaded"
                  class="parallax-wrap"
                >
                  <parallax
                    :speed-factor="isMobile ? 0 : 0.15"
                  :section-height="isMobile ? 0 : 300"
                    direction="up"
                  >
                    <div class="viewport">
                      <figure class="screen">
                        <v-img src="/images/livepeer-white.png" alt="illustration" />
                      </figure>
                    </div>
                  </parallax>
                </section>
              </div>
              <div v-else>
                <div class="illustration-center illustration-notop">
                        <img class="" src="/images/livepeer-white.png" alt="illustration" />
                      </div>
                </div>
            </v-col>
            <v-col md="6" cols="12">
              <u-animate
                :offset="-100"
                name="fadeInLeftShort"
                delay="0.2s"
                duration="0.4s"
              >
                <div class="desc">
                  <title-main :align="isMobile ? 'center' : 'left'">
                    <span>
                      {{ $t('saasLanding.feature_title4') }}
                      <strong>
                        {{ $t('saasLanding.feature_titlestrong4') }}
                      </strong>
                    </span>
                  </title-main>
                  <h6 :class="[isMobile ? 'text-center' : 'text-left']" class="use-text-subtitle2">
                    {{ $t('saasLanding.feature_desc4') }}
                  </h6>
                </div>
              </u-animate>
            </v-col>
          </v-row>
        </u-animate-container>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './feature-style.scss';
</style>

<script>
import Parallax from 'vue-parallaxy'
import Title from '../Title'
import imgAPI from '~/static/images/imgAPI'

export default {
  components: {
    Parallax,
    'title-main': Title
  },
  data() {
    return {
      tab: null,
      imgAPI,
      loaded: false
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
  }
}
</script>