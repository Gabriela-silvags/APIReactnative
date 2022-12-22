import * as React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { StyleSheet } from 'react-native';


export default function Home({ navigation }) {
    return (
        <View>
            <View style={styles.container}>
                
                <Text style={styles.menu}> Início </Text>
                <View style={styles.buttonOutside}>
                    <Button 
                     title="Criar"
                     onPress={() => navigation.navigate('Criar')}
                    />
                </View>
            
                <View style={styles.buttonOutside}>
                    <Button
                     title="Consultar"
                     onPress={() => navigation.navigate('Consultar')}
                    />
                </View>

            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      marginTop: 45,
      marginLeft: 60,
      marginRight: 60,
      borderWidth: 1, 
      borderColor: '#d5d5d5', 
      borderRadius: 20, 
      marginBottom: 10, 
      marginHorizontal: 20, 
      padding: 10,
      backgroundColor: '#fafafa'
    },
    buttonOutside:{
        marginBottom: 12,
    
    },
    menu:{ 
        fontSize: 22, 
        marginBottom: 20, 
        textAlign: 'center',
    },
    button:{
        fontSize: 22,
        borderRadius: 10
    }
        })

