import React from "react";
import Constants from "expo-constants";
import {
  Alert,
  TouchableNativeFeedback,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Routes, Route, NativeRouter } from "react-router-native";
import Movies from "./Movies";
import Movie from "./Movie";

export default function Main() {
  return (
    <View style={{ marginTop: Constants.statusBarHeight }}>
      <Routes>
        <Route exact path="/" Component={Movies}></Route>
        <Route exact path="/movie/:id" Component={Movie}></Route>
      </Routes>
    </View>
  );
}
