<template>
  <div class="root">
    <v-container class="fixed-width">
      <v-row class="spacing8">
        <v-col md="6" class="pa-6">
          <title-main :align="isMobile ? 'center' : 'left'">
            <strong>
              FAQ
            </strong>
          </title-main>
          <p
            :class="[isMobile ? 'text-center' : 'text-left']"
            class="text use-text-subtitle2"
          >
            {{ $t('saasLanding.faq_subtitle') }}
          </p>
          <hidden point="smDown">
            <div class="illustration">
              <img src="/images/saas/faq.png" alt="illustration" />
            </div>
          </hidden>
        </v-col>
        <v-col md="6" cols="12" class="pa-6">
          <div class="accordion">
            <v-expansion-panels
              v-model="panel"
              active-class="expanded"
            >
              <v-expansion-panel
                v-for="(item, index) in faqData"
                :key="index"
                class="paper"
              >
                 <v-expansion-panel-header class="content">
                  <p class="heading">
                    {{ item.q }}
                  </p>
                </v-expansion-panel-header>
                <v-expansion-panel-content class="detail">
                  <p v-html="item.a">
                  </p>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import 'faq-style.scss';
</style>

<script>
import Hidden from '../Hidden'
import Title from '../Title'

const faqData = [
  {
    q: 'What is Livepool?',
    a:
      'Livepool is a video transcoding pool built on top of Livepeer. Similar to a crypto mining pool it pools together computing power but instead of solving proof-of-work algorithms it decodes and encodes video.'
  },
  {
    q: 'What is Livepeer?',
    a:
      '<a href="https://livepeer.org">Livepeer</a> is a live video streaming network protocol that is fully decentralized, highly scalable, crypto token incentivized, and results in an infrastructure solution which is cheaper to an app developer or broadcaster than using traditional centralized live video solutions and cloud service providers.'
  },
  {
    q: 'How do I receive payouts?',
    a:
      'You will receive ETH payouts daily to the ETH address you provide when starting Livepool.'
  },
  {
    q: 'How much can I expect to earn?',
    a:
      'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '
  },
  {
    q: 'Which GPUs can I use?',
    a:
      'We currently only support Nvidia GPUs. Any GPU Nvidia 10 series and up should have NVENC and NVDEC chips. You can find a list of supported Nvidia GPUs <a href="https://developer.nvidia.com/video-encode-decode-gpu-support-matrix">here</a>'
  }
]

export default {
  components: {
    Hidden,
    'title-main': Title
  },
  data() {
    return {
      panel: 0,
      faqData
    }
  },
  computed: {
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.includes(this.$mq)
    }
  }
}
</script>
