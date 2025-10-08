import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function ComingSoonScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/coming.png")} // optional image/logo
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>🚧 Coming Soon</Text>
      <Text style={styles.subtitle}>This feature is under development.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 25,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#2e7d32",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#555",
    marginTop: 10,
  },
});
