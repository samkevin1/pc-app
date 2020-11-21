import React from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import styles from './styles';
import Text from '../../../components/Text/index';
import { Button, Avatar, Icon } from 'react-native-elements'
import { TextInput, DefaultTheme } from 'react-native-paper';
import { Formik } from 'formik';

const EditPassword =({ navigation }) => {

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
      initialValues={{ currentPassword: '', newPassword: '', confirmPassword: '' }}
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
              <Text style={styles.headerText}>Editar Senha</Text>
            </View>
            <View style={{marginTop: 10}} />
            <View style={styles.modal}>
              <View>
                <View style={{  marginLeft:10, marginTop:10, alignSelf:'flex-start', flexDirection: 'row' }}>
                  <Text style={{marginLeft:5, color: '#999999'}}>Senha atual</Text>
                </View>
                <TextInput 
                  style={styles.input}
                  placeholder='Senha atual'
                  underlineColor='#D3D3D3'
                  value={values.currentPassword}
                  onChangeText={handleChange('currentPassword')}
                  theme={theme}
                  secureTextEntry={true}
                />
              </View>
            </View>
            <View style={styles.modal}>
              <View>
                <View style={{  marginLeft:10, marginTop:10, alignSelf:'flex-start', flexDirection: 'row' }}>
                  <Text style={{marginLeft:5, color: '#999999'}}>Nova senha</Text>
                </View>
                <TextInput 
                  style={styles.input}
                  placeholder='Nova senha'
                  underlineColor='#D3D3D3'
                  value={values.newPassword}
                  onChangeText={handleChange('newPassword')}
                  theme={theme}
                  secureTextEntry={true}
                />
              </View>
            </View>
            <View style={styles.modal}>
              <View>
                <View style={{  marginLeft:10, marginTop:10, alignSelf:'flex-start', flexDirection: 'row' }}>
                  <Text style={{marginLeft:5, color: '#999999'}}>Confirmar senha</Text>
                </View>
                <TextInput 
                  style={styles.input}
                  placeholder='Confirmar senha'
                  underlineColor='#D3D3D3'
                  value={values.confirmPassword}
                  onChangeText={handleChange('confirmPassword')}
                  theme={theme}
                  secureTextEntry={true}
                />
              </View>
            </View>
            <Text></Text>
            <TouchableOpacity 
              style={{alignSelf: 'flex-end', marginTop:390}} 
              onPress={values.confirmPassword === values.newPassword && values.confirmPassword !== '' ? () =>  handleSubmit(navigation.navigate("Home")) : console.log("Senha errada")}
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

export default EditPassword;

