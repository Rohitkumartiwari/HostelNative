import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import axios from "axios";

import { Alert } from "react-native-web";

import Menu from "./component/Menu";
export default function UpdateData() {
  const [emptyRooms, setErrom] = useState();
  const [totalPersons, setTpersons] = useState();
  const [totalBoys, setBoys] = useState();
  const [totalGirls, setGirls] = useState();
  const [data, setData] = useState([]);
  const submit = () => {
    if (!emptyRooms && !totalPersons) {
      Alert.alert("please fill the form correctly");
    } else {
      Alert.alert("form submitted");
    }
    axios
      .post(`https://apis-new.onrender.com/details`, {
        emptyRooms: parseInt(emptyRooms),
        totalPersons: parseInt(totalPersons),
        totalBoys: parseInt(totalBoys),
        totalGirls: parseInt(totalGirls),
      })
      .then((res) => {
        setData(res.data);
        setMessage(res.data.message);
      });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.labels}>Empty Rooms</Text>
      <TextInput
        style={styles.inputStyle}
        value={emptyRooms}
        onChangeText={(userdata) => setErrom(userdata)}
      />
      <Text style={styles.labels}>Total Persons</Text>
      <TextInput
        style={styles.inputStyle}
        value={totalPersons}
        onChangeText={(fname) => setTpersons(fname)}
      />
      <Text style={styles.labels_address}>Total Boys</Text>
      <TextInput
        style={styles.inputStyle}
        value={totalBoys}
        onChangeText={(address) => setBoys(address)}
      />
      <Text style={styles.labels}>Total Girls</Text>
      <TextInput
        style={styles.inputStyle}
        value={totalGirls}
        onChangeText={(mobile) => setGirls(mobile)}
      />
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText} onPress={submit}>
          Save
        </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
      {/* <View style={styles.contentContainer}>
        <Menu />
      </View> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 30,
    paddingHorizontal: 10,
  },
  contentContainer: {
    flex: 1, // pushes the footer to the end of the screen
    justifyContent: "flex-end",
  },
  labels: {
    fontWeight: "bold",
    // fontSize: 15,
    color: "#7d7d7d",
    paddingBottom: 5,
    fontFamily: "JosefinSans_300Light",
    lineHeight: 25,
    marginHorizontal: 10,
    marginTop: 10,
  },
  labels_address: {
    height: 40,
    fontWeight: "bold",
    // fontSize: 15,
    color: "#7d7d7d",
    paddingBottom: 5,
    fontFamily: "JosefinSans_300Light",
    lineHeight: 25,
    marginHorizontal: 10,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.3)",
    paddingHorizontal: 15,
    paddingVertical: 16,
    borderRadius: 2,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  picker: {
    height: 45,
    marginHorizontal: 10,
    padding: 10,
    width: "50%",
  },
  saveButton: {
    borderWidth: 0.5,
    borderColor: "#007BFF",
    backgroundColor: "#007BFF",
    padding: 15,
    margin: 25,
    marginTop: 40,
  },
  saveButtonText: {
    color: "#FFFFFF",
    fontSize: 20,
    textAlign: "center",
  },
});
