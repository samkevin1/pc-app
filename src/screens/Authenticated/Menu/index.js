import React from "react";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Image, StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import {
  FontAwesome,
  FontAwesome5,
  MaterialIcons,
  Feather,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";

import { RFValue } from "../../../helpers/fontSize";

const Menu = (props) => {
  const navigation = useNavigation();

  const closeMenu = () => navigation.dispatch(DrawerActions.closeDrawer());

  return (
    <View style={styles.root}>
      <DrawerContentScrollView {...props} contentContainerStyle={styles.flex}>
        <View style={styles.flex}>
          <View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              {/*<Image style={styles.image} source={configs.images.logo} />*/}
              <Ionicons
                onPress={closeMenu}
                style={styles.icon}
                name="ios-close"
                size={42}
                color={"black"}
              />
            </View>
            <View style={styles.content}>
              {[
                {
                  label: "Início",
                  route: "Home",
                  subRoute: "Home",
                  icon: () => (
                    <FontAwesome
                      name="home"
                      size={RFValue(24)}
                      color={"black"}
                    />
                  ),
                },
                {
                  label: "Estabelecimentos por perto",
                  route: "EstablishmentNearby",
                  subRoute: "EstablishmentNearby",
                  icon: () => (
                    <MaterialIcons
                      name="business"
                      size={RFValue(24)}
                      color={"black"}
                    />
                  ),
                },
              ].map((c) => (
                <DrawerItem
                  icon={c.icon}
                  key={c.label}
                  label={c.label}
                  labelStyle={styles.label}
                  onPress={() =>
                    props.navigation.navigate(c.route, { screen: c.subRoute })
                  }
                  activeBackgroundColor="transparent"
                  activeTintColor="white"
                  inactiveTintColor="white"
                />
              ))}
            </View>
          </View>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: { backgroundColor: "#FFF", flex: 1 },
  flex: { flex: 1 },
  label: {
    fontSize: RFValue(16),
    fontWeight: "700",
    marginLeft: RFValue(-20),
    color: "#414141",
  },
  content: {
    marginLeft: RFValue(10),
  },
  image: {
    width: RFValue(250),
    marginTop: RFValue(30),
    height: RFValue(70),
    marginBottom: RFValue(30),
    marginLeft: RFValue(30),
  },
  icon: {
    marginTop: RFValue(20),
    justifyContent: "center",
    marginRight: RFValue(30),
  },
});

export default Menu;
