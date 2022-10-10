import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import Menu from "./component/Menu";
export default function Home() {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require("../assets/img.jpg")} />
      <Text style={styles.welcome}>WELCOME TO</Text>
      <Text style={styles.header_name}>Ramarwati Hostel</Text>
      <Text
        style={{
          textAlign: "center",
          fontSize: 30,
          marginHorizontal: 20,
          marginVertical: 10,
          color: "green",
        }}
      >
        You can find real you in hostel. Your strength, your weaknesses without
        help of others​.....
      </Text>
      {/* <View style={styles.contentContainer}>
        <Menu />
      </View> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 50,
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
