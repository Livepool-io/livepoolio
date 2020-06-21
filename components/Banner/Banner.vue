<template>
  <div class="root">
    <!-- VIDEO DIALOG
    <v-dialog
      v-model="dialog"
      max-width="690"
    >
      <v-card class="video-popup">
        <v-card-title class="headline">
          <h2 class="title">
            {{ $t('saasLanding.banner_title') }}
            <v-btn icon @click="handleVideoClose()">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </h2>
        </v-card-title>
        <div class="text-center" v-if="yt.use">
          <youtube
            :video-id="videoId"
            :player-vars="playerVars"
            :width= "640"
            :height="360"
            ref="youtube"
          />
        </div>
      </v-card>
    </v-dialog>
    -->
    <div class="decoration">
      <svg class="left-deco">
        <use xlink:href="/images/saas/deco-bg-left.svg#main" />
      </svg>
      <svg class="right-deco">
        <use xlink:href="/images/saas/deco-bg-right.svg#main" />
      </svg>
    </div>
    <v-container :class="{ fixed: isDesktop }">
      <v-row class="slider-wrap">
        <v-col cols=12 md=6 sm=12>
           <div class="d-flex align-center justify-center my-6">
            <img :src="logo" class="grayscale banner-logo" />
            <h2 class="use-text-title">{{$t('common.title')}}</h2>
          </div>
          <div class="d-flex align-center justify-center  my-6">
          <h3 class="use-text-title2">
              {{ $t('saasLanding.banner_titlestrong') }}
          </h3>
          <img  class="ml-3" width="50" src="/images/pickaxe.png" />
          </div>
          <div class="d-flex align-center justify-center  my-6">
                      <div class="use-text-subtitle text-center">
            {{ $t('saasLanding.banner_subtitle') }}
          </div>
          </div>
                    <div class="d-flex justify-center btn-area my-6">
            <!-- PLAY VIDEO
            <v-btn
              text
              class="play-btn"
              @click="handleVideoOpen()"
            >
              <span class="icon">
                <i class="ion-ios-play-outline" />
              </span>
              {{ $t('saasLanding.banner_watchvideo') }}
            </v-btn>
            -->
            <v-btn
              href="#get_started"
              color="btn-cta"
              large
            >
              {{ $t('saasLanding.getstarted') }}
            </v-btn>
          </div>
        </v-col>
        <v-col class="d-xs-none" cols=12 md=6 sm=12>
                  <div class="illustration">
          <img :src="imgAPI.saas[7]" alt="illustration" />
        </div>
        </v-col>
      </v-row>
    </v-container>
    <div class="deco">
      <hidden point="mdDown">
        <div :class="{ hide: hide }" class="deco-inner">
          <div class="wave wave-one" />
          <div class="wave wave-two" />
        </div>
      <div class="wave wave-cover" />
            </hidden>

    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './banner-style.scss';
</style>

<script>
import Hidden from '../Hidden'
import logo from '~/static/images/logo.svg'
import youtube from '~/youtube'
import imgAPI from '~/static/images/imgAPI'
import link from '~/static/text/link'

export default {
  components: {
    Hidden
  },
  data() {
    return {
      logo,
      videoId: 'KxZAdEGpYAw',
      hide: false,
      link,
      imgAPI,
      dialog: false,
      player: null,
      playerVars: {
        autoplay: 0,
        controls: 1,
        rel: 0,
        showinfo: 1,
        mute: 0,
        origin: 'https://localhost:8008'
      },
      yt: youtube
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
  methods: {
    handleVideoOpen() {
      if (!this.yt.use) {
        return false
      }
      this.dialog = true
      setTimeout(() => {
        this.player = this.$refs.youtube.player
        this.player.playVideo()
      }, 100)
    },
    handleVideoClose() {
      this.dialog = false
      this.player.pauseVideo()
    }
  }
}
</script>
