import React, { useState } from 'react';
import {
   ScrollView, 
   Text, 
   View, 
   TextInput as TextInputRN, 
   TouchableOpacity,
   Alert
} from 'react-native';
import { STEPS } from './formSteps';
import TextInput from '../../../components/TextInput/index';
import SimpleStep from '../../../components/SimpleStep/index';
import { Button, Icon } from "react-native-elements";
import styles from './styles';
import {
  useDispatch,
  useSelector
} from "react-redux";
import { useNavigation } from "@react-navigation/native";

import {
  registerUser
} from "../../../store/actions/auth/index";

const UserRegister = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((s) => s.auth);
  const [currentStep, setCurrentStep]  = useState(STEPS.find((s) => s.value === 1));
  const navigation = useNavigation();

  const [user, setUser] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    cpf: '',
    dataNascimento: '',
    senha: '',
    confirmPassword: ''
  });

  const handleSubmit = () => {
    console.log('user', user)
    dispatch(
      registerUser(user, (err, res) => {
        if(err) {
          Alert.alert("Atencao!", err);
        } else {
          Alert.alert('Usuario criado com sucesso');
          navigation.navigate('Login');
          console.log(res)
        }
      })
    )
  }
 
  const changeStep = async (action = "next", step) => {
    if(currentStep.value === STEPS[0].value && !user.nome && action === "next"){
      Alert.alert('Atenção', "Informe o seu nome para prosseguir.");
    }
    else if(currentStep.value === STEPS[1].value && !user.sobrenome && action === "next"){
      Alert.alert('Atenção', "Informe o seu sobrenome para prosseguir.");
    }
    else if(currentStep.value === STEPS[2].value && !user.email && action === "next"){
      Alert.alert('Atenção', "Informe o seu e-mail!");
    }
    else if(currentStep.value === STEPS[3].value && user.cpf < 1 && action === "next"){
      Alert.alert('Atenção', "Informe o seu CPF.");
    }
    else if(currentStep.value === STEPS[4].value && !user.dataNascimento && action === "next"){
      Alert.alert('Atenção', "Informe a sua data de nascimento para prosseguir.");
    }
    else if(currentStep.value === STEPS[5].value && user.senha !== user.confirmPassword && action === "next"){
      Alert.alert('Atenção', "As senhas não coincidem.");
    }
    else if(currentStep.value === STEPS[5].value && user.senha && user.confirmPassword && action === "next"){
      handleSubmit();
    }
    else {
      if(action === "next"){
        let nextStep = STEPS.find((s) => s.value === (currentStep.value + 1));
        setCurrentStep(nextStep);
      }
      else{
        setCurrentStep(step);
      }
    }
  }

  const handleChangeUser = (prop, value) => {
    setUser({
      ...user,
      [prop]: value
    });
  }

  const RegisterUserHead = () => (
    <View style={{ flexDirection: 'row' }}>
      <Text style={[styles.text, {fontWeight: '700', color:  "#0645AD"}]}>{user.nome} {user.sobrenome}, </Text>
    </View>);

  return(
    <View style={styles.container}>
      <View style={{margin: 15, marginTop: 50}}>
        <View style={{ flexDirection: "row"}}>
          {STEPS.map((s, idx) => (
            <SimpleStep key={idx} step={s} currentStep={currentStep} changeStep={changeStep}/>)
          )}
        </View>
        <View>
          {currentStep.value === STEPS[0].value && (
            <View style={{ marginTop: 35 }}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.text}>Seja bem vindo a</Text>
                <Text style={[styles.text, {fontWeight: '700', color:  "#0645AD"}]}>{' '}Loja de PC!</Text>
              </View>
              <Text style={styles.text}  type="text">
                Nos informe seu nome para continuarmos!
              </Text>
              <TextInput placeholder="Digite aqui..."
                         id="name"
                         type="text"
                         placeholderTextColor="#757575"
                         style={styles.stepInput}
                         value={user.nome}
                         onChangeText={(value) => handleChangeUser("nome", value)}
              />
            </View>
          )}
          {currentStep.value === STEPS[1].value && (
            <View style={{ marginTop: 35 }}>
              <View style={{ flexDirection: "row" }}>
                <Text style={[styles.text, {fontWeight: '700', color:  "#0645AD"}]} type="text">
                  {user.nome},
                </Text>
                <Text style={styles.text}>
                  {' '}qual é seu sobrenome?
                </Text>
              </View>
              <TextInput placeholder="Digite aqui..."
                         type="text"
                         id="lastName"
                         style={styles.stepInput}
                         value={user.sobrenome}
                         placeholderTextColor="#757575"
                         onChangeText={(value) => handleChangeUser("sobrenome", value)}
              />
            </View>
          )}
          {currentStep.value === STEPS[2].value && (
            <View style={{ marginTop: 35 }}>
              <RegisterUserHead />
              <Text style={styles.text} type="text">
                Poderia nos informar seu e-mail?
              </Text>
              <TextInput
                name="email"
                placeholder="email@site.com"
                keyboardType="email-address"
                style={styles.stepInput}
                placeholderTextColor="#757575"
                value={user.email}
                onChangeText={(value) => handleChangeUser("email", value)}
              />
            </View>
          )}
          {currentStep.value === STEPS[3].value && (
            <View style={{ marginTop: 35 }}>
              <RegisterUserHead />
              <Text style={styles.text} type="text">
                Poderia nos informar seu CPF?
              </Text>
              <Text style={styles.textBold} type="text">
                (Somente números)
              </Text>
              <TextInput
                name="cpf"
                placeholder="Digite aqui..."
                style={styles.stepInput}
                placeholderTextColor="#757575"
                value={user.cpf}
                onChangeText={(value) => handleChangeUser("cpf", value)}
              />
            </View>
          )}
          {currentStep.value === STEPS[4].value && (
            <View style={{ marginTop: 35 }}>
              <Text style={styles.text} type="text">
                Qual é sua data de nascimento, {user.nome}?
              </Text>
              <TextInput
                placeholder="Digite aqui..."
                type={'datetime'}
                id="birthDate"
                keyboardType="date"
                style={styles.stepInput}
                enableMask
                placeholderTextColor="#757575"
                options={{
                  format: 'DD/MM/YYYY'
                }}
                value={user.dataNascimento}
                onChangeText={(value) => handleChangeUser("dataNascimento", value)}
              />
            </View>
          )}
          {currentStep.value === STEPS[5].value && (
            <View style={{ marginTop: 35 }}>
              <Text style={styles.text}>
                Escolha uma senha seguindo as regras abaixo!
              </Text>
              <TextInput
                placeholder="Digite aqui..."
                secureTextEntry
                password={true}
                id="password"
                placeholderTextColor="#757575"
                style={styles.stepInput}
                value={user.senha}
                onChangeText={(value) => handleChangeUser("senha", value)}
              />
              <TextInput
                placeholder="Confirmar senha..."
                id="confirmPassword"
                secureTextEntry
                style={styles.stepInput}
                placeholderTextColor="#757575"
                value={user.confirmPassword}
                onChangeText={(value) => handleChangeUser("confirmPassword", value)}
              />
              <Text style={styles.specifications}>
                * Uma letra
              </Text>
              <Text style={styles.specifications}>
                * Um número
              </Text>
              <Text style={styles.specifications}>
                * Entre 8 e 60 caractéres
              </Text>
            </View>
          )}
        </View>
      </View>
      <Button
        icon={{
          name: currentStep.value === STEPS.length ? "save" : "keyboard-arrow-right",
          type: "font-awesome5",
          color: "#fff",
        }}
        buttonStyle={{
          backgroundColor:"#0645AD",
          // borderRadius: 40,
          height: 60,
          width: 60,
          borderRadius: 30,
        }}
        containerStyle={{
          position: "absolute",
          bottom: 24,
          right: 24,
        }}
        loading={loading.register}
        disabled={loading.register}
        onPress={() => changeStep("next", currentStep.value)}
      />
    </View>
  )
}

export default UserRegister;
