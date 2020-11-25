import React from 'react';

import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import {
    DrawerActions,
    useNavigation
} from "@react-navigation/native";

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { RFValue } from "../../helpers/fontSize";
import styles from "./styles";

const Header = ({ page }) => {
  const navigation = useNavigation();

  const handleOpenDrawer = () => navigation.dispatch(DrawerActions.openDrawer());

  return (
    <View style={styles.root}>
      <View style={styles.content}>
        <TouchableOpacity
          onPress={handleOpenDrawer}
          style={styles.item}
        >
          <MaterialCommunityIcons name="account" size={RFValue(34)} color={"black"} />
        </TouchableOpacity>
        {/*add input here*/}
        <View style={styles.centerContainer}>
            <Text style={styles.text}>{page}</Text>
        </View>
        <TouchableOpacity style={styles.item}>
          <MaterialCommunityIcons name="cart" size={RFValue(34)} color={"black"} onPress={() => navigation.navigate("Cart")}/>
        </TouchableOpacity>
      </View>
    </View>
  )
};

export default Header;
