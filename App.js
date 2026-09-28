import React, {useState} from 'react';
import { View, Text, Button , TextInput } from "react-native"; 
import Logo from "./components/Logo"


export default function App() { 
  function buttonClicked() {
    //Alert.alert("button clicked"); //This works on a mobile phone
    alert("button clicked"); // this works on the web version - try uncommenting one or the other lines as necessary
}
  const [fullname, setFullname] = useState("Aparna");
  const [fname, setFname] = useState("Joe");
const [lname, setLname] = useState("Bloggs");
const [dob, setDob] = useState("13 February 1991");
  return (
    <View>
    <Logo/>
      <Text>Hello, World {fullname}</Text>
      <TextInput
        placeholder="enter your name"
        onChangeText={(value) => setFullname(value)}
      ></TextInput> 
<TextInput placeholder="Enter your firstname" onChangeText={setFname}/>
<TextInput placeholder="Enter your lastname" onChangeText={setLname}/>
<TextInput placeholder="Enter your date of birth" onChangeText={setDob}/>

<Text>Hello {fname} {lname}. You were born on {dob}</Text>
<Button title="SUBMIT" onPress={buttonClicked}/>
    </View>
  );
}