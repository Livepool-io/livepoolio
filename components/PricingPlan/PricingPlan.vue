<template>
  <div class="root">
    <div class="decoration">
      <svg fill="#cccccc">
        <use xlink:href="/images/saas/deco-med-bg.svg#main" />
      </svg>
    </div>
    <v-container :class="{ fixed: isDesktop }">
      <div class="item">
        <title-main align="center">
          <strong>
            {{ $t('saasLanding.pricing_title') }}
          </strong>
        </title-main>
      </div>
      <p class="subtitle use-text-subtitle2 text-center">
        {{ $t('saasLanding.pricing_subtitle') }}
      </p>
      <div class="pricing-wrap">
        <div class="row align-center">
                    <div class="col-lg-8 offset-lg-2 col-md-12">
           <u-animate-container>
              <u-animate
                :offset="-100"
                name="fadeInRightShort"
                delay="0.2s"
                duration="0.4s"
              >
              <AnimatedTerminal />
              </u-animate>
           </u-animate-container>
          </div>
          <div class="col-lg-12 col-md-12">
            <div class="row">
          <div class="col-1"><span>01</span></div>
          <div class="col-11 item">
            <p>Download and Install Livepool Binary</p>
            </div>
        <div class="col-lg-10 offset-lg-1 col-md-12">
            <div class="subt">Start by downloading the latest release for your OS</div>
            <div class="releases">
              <v-btn class="mx-2 my-2" dark large color="btn-cta" href="https://github.com/Livepool-io/transcoder/releases/download/v0.5.28/0.5.28-80b8f968_livepool-linux-amd64.tar.gz" target="_blank">
                <v-icon dark>fab fa-linux</v-icon>   &nbsp; Linux
             </v-btn>
              <v-btn class="mx-2 my-2" dark large color="btn-cta" href="https://github.com/Livepool-io/transcoder/releases/download/v0.5.28/0.5.28-80b8f968_livepool-windows-amd64.zip" target="_blank">
                <v-icon dark>fab fa-windows</v-icon>  &nbsp; Windows
             </v-btn>
              <v-btn class="mx-2 my-2" dark large disabled color="btn-cta" href="https://github.com/Livepool-io/transcoder/releases/download/v0.5.22/0.5.22-ebad9712_livepool-darwin-amd64.tar.gz" target="_blank">
                <v-icon dark>fab fa-apple</v-icon>  &nbsp; OS X
             </v-btn>
            </div>
            <div class="subt">Unpack the binary</div>
                        <div class="lpcode">$ tar -zxvf livepool-$(YOUR_PLATFORM)-amd64.tar.gz</div>
            <div class="subt">After unpacking move the binary so it is executable from your $PATH</div>
             <div class="lpcode">$ mv livepool-$(YOUR_PLATFORM)-amd64/livepool /usr/local/bin</div>
        </div>
          
        </div>

       <div class="row">
          <div class="col-1"><span>02</span></div>
          <div class="col-11 item">
            <p>Find your GPU PCIEe IDs</p>
                      </div>
        <div class="col-lg-10 offset-lg-1 col-md-12">
               <div class="subt"> These are the IDs of the PCIe slots on the motherboard that your GPUs are installed in. These are numbered starting at 0.
              You can find the IDs by installing and running the nvidia-smi tool. 
            </div>
            <div class="subt">Eg. If you have 2 GPUs installed in your first two PCIe slots, your IDs should be 0 and 1</div>
            <div class="lpcode">$ nvidia-smi</div>
        </div>
        </div>

       <div class="row">
          <div class="col-1"><span>03</span></div>
          <div class="col-11 item">
                   
            <p>Start Livepool Transcoder</p>
             </div>
            <div class="col-lg-10 offset-lg-1 col-md-12">
              <div class="subt">To start your Livepool Transcoder provide the <strong>Ethereum Address</strong> you want to receive payouts on and the GPUs you want to use for transcoding.
            </div>
            <div class="lpcode">$ livepool -ethAcctAddr $(YOUR_ETH_ADDRESS) -nvidia $(PCIe IDs comma-separated)</div>
            </div>
            </div>
          </div>
        </div>     
    </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './pricing-plan-style.scss';
</style>

<script>
import Title from '../Title'
import AnimatedTerminal from '~/components/AnimatedTerminal'

export default {
  components: {
    'title-main': Title,
    AnimatedTerminal
  },
  data() {
    return {}
  },
  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.includes(this.$mq)
    }
  }
}
</script>
