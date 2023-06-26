import React from 'react';
import { View, TouchableOpacity,Text, TextInput } from 'react-native';

import { styles } from './styles';
import { ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export function EditPerfilScreen() {
  return (
    <View style={styles.container}>
        <View style={{margin:20, marginTop: 50}}>
            <View style={{alignItems: 'center'}}>
                <TouchableOpacity>
                    <View style={{
                        height: 100,
                        width: 100,
                        borderRadius: 15,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <ImageBackground
                            source={require("../../assets/60111.jpg")}
                            style={{height: 100, width: 100}}
                            imageStyle={{borderRadius: 15}}
                        >
                            <View style={{
                                flex:1,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Ionicons name="camera" size={35} color={"#fff"} style={{
                                    opacity: 0.7,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderWidth: 1,
                                    borderColor: '#fff',
                                    borderRadius: 10
                                }}/>
                            </View>
                        </ImageBackground>
                    </View>
                </TouchableOpacity>

                <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
                    Jhon Doe
                </Text>

            </View>
           

                <View style={styles.action}>
                    <Ionicons name='person-outline' size={20}/>
                    <TextInput 
                        placeholder="Nome"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        style={styles.textInput}
                    />
                </View>

                <View style={styles.action}>
                    <Ionicons name='person-outline' size={20}/>
                    <TextInput 
                        placeholder="Sobrenome"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        style={styles.textInput}
                    />
                </View>

                <View style={styles.action}>
                    <Ionicons name='call-outline' size={20}/>
                    <TextInput 
                        placeholder="Telefone"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        style={styles.textInput}
                    />
                </View>
                <View style={styles.action}>
                    <Ionicons name='mail-outline' size={20}/>
                    <TextInput 
                        placeholder="Email"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        style={styles.textInput}
                    />
                </View>
                <View style={styles.action}>
                    <Ionicons name='map-outline' size={20}/>
                    <TextInput 
                        placeholder="Estado"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        style={styles.textInput}
                    />
                </View>
                <View style={styles.action}>
                    <Ionicons name='location-outline' size={20}/>
                    <TextInput 
                        placeholder="Cidade"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        style={styles.textInput}
                    />
                </View>
                
                <TouchableOpacity style={styles.commandButton}>
                    <Text style={{color: "#ffff", fontWeight: 'bold', fontSize: 16}}>Alterar</Text>
                                
                </TouchableOpacity>
        </View>
    </View>
  );
}