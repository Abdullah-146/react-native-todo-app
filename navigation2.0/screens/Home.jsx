let users = [
  {
    id: "1",
    displayName: "Rehman",
    profileImage:
      "https://allworldpm.com/wp-content/uploads/2016/10/230x230-avatar-dummy-profile-pic.jpg",
    bio: "description with 100 words",
    email: "email address",
  },
  {
    id: "2",
    displayName: "Ahmed",
    profileImage:
      "https://allworldpm.com/wp-content/uploads/2016/10/230x230-avatar-dummy-profile-pic.jpg",

    bio: "description with 100 words",
    email: "email addres",
  },
  {
    id: "3",
    displayName: "Rehan",
    profileImage:
      "https://allworldpm.com/wp-content/uploads/2016/10/230x230-avatar-dummy-profile-pic.jpg",

    bio: "description with 100 words",
    email: "email addres",
  },
  {
    id: "4",
    displayName: "Suleman",
    profileImage:
      "https://allworldpm.com/wp-content/uploads/2016/10/230x230-avatar-dummy-profile-pic.jpg",

    bio: "description with 100 words",
    email: "email addres",
  },
  {
    id: "5",
    displayName: "Raheel",
    profileImage:
      "https://allworldpm.com/wp-content/uploads/2016/10/230x230-avatar-dummy-profile-pic.jpg",
    bio: "description with 100 words",
    email: "email addres",
  },
];

import { View, Text, FlatList, StyleSheet, ScrollView } from "react-native";
import React, { useContext ,useState } from "react";

import { UserDataContext } from "../Context";
import { Button ,Modal , TextInput } from "react-native";



const HomeScreen = () => {
  const handlename = (enter)=>{ setname(enter)}
  const handleid = (enter)=>{ setid(enter)}
  const contextData = useContext(UserDataContext);
  const [name , setname] =useState('')
  const [id , setid] =useState('')
  const [modal , setmodal] =useState(false)
  return (
    <View>
      <Text style={styles.user}>Users are: </Text>
      <Button title="Add" onPress={()=>setmodal(true)} />
  <Modal visible={modal}>
    <View>
      <Text>Honda</Text>
      <TextInput placeholder="Enter name" onChangeText={handlename} />
      <TextInput placeholder="Enter id"  onChangeText={handleid}/>
      <Button title="Add" onPress={()=>{setmodal(false); contextData.addNewUser(  {
    id: id,
    displayName: name,
    profileImage:
      "https://allworldpm.com/wp-content/uploads/2016/10/230x230-avatar-dummy-profile-pic.jpg",

    bio: "description with 100 words",
    email: "email addres",
  })}} />
    </View>
  </Modal>
     
      <FlatList
        data={contextData.Users}
        renderItem={({ item }) => {
          return   <> <Text style={styles.user}>{item.displayName}</Text>
          <View  style={{width:100}}><Button title="Delete" onPress={()=>{console.log(item.id);contextData.removeUser(item.id)}} /> 
        </View> </>  
        }}
      />
     
    </View>
  );
};
const styles = StyleSheet.create({
  user: {
    fontSize: 20,
    fontWeight: 500,
  },
});
export default HomeScreen;
