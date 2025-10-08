import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const transactions = [
  {
    id: 1,
    name: "Ali Abdu",
    date: "April 10, 2025 : 03:16",
    amount: "-3000 Br",
    type: "CBE",
  },
  {
    id: 2,
    name: "Bereket Ayele",
    date: "April 17, 2025 : 07:14",
    amount: "-5000 Br",
    type: "Telebirr",
  },
  {
    id: 3,
    name: "Dawit Lema",
    date: "April 19, 2025 : 10:40",
    amount: "-100 Br",
    type: "CBE",
  },
  {
    id: 4,
    name: "Tesfaye Adam",
    date: "April 27, 2025 : 12:45",
    amount: "-500 Br",
    type: "Dashin",
  },
];

export default function TransactionsScreen() {
  const [selected, setSelected] = useState("Transfer");

  const renderTransaction = ({ item }) => (
    <View style={styles.transactionRow}>
      <View style={styles.leftSection}>
        <View style={styles.iconCircle}>
          <Ionicons name="arrow-up-outline" size={20} color="#e63946" />
        </View>
        <View>
          <Text style={styles.name}>To {item.name}</Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>
      </View>
      <View style={styles.rightSection}>
        <Text style={styles.amount}>{item.amount}</Text>
        <Text style={styles.type}>{item.type}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Transactions</Text>

      {/* Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selected === "Transfer" && styles.activeButton,
          ]}
          onPress={() => setSelected("Transfer")}
        >
          <Text
            style={[
              styles.tabText,
              selected === "Transfer" && styles.activeText,
            ]}
          >
            Transfer
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tabButton,
            selected === "Top Up" && styles.activeButton,
          ]}
          onPress={() => setSelected("Top Up")}
        >
          <Text
            style={[styles.tabText, selected === "Top Up" && styles.activeText]}
          >
            Top Up
          </Text>
        </TouchableOpacity>
      </View>

      {/* Latest Transfer */}
      <View style={styles.latestRow}>
        <Text style={styles.latestTitle}>Latest Transfer</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>

      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderTransaction}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "#1db954",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  activeButton: {
    backgroundColor: "#1db954",
  },
  tabText: {
    color: "#1db954",
    fontWeight: "600",
  },
  activeText: {
    color: "#fff",
  },
  latestRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  latestTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  seeAll: {
    fontSize: 13,
    color: "#1db954",
    fontWeight: "500",
  },
  transactionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconCircle: {
    width: 35,
    height: 35,
    borderRadius: 50,
    backgroundColor: "#f3f3f3",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  name: {
    fontSize: 15,
    fontWeight: "600",
  },
  date: {
    fontSize: 12,
    color: "#777",
  },
  rightSection: {
    alignItems: "flex-end",
  },
  amount: {
    fontSize: 15,
    fontWeight: "700",
    color: "#e63946",
  },
  type: {
    fontSize: 12,
    color: "#777",
  },
});
