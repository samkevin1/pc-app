import React from 'react';

import {
  View,
  TouchableOpacity,
  Text
} from 'react-native';

import { Ionicons } from '@expo/vector-icons'; 

import styles from './styles';
import { RFValue } from '../../helpers/fontSize';

const GoBackButton = ({ navigation }) => {

  const handlePress = () => navigation.goBack();

  return (
    <TouchableOpacity style={styles.root} onPress={handlePress}>
      <Ionicons name="ios-arrow-back" size={RFValue(20)} color={"#000"} />
      <Text style={styles.title}>Voltar</Text>
    </TouchableOpacity>
  )
}

export default GoBackButton;