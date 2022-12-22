import React, { useState } from 'react';
import { Alert, View, ScrollView, Text, Image, Button, StyleSheet, TextInput } from 'react-native';



export default function Consultar() {
  const [livroEscolhido, setLivroEscolhido] = useState(null);
  const [titulo, setTitulo] = useState(null)

  const getLivro = (titulo) => {
    const endpoint = `https://gabrielasilvags08.pythonanywhere.com/leitura/${titulo}`;

    fetch(endpoint)
      .then(resposta => resposta.json())
      .then(json => {
        const livro = {
          titulo: json.titulo,
          autor: json.autor,
          ano: json.ano
        };
        setLivroEscolhido(livro);
      })
      .catch(() => {
        Alert.alert('Falha na busca', 'Não existe nenhum livro com este título!');
      });
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.topo}>
          <Text style={styles.topoTitulo}>Livros</Text>
        </View>
        {livroEscolhido != null && (
          <View style={styles.cardContainer}>
            <Text style={styles.linha}>Titulo: {livroEscolhido.titulo}</Text>
            <Text style={styles.linha}>Autor: {livroEscolhido.autor}</Text>
            <Text style={styles.linha}>Ano: {livroEscolhido.ano}</Text>
          </View>
        )}




        <View style={styles.cardContainer}>

          {livroEscolhido == null && (
            <><Text>Digite o nome do livro:</Text><TextInput style={styles.TextInputt}
              onChangeText={setTitulo}
              value={titulo}
              KeyboardType="text" /></>
          )}


          <Button title="Consultar" onPress={() => getLivro(titulo)} />
        </View>



      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fafafa' },

  topo: { height: 80, padding: 20, paddingTop: 40, marginBottom: 20, backgroundColor: '#b01376' },
  topoTitulo: { fontSize: 22, marginBottom: -10, color: '#fff', textAlign: 'center' },

  cardContainer: { borderWidth: 1, borderColor: '#d5d5d5', borderRadius: 4, marginBottom: 10, marginHorizontal: 20, padding: 10, },
  cardTitle: { fontSize: 22, marginBottom: 20, textAlign: 'center', color: '#656565' },

  Box: { alignItems: 'center' },

  linha: { fontSize: 18, marginBottom: 10, borderRadius: 4, paddingLeft: 10, paddingBottom: 2, paddingTop: 2 },

  TextInputt:{
    backgroundColor: '#DCDCDC',
    borderRadius: 4,
    marginBottom: 15,
    marginTop: 5,
    color: '#4F4F4F',
    paddingLeft: 10,
  },
});