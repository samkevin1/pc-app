import React, { useEffect, useState } from 'react';
import { View, Text, AsyncStorage, TouchableOpacity } from 'react-native';
import {Icon, Avatar} from 'react-native-elements';
import styles from './styles';
import DATA from "../data";
import { ScrollView } from 'react-native-gesture-handler';

const Cart = (navigation) => {
  
  const cart = [];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={navigation.goBack}>
          <Icon
            name='ios-arrow-round-back'
            type='ionicon'
            iconStyle={{color: '#0645AD'}}
            containerStyle={{marginTop: 3}}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Seu carrinho</Text>
      </View>
    </ScrollView>
  );
};

export default Cart;
