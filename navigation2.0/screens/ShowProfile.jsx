let users = [
    {
      id: "46546464",
      displayName: "Rehman",
      profileImage:
        "https://allworldpm.com/wp-content/uploads/2016/10/230x230-avatar-dummy-profile-pic.jpg",
      bio: "description with 100 words",
      email: "email address",
    },
    {
      id: "46546465",
      displayName: "Ahmed",
      profileImage:
        "https://allworldpm.com/wp-content/uploads/2016/10/230x230-avatar-dummy-profile-pic.jpg",
  
      bio: "description with 100 words",
      email: "email addres",
    },
    {
      id: "46546466",
      displayName: "Rehan",
      profileImage:
        "https://allworldpm.com/wp-content/uploads/2016/10/230x230-avatar-dummy-profile-pic.jpg",
  
      bio: "description with 100 words",
      email: "email addres",
    },
    {
      id: "46546467",
      displayName: "Suleman",
      profileImage:
        "https://allworldpm.com/wp-content/uploads/2016/10/230x230-avatar-dummy-profile-pic.jpg",
  
      bio: "description with 100 words",
      email: "email addres",
    },
    {
      id: "46546468",
      displayName: "Raheel",
      profileImage:
        "https://allworldpm.com/wp-content/uploads/2016/10/230x230-avatar-dummy-profile-pic.jpg",
      bio: "description with 100 words",
      email: "email addres",
    },
  ];
import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'

const ShowProfile = ({route}) => {
  
      {console.log(route.params)}
    return (  
  <View style={styles.container}>
    <Image
      style={styles.Slogo}
      source={{uri: users[route.params].profileImage}}
    />
    <Text style={styles.text_style}> {users[route.params].displayName}</Text>
    <Text style={styles.text_style}> {users[route.params].id}</Text>
    <Text style={styles.text_style}> {users[route.params].bio}</Text>
    <Text style={styles.text_style}>  {users[route.params].email}</Text>
  </View>

  )
}
const styles = StyleSheet.create({
    container: {
      display: "flex",
      flex:1,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    text_style: {
      fontSize: 20,
      fontWeight: 500,
      padding: 4,
    },
    Slogo: {
      borderRadius: "25%",
      width: 150,
      height: 150,
    },
  });
export default ShowProfile