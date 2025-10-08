import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // make sure to install expo/vector-icons

export default function BalanceCard() {
  return (
    <View style={styles.container}>
      {/* Green Card */}
      <View style={styles.card}>
        <Text style={styles.name}>Abel Kedede</Text>
        <View style={styles.balanceRow}>
          <Text style={styles.balance}>250,000Br</Text>
          <Ionicons
            name="eye-outline"
            size={22}
            color="white"
            style={{ marginLeft: 5 }}
          />
        </View>
        <View style={styles.accountRow}>
          <Text style={styles.accountLabel}>Account number:</Text>
          <Ionicons
            name="copy-outline"
            size={14}
            color="#fff"
            style={{ marginHorizontal: 4 }}
          />
          <Text style={styles.accountNumber}>100030030</Text>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionItem}>
          <Ionicons name="send-outline" size={22} color="#0c8a43" />
          <Text style={styles.actionText}>Transfer</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionItem}>
          <Ionicons name="card-outline" size={22} color="#0c8a43" />
          <Text style={styles.actionText}>Top Up</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionItem}>
          <Ionicons name="download-outline" size={22} color="#0c8a43" />
          <Text style={styles.actionText}>Withdraw</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 30,
  },
  card: {
    backgroundColor: "#1db954",
    width: 300,
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
  name: {
    color: "white",
    fontSize: 16,
    marginBottom: 6,
  },
  balanceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  balance: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
  },
  accountRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  accountLabel: {
    color: "white",
    fontSize: 13,
  },
  accountNumber: {
    color: "white",
    fontWeight: "600",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    width: 260,
    paddingVertical: 10,
    borderRadius: 16,
    marginTop: -20, // overlay effect
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  actionItem: {
    alignItems: "center",
  },
  actionText: {
    color: "#0c8a43",
    fontSize: 13,
    marginTop: 4,
    fontWeight: "500",
  },
});
