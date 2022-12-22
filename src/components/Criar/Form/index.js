import React, { useState } from "react"
import { View, Text, ScrollView } from "react-native"
import {Alert, Button, TextInput, StyleSheet } from "react-native";
import Result from "./Result";


export default function Form() {

    const [titulo, setTitulo] = useState(null)
    const [autor, setAutor] = useState(null)
    const [ano, setAno] = useState(null)
    const [message, setmessage] = useState("Preencha as informações do livro")
    const [textButton, setTextButton] = useState("Cadastrar")


    const cadastrarLivro = () => {
        const endpoint = `https://gabrielasilvags08.pythonanywhere.com/nalinha/0/${titulo}/${autor}/${ano}`;
        console.log(endpoint)
        console.log(titulo)
        fetch(endpoint)
          .then(resposta => resposta.json())
            .catch(() => {
              Alert.alert('Cadastro', 'Livro cadastrado com sucesso');
            });
      }

    function validation() {
        if (titulo != null && autor != null && ano != null) {
            cadastrarLivro()
            setTitulo(null)
            setAutor(null)
            setAno(null)
            setTextButton("Cadastro finalizado")
            return
        }
        setTextButton("Cadastrar")
        setmessage("Preencha no mínimo as informações: titulo, autor e ano")
    }

    return (
        <ScrollView>
            <View style={styles.topo}>
                <Text style={styles.topoTitulo}>Livros</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.Textt}>Titulo:</Text>
                <TextInput style={styles.TextInputt}
                    onChangeText={setTitulo}
                    value={titulo}
                    // placeholder="Ex. 1.70"
                    KeyboardType="text"
                />

                <Text style={styles.Textt}>Autor:</Text>
                <TextInput style={styles.TextInputt}
                    onChangeText={setAutor}
                    value={autor}
                    ////placeholder="Ex. 60.30"
                    KeyboardType="text"
                />

                <Text style={styles.Textt}>Ano:</Text>
                <TextInput style={styles.TextInputt}
                    onChangeText={setAno}
                    value={ano}
                    //placeholder="Ex. 60.30"
                    KeyboardType="text"
                />

                <Button
                    title={textButton}
                    onPress={() => validation()}
                />
            </View>

            <Result messageResult={message} />

        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
      marginTop: 20,
      marginLeft: 30,
      marginRight: 30,
      borderWidth: 1, 
      borderColor: '#d5d5d5', 
      borderRadius: 4, 
      marginBottom: 10, 
      marginHorizontal: 20, 
      padding: 10,
      backgroundColor: '#fafafa'
    },
    Textt:{
        fontSize: 15,
        color: '#363636'
    },
    TextInputt:{
        backgroundColor: '#DCDCDC',
        borderRadius: 4,
        marginBottom: 15,
        color: '#4F4F4F',
        paddingLeft: 10
    },
    TextTitle:{
        fontSize: 22, marginTop: 25, textAlign: 'center', color: 'black',
        backgroundColor: 'white' ,
        marginLeft: 80,
        marginRight: 80,
        borderRadius: 5
    },
    topo: { height: 80, padding: 20, paddingTop: 40, marginBottom: 20, backgroundColor: '#b01376' },
    topoTitulo: { fontSize: 22, marginBottom: -10, color: '#fff', textAlign: 'center' }
})