import { StyleSheet, Dimensions } from "react-native"
import CommonColors from "./CommonColors"

export default GlobalStyle = StyleSheet.create({
  bordered: {
    borderColor: CommonColors.border,
    borderWidth: 1
  }
})

export const SIZES = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height
}
