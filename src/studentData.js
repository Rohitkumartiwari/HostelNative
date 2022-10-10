import React, { useState, useEffect, useRef } from "react";
import Modal from "react-native-modal";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import Menu from "./component/Menu";
import moment from "moment";
import axios from "axios";
import CalendarPicker from "react-native-calendar-picker";
import { Toast } from "react-native-toast-message/lib/src/Toast";
export default function StudentData() {
  const [data, setData] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState(null);
  const [message, setMessage] = useState();
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  useEffect(() => {
    setLoading(true);
    axios.get("https://apis-new.onrender.com/users").then((res) => {
      setData(res.data), setLoading(false);
    });
  }, []);
  const submit = () => {
    let formData = new FormData();
    formData.append("name", info.name);
    formData.append("FathersName", info.FathersName);
    formData.append("mobile", info.mobile);
    formData.append("address", info.address);

    formData.append("price", parseInt(info.price));
    formData.append("date", date);
    axios
      .put(`https://apis-new.onrender.com/users/${info._id}`, formData)
      .then((res) => {
        setMessage(res.data.message);
      });
  };

  const close = () => {
    setModalVisible(!isModalVisible);
  };
  const del = (id) => {
    const newData = data.filter((a) => a._id !== id);
    setData(newData);
    axios
      .delete(`https://apis-new.onrender.com/users/${id}`)
      .then((res) => console.log(res));
  };

  const renderItem = ({ item }) => (
    <View>
      <View key={item._id} style={{ padding: 10 }}>
        <Text style={styles.title}>{"Author : " + item.name}</Text>
        <Text style={styles.title}>{"Fathers Name : " + item.FathersName}</Text>
        <Text style={styles.title}>{"Mobile : " + item.mobile}</Text>
        <Text style={styles.title}>{"Address : " + item.address}</Text>
        <Text style={styles.title}>{"Price : " + item.price}</Text>
        <Text style={styles.title}>
          {"Date : " + moment(item.date).format("YYYY/MM/DD")}
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            margin: 10,
            gap: 10,
          }}
        >
          <TouchableOpacity
            style={{
              flex: 3,
              backgroundColor: "green",
              alignItems: "center",
              paddingVertical: 5,
              borderRadius: 10,
              marginRight: 10,
            }}
            onPress={() => {
              toggleModal(), setInfo(item);
            }}
          >
            <Text style={{ fontSize: 20 }}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 3,
              backgroundColor: "red",
              alignItems: "center",
              paddingVertical: 5,
              borderRadius: 10,
            }}
            onPress={() => del(item._id)}
          >
            <Text style={{ fontSize: 20 }}>Delete</Text>
          </TouchableOpacity>
          <Modal
            isVisible={isModalVisible}
            style={{ backgroundColor: "white", padding: 10, borderRadius: 10 }}
          >
            <ScrollView>
              <View style={{ flex: 1, color: "white" }}>
                {message == "data added successfully" ? (
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 30,
                      color: "green",
                      margin: 40,
                    }}
                  >
                    {message}
                  </Text>
                ) : (
                  <>
                    {" "}
                    <Text style={{ textAlign: "center", fontSize: 20 }}>
                      Update Detail!
                    </Text>
                    <Text style={styles.labels}>Enter your name</Text>
                    <TextInput
                      style={styles.inputStyle}
                      value={info?.name}
                      id="name"
                      onChangeText={(newText) =>
                        setInfo({ ...info, name: newText })
                      }
                    />
                    <Text style={styles.labels}>Father Name</Text>
                    <TextInput
                      style={styles.inputStyle}
                      value={info?.FathersName}
                      id="fname"
                      onChangeText={(newText) =>
                        setInfo({ ...info, FathersName: newText })
                      }
                    />
                    <Text style={styles.labels_address}>Address</Text>
                    <TextInput
                      style={styles.inputStyle}
                      value={info?.address}
                      numberOfLines={5}
                      id="address"
                      onChangeText={(newText) =>
                        setInfo({ ...info, address: newText })
                      }
                    />
                    <Text style={styles.labels}>Mobile No</Text>
                    <TextInput
                      style={styles.inputStyle}
                      value={info?.mobile}
                      id="mobile"
                      onChangeText={(newText) =>
                        setInfo({ ...info, mobile: newText })
                      }
                    />
                    <Text style={styles.labels}>Price</Text>
                    <TextInput
                      style={styles.inputStyle}
                      value={info?.price}
                      id="price"
                      onChangeText={(newText) =>
                        setInfo({ ...info, price: newText })
                      }
                    />
                    <Text style={styles.labels}>Joining Date</Text>
                    <CalendarPicker
                      style={{ padding: 10 }}
                      onDateChange={(d) => {
                        setDate(moment(d).format("YYYY/MM/DD"));
                      }}
                    />
                  </>
                )}

                <TouchableOpacity style={styles.saveButton}>
                  <Text style={styles.saveButtonText} onPress={submit}>
                    Save
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.saveButton}>
                  <Text style={styles.saveButtonText} onPress={close}>
                    Close
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </Modal>
        </View>
      </View>
    </View>
  );
  const SeparatorComponent = () => {
    return <View style={styles.separatorLine} />;
  };
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <SafeAreaView style={styles.container}>
        <Text style={{ textAlign: "center", fontSize: 30, color: "blue" }}>
          Student Data
        </Text>
        {loading ? (
          <ActivityIndicator
            size="large"
            style={{ textAlign: "center", color: "green", marginTop: 50 }}
          />
        ) : (
          <>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item._id}
              ItemSeparatorComponent={SeparatorComponent}
            />
          </>
        )}
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 40,
    paddingLeft: 10,
  },

  separatorLine: {
    height: 1,
    backgroundColor: "plum",
    paddingTop: 2,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
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
    borderRadius: 10,
    marginHorizontal: 10,
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
    marginBottom: 10,
    borderRadius: 10,
  },
  saveButtonText: {
    color: "#FFFFFF",
    fontSize: 20,
    textAlign: "center",
  },
});
