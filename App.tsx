import React, {useState} from "react"
import { StyleSheet, Image, View,TouchableOpacity } from "react-native";
import symbolOn from "./assets/pictures/symbol-on.png";
import symbolOff from "./assets/pictures/symbol-off.png";

export default function App() {
  const [isActive, setisActive] = useState(false)

  const hadleSingle = ()=>{
    setisActive((oldValue: boolean) => {
      return !oldValue
    })
   }
  return (
    <View style={isActive ? styles.containerOn : styles.containerOff}>
      <TouchableOpacity onPress={hadleSingle}>
        <Image source={isActive ? symbolOn : symbolOff}></Image>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerOn: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  containerOff:{
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  }
});
