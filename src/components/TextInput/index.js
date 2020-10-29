import React, { ReactNode } from "react";
import {
  View,
  TextInput as TextInputRN,
  TextInputProps,
  TextStyle,
  ViewStyle,
  Picker,
  Platform,
  ActivityIndicator,
  TextProps,
  GestureResponderEvent
} from "react-native";

import ModalSelector from "react-native-modal-selector";
import Text from '../Text/index';

import {
  TextInputMask,
  TextInputMaskTypeProp,
  TextInputMaskOptionProp,
} from "react-native-masked-text";

import { Icon } from "react-native-elements";

import styles from "./styles";

const renderIcon = (
  name,
  right,
  color,
  onPress,
  size = 24
) => {
  if (!name) return null;

  return (
    <Icon
      size={size}
      name={name}
      color={color}
      style={right ? styles.iconRightStyle : styles.iconLeftStyle}
      onPress={onPress}
    />
  );
};

const renderLoading = () => (
  <ActivityIndicator
    size="small"
    color="#EE3946"
    style={styles.iconRightStyle}
  />
);

const TextInput = ({
                     id,
                     label,
                     leftIcon,
                     leftIconColor,
                     rightIcon,
                     rightComponent,
                     rightIconColor,
                     rightIconSize = 24,
                     labelStyle,
                     inputContainerStyle,
                     inputOuterContainerStyle,
                     inputStyle,
                     onRightIconPress,
                     rootStyle,
                     documentLoading = null,
                     zipCodeLoading = null,
                     handleChange,
                     select,
                     data,
                     value,
                     noneSelectedText,
                     errors,
                     errorStyle,
                     enableMask,
                     type,
                     loading,
                     options,
                     onClear,
                     showClearButton,
                     webProps,

                     labelProps = {},
                     ...rest
                   }) => {
  const onChangeText = (value) => {
    handleChange && handleChange(id, value);
  };

  const hasError = () => Boolean(errors && errors[id]);

  const renderError = () => {
    if (hasError())
      return (
        <Text style={[styles.errorStyle, errorStyle]}>
          {errors && errors[id]}
        </Text>
      );

    return null;
  };

  if (showClearButton && value) {
    rightIcon = "close";
    rightIconColor = "#E5E5E5";
    rightIconSize = 20;
    onRightIconPress = () => {
      onChangeText("");
      onClear && onClear();
    };
  }

  let labelComponent = label;

  if (typeof label === "string") {
    labelComponent = (
      <>
        <Text
          style={[
            label.length > 15 ? { width: 180 } : { width: 100 },
            styles.labelStyle,
            labelStyle,
          ]}
          {...labelProps}
        >
          {label}
        </Text>
        {documentLoading ? (
          <ActivityIndicator
            size="small"
            color="#3C80FF"
            style={{ marginLeft: 4 }}
          />
        ) : null}
        {zipCodeLoading ? (
          <ActivityIndicator
            size="small"
            color="#3C80FF"
            style={{ marginLeft: 4 }}
          />
        ) : null}
      </>
    );
  }

  if (select) {
    return (
      <View
        style={[
          styles.root,
          label ? {} : { height: 60, position: "relative" },
          rootStyle,
        ]}
      >
        {labelComponent}

        <View
          style={[
            // styles.inputContainerStyle,
            inputContainerStyle,
            hasError() ? styles.inputContainerErrorStyle : {},
          ]}
        >
          {renderIcon(leftIcon, false, leftIconColor)}

          {Platform.OS === "web" ? (
            <Picker
              nativeID={id}
              selectedValue={value}
              style={[styles.inputStyle, inputStyle, { borderWidth: 0 }]}
              onValueChange={onChangeText}
            >
              <Picker.Item key={""} label={noneSelectedText} value="" />
              {data
                .filter((c) => c.name !== "Admin")
                .map((c) => (
                  <Picker.Item key={c.id} label={c.name} value={c.id} />
                ))}
            </Picker>
          ) : (
            <ModalSelector
              style={{ width: "100%" }}
              data={data}
              initValue={noneSelectedText}
              onChange={(e) => conChangeText('oi', e)}
            >
              <TextInputRN
                style={{
                  zIndex: -10,
                  backgroundColor: "#F3F3F3",
                  padding: 10,
                  // width: "100%",
                }}
                editable={false}
                placeholder={noneSelectedText}
                value={data.find((c) => c.key === value)?.label ?? ""}
              />
            </ModalSelector>
          )}
          {/* <Picker
						nativeID={id}
						selectedValue={value}
						style={[styles.inputStyle, inputStyle, { borderWidth: 0 }]}
						onValueChange={onChangeText}
					>
						<Picker.Item key={""} label={noneSelectedText} value="" />
						{data
							.filter(c => c.name !== "Admin")
							.map(c => (
								<Picker.Item key={c.id} label={c.name} value={c.id} />
							))}
					</Picker> */}
          {loading
            ? renderLoading()
            : rightComponent
              ? rightComponent
              : renderIcon(
                rightIcon,
                true,
                rightIconColor,
                onRightIconPress,
                rightIconSize
              )}
        </View>
        {renderError()}
      </View>
    );
  }

  const Input =
    enableMask && Platform.OS !== "web" ? (
      <View>
        <TextInputMask
          type={type}
          options={options}
          nativeID={id}
          style={[styles.inputStyle, inputStyle]}
          onChangeText={onChangeText}
          value={value}
          allowFontScaling
          maxFontSizeMultiplier={1.8}
          {...rest}
        />
      </View>
    ) : (
      <View>
        <TextInputRN
          nativeID={id}
          style={[styles.inputStyle, inputStyle]}
          onChangeText={onChangeText}
          value={value}
          allowFontScaling
          maxFontSizeMultiplier={1.8}
          {...rest}
          {...Platform.select({ web: webProps, default: {} })}
          // keyboardType="numbers-and-punctuation"
        />
      </View>
    );

  return (
    <View style={[styles.root, label ? {} : { height: 60 }, rootStyle]}>
      {labelComponent}

      <View
        style={[
          // styles.inputContainerStyle,
          inputContainerStyle,
          hasError() ? styles.inputContainerErrorStyle : {},
        ]}
      >
        {renderIcon(leftIcon, false, leftIconColor)}
        {Input}
        {loading
          ? renderLoading()
          : rightComponent
            ? rightComponent
            : renderIcon(
              rightIcon,
              true,
              rightIconColor,
              onRightIconPress,
              rightIconSize
            )}
      </View>
      {renderError()}
    </View>
  );
};

export default TextInput;
