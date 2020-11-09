import * as React from 'react';
import {Text, View, FlatList, SafeAreaView, StatusBar, TouchableOpacity} from 'react-native';
import {Icon, Avatar, ListItem} from 'react-native-elements';
import styles from './styles';
import DATA from "../data";

const Details = ({ navigation, route }) => {
  const { id } = route.params;
  const product = DATA.filter(p => p.id === id)[0];
  const price = parseInt(product.vista) + 500;
  const desconto = Math.round((parseInt(product.prazo) - parseInt(product.vista)) / parseInt(product.prazo) * 100);

  return(

    <View style={styles.container}>
      <View style={{flexDirection: 'row', marginTop: 40, marginLeft: 15, marginBottom: 5}}>
        <TouchableOpacity>
          <Icon
            name='ios-arrow-round-back'
            type='ionicon'
            iconStyle={{color: '#0645AD'}}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: 350 }}>
            <Icon
              name='ios-cart'
              type='ionicon'
              iconStyle={{color: '#0645AD'}}
            />
        </TouchableOpacity>
      </View>
      <View style={styles.modalTitle}>
        <Avatar source={{uri: product.img}} containerStyle={{marginTop: 10, width: '100%', height: '60%'}}/>
        <Text style={styles.title}>{product.title}, {product.processador}, {product.placaVideo}, {product.ram}</Text>
      </View>
      <View style={{ margin: 10 }}>
        <View style={styles.modal}>
          <Text style={styles.text}>De <Text style={styles.strikeThrough}>R$ {price},00</Text> por</Text>
          <Text style={styles.aVista}>R$ {product.vista},00 <Text style={styles.aVistaText}>á vista</Text></Text>
          <View style={{flexDirection: 'row', marginLeft:10}}>
          <Icon
            containerStyle={styles.icon}
            name='ios-pricetag'
            type='ionicon'
          />
          <Text style={{marginLeft:10, marginTop: 2}}>R$ {product.vista},00 no boleto. {desconto}% de desconto</Text>
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
      </View>
    </View>
  )
};

export default Details;
