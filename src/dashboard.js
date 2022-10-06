import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Menu from "./component/Menu";
import axios from "axios";
export default function Dashboard() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`https://apis-new.onrender.com/details`).then((res) => {
      setData(res.data);
    });
  }, []);
  const value = data.slice(-1);
  console.log(value);
  return (
    <View style={styles.container}>
      {value.map((a) => {
        return (
          <View
            key={a._id}
            style={{
              flex: 1,
              flexDirection: "row",
              gap: 15,
              padding: 10,
              justifyContent: "flex-start",
              flexWrap: "wrap",
              justifyContent: "center",
              marginTop: 50,
            }}
          >
            <View style={styles.card}>
              <Text
                style={{ fontSize: 25, textAlign: "center", color: "green" }}
              >
                Total Students
              </Text>
              <Text style={{ fontSize: 20 }}>{a.totalPersons}</Text>
            </View>
            <View style={styles.card}>
              <Text
                style={{ fontSize: 25, textAlign: "center", color: "green" }}
              >
                Total Boys
              </Text>
              <Text style={{ fontSize: 20 }}>{a.totalBoys}</Text>
            </View>
            <View style={styles.card}>
              <Text
                style={{ fontSize: 25, textAlign: "center", color: "green" }}
              >
                Total Girls
              </Text>
              <Text style={{ fontSize: 20 }}>{a.totalGirls}</Text>
            </View>
            <View style={styles.card}>
              <Text
                style={{ fontSize: 25, textAlign: "center", color: "green" }}
              >
                Empty Rooms
              </Text>
              <Text style={{ fontSize: 20 }}>{a.emptyRooms}</Text>
            </View>
          </View>
        );
      })}

      <View style={styles.contentContainer}>
        <Menu />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  contentContainer: {
    flex: 1, // pushes the footer to the end of the screen
    justifyContent: "flex-end",
  },
  img: {
    width: 300,
    height: 250,
    marginBottom: 11,
    borderRadius: 15,
    marginTop: 20,
  },
  card: {
    borderRadius: 10,
    backgroundColor: "#dddd",
    width: 150,
    height: 150,

    justifyContent: "center",
    alignItems: "center",
  },
  header_name: {
    marginTop: 11,
    fontSize: 40,
    color: "#ff8c00",
  },
  welcome: {
    marginTop: 11,
    fontSize: 25,
    fontWeight: "bold",
  },
});
