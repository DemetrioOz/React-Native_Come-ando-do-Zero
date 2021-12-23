import React from "react";
import {
  Text,
  Image,
  StyleSheet,
  ScrollView,
  View,
  FlatList,
} from "react-native";

import Topo from "./components/Topo";
import Descricao from "./components/Descricao";
import Lista from "./components/Lista";
import Texto from "../../components/Texto";

export default function Cesta({ topo, descricao, itens }) {
  return (
    <FlatList
      data={itens.lista}
      renderItem={Lista}
      keyExtractor={({ nome }) => {
        nome;
      }}
      ListHeaderComponent={() => {
        return (
          <>
            <Topo {...topo} />
            <View style={styles.cesta}>
              <Descricao {...descricao} />
              <Texto style={styles.titulo}>{itens.titulo}</Texto>
            </View>
          </>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  titulo: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    fontSize: 20,
    lineHeight: 32,
  },
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
