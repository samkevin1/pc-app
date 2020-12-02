import React from "react";
import { View, TouchableOpacity } from "react-native";
import styles from './styles';
import Text from '../../../components/Text/index';
import { Icon } from 'react-native-elements'
import { TextInput, DefaultTheme } from 'react-native-paper';
import { Formik } from 'formik';
import { UseLangContext } from '../../../contexts/LangContext';

const EditData =({ navigation }) => {
  const { texts } = UseLangContext();

  const theme = {
    ...DefaultTheme,
    roundness: 3,
    colors: {
        ...DefaultTheme.colors,
        primary: '#696969',
        accent: 'white',
        disabled: 'white',
        text: '#676C6B'
    },
  };

  return (
    <Formik
      initialValues={{ nome: 'Samuel', sobrenome: 'Souto', cpf: '11111', role: 'Masculino' }}
      onSubmit={values => console.log(values)}
    >
      {({ handleChange, handleSubmit, values, touched }) => (
        <View style={styles.container}>
          <View style={{ margin: 15 }}>
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
            <View style={{marginTop: 10}} />
            <View style={styles.modal}>
              <View>
                <View style={{  marginLeft:10, marginTop:10, alignSelf:'flex-start', flexDirection: 'row' }}>
                  <Text style={{marginLeft:5, color: '#999999'}}>{texts.novo_nome}</Text>
                </View>
                <TextInput 
                  style={styles.input}
                  placeholder={texts.novo_nome}
                  underlineColor='#D3D3D3'
                  value={values.nome}
                  onChangeText={handleChange('nome')}
                  theme={theme}
                />
              </View>
            </View>
            <View style={styles.modal}>
              <View>
                <View style={{  marginLeft:10, marginTop:10, alignSelf:'flex-start', flexDirection: 'row' }}>
                  <Text style={{marginLeft:5, color: '#999999'}}>{texts.novo_sobrenome}</Text>
                </View>
                <TextInput 
                  style={styles.input}
                  placeholder={texts.novo_sobrenome}
                  underlineColor='#D3D3D3'
                  value={values.sobrenome}
                  onChangeText={handleChange('sobrenome')}
                  theme={theme}
                />
              </View>
            </View>
            <View style={styles.modal}>
              <View>
                <View style={{  marginLeft:10, marginTop:10, alignSelf:'flex-start', flexDirection: 'row' }}>
                  <Text style={{marginLeft:5, color: '#999999'}}>{texts.novo_cpf}</Text>
                </View>
                <TextInput 
                  style={styles.input}
                  placeholder={texts.novo_cpf}
                  underlineColor='#D3D3D3'
                  value={values.cpf}
                  onChangeText={handleChange('cpf')}
                  theme={theme}
                />
              </View>
            </View>
            <View style={styles.modal}>
              <View>
                <View style={{  marginLeft:10, marginTop:10, alignSelf:'flex-start', flexDirection: 'row' }}>
                  <Text style={{marginLeft:5, color: '#999999'}}>{texts.novo_genero}</Text>
                </View>
                <TextInput 
                  style={styles.input}
                  placeholder={texts.novo_genero}
                  underlineColor='#D3D3D3'
                  value={values.role}
                  onChangeText={handleChange('role')}
                  theme={theme}
                />
              </View>
            </View>
            <TouchableOpacity 
              style={{alignSelf: 'flex-end', marginTop:280}}
              onPress={() => handleSubmit(navigation.navigate("Home"))}
            >
              <Icon
                name='ios-checkmark-circle'
                type='ionicon'
                iconStyle={{color: '#0645AD'}}
                size={80}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default EditData;

