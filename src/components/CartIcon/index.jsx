import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { styles } from './styles';

export function CartIcon() {
  return (
    <View style={styles.buyNowLine}>
        <TouchableOpacity style={styles.bagIcon}>
            <Feather name='shopping-bag' size={30}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buyNowButton}> 
            <Text style={styles.textButton}>Comprar</Text>
        </TouchableOpacity>
    </View>
  );
}