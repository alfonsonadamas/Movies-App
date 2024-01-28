import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  ScrollView,
} from "react-native";
import ViewMovies from "./ViewMovies";

export default function Movies() {
  const styles = StyleSheet.create({
    backgrounView: {
      backgroundColor: "lightblue",
      width: "100%",
      height: 400,
    },
    container: {
      flex: 1,
    },
    overlayView: {
      position: "absolute",
      backgroundColor: "rgba(6, 124, 180, 0.5)", // Fondo con opacidad
      width: 600,
      height: 400,
      top: 0, // Ajusta la posición superior según tu diseño
      left: 0, // Ajusta la posición izquierda según tu diseño
      justifyContent: "center",
      padding: 20,
    },
    title: {
      color: "white",
      fontSize: 40,
      fontWeight: "bold",
    },
    text: {
      color: "white",
      fontSize: 20,
      width: 300,
      fontWeight: "bold",
    },
    logo: {
      color: "white",
      fontSize: 25,
      fontWeight: "bold",
    },
    plus: {
      color: "yellow",
    },
  });
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.backgrounView}>
          <Image
            source={{
              uri: "https://steamuserimages-a.akamaihd.net/ugc/820128333706866720/967637767C7B66363C8B1884BC1AE270198322F7/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
            }}
            style={{
              width: "100%",
              height: 400,
              resizeMode: "cover",
            }}
          ></Image>
        </View>
        <View style={styles.overlayView}>
          <Text style={styles.logo}>
            MOVIES <Text style={styles.plus}>+</Text>
          </Text>
          <Text style={styles.title}>Welcome.</Text>
          <Text style={styles.text}>
            Millions of movies and people to discover. Explore now.
          </Text>
        </View>
      </View>
      <ViewMovies filterType="popular"></ViewMovies>
      <ViewMovies filterType="upcoming"></ViewMovies>
    </ScrollView>
  );
}
