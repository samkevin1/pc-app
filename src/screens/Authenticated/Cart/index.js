import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Cart = () => {
  const onGestureEvent = useAnimatedGestureHandler()
  return (
    <View style={styles.container}>
      <Text>Carrinho dos cria</Text>
    </View>
  )
}

export default Cart;
