import React from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import styles from './styles';
import Text from '../../../components/Text/index';
import { Icon } from 'react-native-elements'
import { UseLangContext } from '../../../contexts/LangContext';

const EditPage =({ navigation }) => {
  const { texts } = UseLangContext();

  return (
    <View style={styles.container}>
      <ScrollView style={{ margin: 15 }}>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={navigation.goBack}>
            <Icon
              name='ios-arrow-round-back'
              type='ionicon'
              iconStyle={{color: '#0645AD'}}
              containerStyle={{marginTop: 3}}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>{texts.edit_data}</Text>
        </View>
        <View style={styles.modal}>
          <TouchableOpacity onPress={() => navigation.navigate("EditPassword")}>
            <View style={{  marginLeft:10, marginTop:10, alignSelf:'flex-start', flexDirection: 'row' }}>
              <Icon
                name='ios-lock'
                type='ionicon'
                iconStyle={{color: '#0645AD'}}
              />
              <Text style={{marginLeft:10, marginTop: 2, fontWeight: 'bold', color: 'black'}}>{texts.edit_pass}</Text>
            </View>
            <Text style={{ marginBottom: 10, marginLeft:35 ,alignSelf:'flex-start', color: '#999999', fontSize:12 }}>{texts.altere_senha}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.modal}>
          <TouchableOpacity onPress={() => navigation.navigate("EditData")}>
            <View style={{  marginLeft:10, marginTop:10, alignSelf:'flex-start', flexDirection: 'row' }}>
              <Icon
                name='ios-card'
                type='ionicon'
                iconStyle={{color: '#0645AD'}}
              />
              <Text style={{marginLeft:10, marginTop: 2, fontWeight: 'bold', color: 'black'}}>{texts.alterar_dados_pe}</Text>
            </View>
            <Text style={{ marginBottom: 10, marginLeft:41 ,alignSelf:'flex-start', color: '#999999', fontSize:12 }}>{texts.altere_etc}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default EditPage;

