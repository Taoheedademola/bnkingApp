import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

const payments = [
  { id: 1, name: "Internet", icon: "globe-outline", color: "#6a0dad" },
  { id: 2, name: "Water", icon: "water-outline", color: "#f5b400" },
  { id: 3, name: "Electricity", icon: "flash-outline", color: "#ff7f00" },
  { id: 4, name: "TV Cable", icon: "tv-outline", color: "#00b341" },
  { id: 5, name: "Vehicle", icon: "car-outline", color: "#111" },
  { id: 6, name: "Rent Bill", icon: "home-outline", color: "#e60023" },
  { id: 7, name: "Invest", icon: "wallet-outline", color: "#005eff" },
  { id: 8, name: "More", icon: "grid-outline", color: "#ff00aa" },
];

export default function PaymentList() {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Ionicons name={item.icon} size={26} color={item.color} />
      <Text style={styles.label}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment List</Text>

      <FlatList
        data={payments}
        renderItem={renderItem}
        numColumns={4} // 4 per row
        keyExtractor={(item) => item.id.toString()}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ paddingVertical: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
    marginBottom: 10,
  },
  item: {
    backgroundColor: "white",
    width: 70,
    height: 70,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    fontSize: 12,
    marginTop: 6,
    color: "#333",
  },
});
