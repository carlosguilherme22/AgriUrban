import { View, Text, TouchableOpacity, Image } from 'react-native';

import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { THEME } from '../../theme';
import { useNavigation } from '@react-navigation/native';

export function Perfil() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfo}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Image source={require("../../assets/60111.jpg")} 
          style={{
            height: 80,
            width: 80,
            borderRadius: 10
          }}
      
          />
          <View style={{marginLeft: 20}}>
            <Text style={[styles.title, {marginTop: 15, marginBottom: 5}]}>Jhon Doe</Text>
            <Text style={styles.caption}>@jhon_doe</Text>
          </View>
        </View>
      </View>

      <View style={styles.editProfileButton}>
        <TouchableOpacity onPress={() => navigation.navigate('editPerfil')}>
          <Ionicons name='create-outline' size={28}/>
        </TouchableOpacity>
      </View>

      <View style={styles.userInfo}>
        <View style={styles.row}>
          <Ionicons name='ios-pin' size={20} color={THEME.COLORS.CAPTION_400}/>
          <Text style={styles.rowText}>Pernambuco, Brasil</Text>
        </View>
        <View style={styles.row}>
          <Ionicons name='ios-call' size={20} color={THEME.COLORS.CAPTION_400}/>
          <Text style={styles.rowText}>81 980000000</Text>
        </View>
        <View style={styles.row}>
          <Ionicons name='ios-mail' size={20} color={THEME.COLORS.CAPTION_400}/>
          <Text style={styles.rowText}>jhondoe@example.com</Text>
        </View>
      </View>

      <View style={{marginTop: 15, gap: 20}}>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name='ios-heart-outline' size={25} color={THEME.COLORS.ACCENT_100} />
          <Text style={styles.menuText}>Favoritos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name='ios-card-outline' size={25} color={THEME.COLORS.ACCENT_100} />
          <Text style={styles.menuText}>Pagamentos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name='ios-cart-outline' size={25} color={THEME.COLORS.ACCENT_100} />
          <Text style={styles.menuText}>Pedidos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name='ios-share-social-outline' size={25} color={THEME.COLORS.ACCENT_100} />
          <Text style={styles.menuText}>Compartilhe com seus amigos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name='ios-shield-checkmark-outline' size={25} color={THEME.COLORS.ACCENT_100} />
          <Text style={styles.menuText}>Suporte</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name='ios-settings-outline' size={25} color={THEME.COLORS.ACCENT_100} />
          <Text style={styles.menuText}>Configurações</Text>
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
}