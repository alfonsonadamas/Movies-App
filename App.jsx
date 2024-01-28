import Main from "./src/components/Main";
import React from "react";
import { View } from "react-native";
import { NativeRouter } from "react-router-native";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "#032541" }}>
      <NativeRouter>
        <Main />
      </NativeRouter>
    </View>
  );
}
