import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View  style={styles.container}>
      <Text style={styles.content}>Hi am Rajisha Athul dilip</Text>
      <Text>Baypoor Naduvatam</Text>

      <Link href={"/about"}>Visits about screen</Link>
    </View>
  );
}
 const styles=StyleSheet.create({
  container:{
   
        flex: 1,
        flexDirection:"column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"lightblue",
        textShadowColor:"30",
        gap:10,
      },
      content:{
        fontSize: 10,
        fontWeight:"bold",
        fontStyle:"normal",
        fontFamily:"sans-sarif"
      },
 })