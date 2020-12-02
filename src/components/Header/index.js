import React from 'react';

import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import {
    useNavigation
} from "@react-navigation/native";

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { RFValue } from "../../helpers/fontSize";
import styles from "./styles";
import LanguageSelect from "../LangSelect";

const Header = ({ page }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.root}>
      <View style={styles.content}>
        <TouchableOpacity
          onPress={() => navigation.navigate('MyProfile')}
          style={styles.item}
        >
          <MaterialCommunityIcons style={{ marginTop: 0 }} name="account" size={RFValue(34)} color={"black"} />
        </TouchableOpacity>
        {/*add input here*/}
        <View style={styles.centerContainer}>
            <Text style={styles.text}>{page}</Text>
        </View>
        <LanguageSelect hasHeader={true} />
        <TouchableOpacity style={styles.item}>
          <MaterialCommunityIcons name="cart" size={RFValue(34)} color={"black"} onPress={() => navigation.navigate("Cart")}/>
        </TouchableOpacity>
      </View>
    </View>
  )
};

export default Header;
