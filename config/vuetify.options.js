import colors from 'vuetify/lib/util/colors'

const palette = {
  mint: {
    primary: "#00B7FC", // primary main
    primarylight: "#00D2E4", // primary light
    primarydark: "#1565c0", // primary dark
    secondary: "#00CECE", // secondary main
    secondarylight: colors.lightBlue.lighten4, // secondary light
    secondarydark: colors.lightBlue.darken4, // secondary dark
    anchor: "#00E6B8" // link
  }
}

export const theme = {
  ...palette.mint
}

export default {
  rtl: false,
  theme: {
    dark: true,
    themes: {
      light: {
        ...theme
      },
      dark: {
        ...theme
      }
    },
    options: {
      customProperties: true
    }
  },
  icons: {
    iconfont: 'fa'
  }
}
