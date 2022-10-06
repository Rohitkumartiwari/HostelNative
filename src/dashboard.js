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

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require("../assets/img.jpg")} />
      <Text style={styles.welcome}>WELCOME TO</Text>
      <Text style={styles.header_name}>Dashbaord</Text>
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
