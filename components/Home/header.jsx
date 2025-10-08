import React, { useEffect, useState } from "react";
import { Image, Text, View, StyleSheet } from "react-native";

export default function Header() {
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        weekday: "long",
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      };
      const formatted = now.toLocaleString("en-US", options);
      setCurrentDateTime(formatted);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Good Morning</Text>
        <Text style={styles.date}>{currentDateTime}</Text>
      </View>

      <Image source={require("./assets/settings.png")} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  greeting: {
    fontSize: 22,
    fontWeight: "600",
    color: "#222",
  },
  date: {
    fontSize: 14,
    color: "#777",
    marginTop: 2,
  },
  image: {
    width: 28,
    height: 28,
    tintColor: "#444",
  },
});
