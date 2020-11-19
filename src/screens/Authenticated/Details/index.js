import * as React from 'react';
import {Text, View, FlatList, SafeAreaView, StatusBar, TouchableOpacity, ScrollView} from 'react-native';
import {Icon, Avatar, ListItem} from 'react-native-elements';
import styles from './styles';
import DATA from "../data";

const Details = ({ navigation, route }) => {
  const { id } = route.params;
  const product = DATA.filter(p => p.id === id)[0];
  const price = parseInt(product.vista) + 500;
  const discount = Math.round((parseInt(product.prazo) - parseInt(product.vista)) / parseInt(product.prazo) * 100);

  return(
    <ScrollView>
      <View style={{ marginTop: 30, flexDirection: 'row', marginLeft: 15, marginBottom: 5, justifyContent: "space-between" }}>
        <TouchableOpacity onPress={navigation.goBack}>
          <Icon
            name='ios-arrow-round-back'
            type='ionicon'
            onPress={() => navigation.goBack()}
            iconStyle={{color: '#0645AD'}}
          />
        </TouchableOpacity>
<<<<<<< HEAD
        <TouchableOpacity style={{ marginLeft: 350 }} onPress={navigation.navigate('Cart')}>
=======
        <TouchableOpacity>
>>>>>>> 08f8053880e7aec897f177f10b7b8559964a4ffa
          <Icon
            name='ios-cart'
            type='ionicon'
            iconStyle={{color: '#0645AD', marginRight: 20}}
          />
        </TouchableOpacity>
      </View>
      <Avatar source={{uri: product.img}} containerStyle={{ width: '100%', height: 250}}/>
      <View style={styles.modalTitle}>
        <Text style={styles.title}>{product.title}, {product.processador}, {product.placaVideo}, {product.ram}</Text>
      </View>
      <View style={{ margin: 10 }}>
        <View style={styles.modal}>
          <Text style={styles.fadedText}>De <Text style={styles.strikeThrough}>R$ {price},00</Text> por</Text>
          <Text style={styles.aVista}>R$ {product.vista},00 <Text style={styles.aVistaText}>á vista</Text></Text>
          <View style={{flexDirection: 'row', marginLeft:10}}>
            <Icon
              containerStyle={styles.icon}
              name='ios-pricetag'
              type='ionicon'
            />
            <Text style={{marginLeft:10, marginTop: 2}}>R$ {product.vista},00 no boleto. {discount}% de desconto</Text>
          </View>
          <View style={{flexDirection: 'row', margin: 10}}>
            <Icon
              containerStyle={styles.icon}
              name='ios-card'
              type='ionicon'
            />
            <Text style={{marginLeft:10, marginTop: 2}}>R$ {product.prazo},00 em até 12x</Text>
          </View>
        </View>
        <View style={styles.modal}>
          <TouchableOpacity style={{margin: 10, alignSelf:'flex-start', flexDirection: 'row'}}>
            <Icon
              name='ios-cart'
              type='ionicon'
              iconStyle={{color: '#0645AD'}}
            />
            <Text style={{marginLeft:10, marginTop: 2, fontWeight: 'bold', color: '#0645AD'}}>Adicionar ao carrinho e continuar comprando</Text>
          </TouchableOpacity>
          <View style={{borderBottomWidth: 0.4, width: '80%', alignSelf: 'center'}}/>
          <TouchableOpacity style={{margin: 10, alignSelf:'flex-start', flexDirection: 'row'}}>
            <Icon
              name='ios-pricetag'
              type='ionicon'
              iconStyle={{color: '#0645AD'}}
            />
            <Text style={{marginLeft:10, marginTop: 2, fontWeight: 'bold', color: '#0645AD'}}>Ir direto para o pagamento</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.modal}>
          <Text style={styles.text}>Especificações</Text>
          <Text style={{ fontWeight: '600', marginLeft:10, marginBottom: 10 }}>Processador: {product.processador}</Text>
          <Text style={{ fontWeight: '600', marginLeft:10, marginBottom: 10 }}>Ram: {product.ram}</Text>
        </View>
      </View>
    </ScrollView>
  )
};

export default Details;
