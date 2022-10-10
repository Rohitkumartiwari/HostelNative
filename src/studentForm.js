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
import {
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
} from "@expo-google-fonts/josefin-sans";
import CalendarPicker from "react-native-calendar-picker";
import { Alert } from "react-native-web";
import moment from "moment";
import Menu from "./component/Menu";
export default function StudentForm() {
  const [gender, setGender] = useState();
  const [date, setDate] = useState(null);

  const [name, setName] = useState();
  const [fname, setFName] = useState();
  const [address, setAddress] = useState();
  const [mobile, setMobile] = useState();
  const [price, setPrice] = useState();
  const [calOpen, setCalopen] = useState(false);
  const [message, setMessage] = useState(null);
  const [data, setData] = useState();
  const submit = () => {
    if (!name && !mobile) {
      Alert.alert("please fill the form correctly");
    } else {
      Alert.alert("form submitted");
    }
    let formData = new FormData();
    formData.append("name", name);
    formData.append("FathersName", fname);
    formData.append("mobile", mobile);
    formData.append("address", address);

    formData.append("date", date);

    formData.append("price", parseInt(price));
    axios.post("https://apis-new.onrender.com/users", formData).then((res) => {
      setData(res.data);
      setMessage(res.data.message);
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={{ textAlign: "center", fontSize: 30, color: "blue" }}>
        Student Form
      </Text>
      {message ? (
        <Text
          style={{
            textAlign: "center",
            fontSize: 30,
            color: "green",
            marginTop: 20,
          }}
        >
          {message}
        </Text>
      ) : (
        <>
          <Text style={styles.labels}>Enter your name</Text>
          <TextInput
            style={styles.inputStyle}
            value={name}
            onChangeText={(userdata) => setName(userdata)}
          />
          <Text style={styles.labels}>Father Name</Text>
          <TextInput
            style={styles.inputStyle}
            value={fname}
            onChangeText={(fname) => setFName(fname)}
          />
          <Text style={styles.labels_address}>Address</Text>
          <TextInput
            style={styles.inputStyle}
            value={address}
            numberOfLines={5}
            onChangeText={(address) => setAddress(address)}
          />
          <Text style={styles.labels}>Mobile No</Text>
          <TextInput
            style={styles.inputStyle}
            value={mobile}
            onChangeText={(mobile) => setMobile(mobile)}
          />
          <Text style={styles.labels}>Price</Text>
          <TextInput
            style={styles.inputStyle}
            value={price}
            onChangeText={(price) => setPrice(price)}
          />
          {/* <Text style={styles.labels}>Gender</Text>
      <Picker
        style={styles.picker}
        selectedValue={gender}
        onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
      >
        <Picker.Item label="Select" value="1" />
        <Picker.Item label="Male" value="2" />
        <Picker.Item label="Female" value="3" />
      </Picker> */}
          <Text style={styles.labels}>Joining Date</Text>
          <CalendarPicker
            onDateChange={(d) => {
              setDate(moment(d).format("YYYY/MM/DD"));
              setCalopen(!calOpen);
            }}
          />
          <View style={styles.inputContainer}>
            <TouchableOpacity style={styles.saveButton}>
              <Text style={styles.saveButtonText} onPress={submit}>
                Save
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}

      <StatusBar style="auto" />
      {/* <View>
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
    padding: 10,
  },
  labels: {
    fontWeight: "bold",
    fontSize: 18,
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
    fontSize: 18,
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
    margin: 5,
  },
  saveButtonText: {
    color: "#FFFFFF",
    fontSize: 20,
    textAlign: "center",
  },
  inputContainer: { marginBottom: 20 },
});
