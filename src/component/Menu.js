import React from "react";
import { TouchableOpacity, View, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
const Menu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.menu}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Image style={styles.img} source={require("../../assets/home.png")} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
        <Image
          style={styles.img}
          source={require("../../assets/dashboard.jpg")}
        ></Image>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("StudentForm")}>
        <Image
          style={styles.img}
          source={require("../../assets/form.png")}
        ></Image>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("StudentData")}>
        <Image
          style={styles.img}
          source={require("../../assets/data.png")}
        ></Image>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("UpdateData")}>
        <Image
          style={styles.img}
          source={require("../../assets/update.png")}
        ></Image>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  menu: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 30,
    marginTop: 30,
  },
  img: {
    width: 50,
    height: 50,
    marginBottom: 11,
    borderRadius: 15,
    marginTop: 50,
    backgroundColor: "white",
  },
});

export default Menu;
