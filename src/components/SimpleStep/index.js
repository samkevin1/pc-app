import React from "react";
import { View } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { moderateScale } from "../../helpers/moderateScale";

const SimpleStep = ({ step, currentStep, changeStep }) => {
  return (
    <View style={{ maxWidth: "18%", minWidth: "18%", margin: 3 }}>
      <TouchableOpacity
        style={{ backgroundColor: currentStep.value === step.value ? "#0645AD" : "#F0F0F0", minHeight: moderateScale(7), maxWidth: "100%", minWidth: "100%", borderRadius: 5, margin: 1.5 }}
        onPress={e => changeStep('step', step)}/>
    </View>
  )
}

export default SimpleStep;
