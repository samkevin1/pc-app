import React, { ReactNode } from "react";
import { Text as RNText, TextProps } from "react-native";

const Text = (
  props
) => {
  return (
    <RNText
      adjustsFontSizeToFit
      allowFontScaling
      minimumFontScale={0.85}
      maxFontSizeMultiplier={1.8}
      {...props}
    />
  );
};

export default Text;
