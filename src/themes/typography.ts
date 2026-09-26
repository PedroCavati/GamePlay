import { TextStyle } from "react-native"
import { fonts } from "./fonts"

export const typography = {
  banner: {
    fontFamily: fonts.rajdhani,
    fontSize: 40,
    fontWeight: '700',
  } satisfies TextStyle,

  bannerSubtitle: {
    fontFamily: fonts.inter,
    fontSize: 15,
    fontWeight: '400',
  } satisfies TextStyle,
}