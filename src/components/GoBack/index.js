import React from 'react';

import {
  TouchableOpacity,
  Text
} from 'react-native';

import { Ionicons } from '@expo/vector-icons'; 

import styles from './styles';
import { RFValue } from '../../helpers/fontSize';
import {UseLangContext} from "../../contexts/LangContext";

const GoBackButton = ({ navigation }) => {
  const { texts } = UseLangContext();
  const handlePress = () => navigation.goBack();

  return (
    <TouchableOpacity style={styles.root} onPress={handlePress}>
      <Ionicons name="ios-arrow-back" size={RFValue(20)} color={"#000"} />
      <Text style={styles.title}>{texts.voltar}</Text>
    </TouchableOpacity>
  )
}

export default GoBackButton;