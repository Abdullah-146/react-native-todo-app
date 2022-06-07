import { View, Text, Pressable,StyleSheet,Image } from 'react-native'
import React from 'react'

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
    

const Home = ({navigation}) => {
  const screen = ()=>{
     navigation.navigate('Profile');
  }
  return (
        <View style={styles.container}>
          <Text style={styles.text_style}>Dashboard</Text>
          <Image
            style={styles.logi}
            source={{
              uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
            }}
          />
          <Text style={styles.text_style}>Abdullah</Text>
          <Text style={styles.text_style}>id:48546468</Text>
          <Text style={styles.text_style}>bio:description</Text>
          <Text style={styles.text_style}> email: email address</Text>
          <Pressable><Text onPress={screen} > Go To Profile Page</Text></Pressable>
     
        </View>
    
      
  )
}
const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "",
    },
    text_style: {
      fontSize: 20,
      fontWeight: 500,
      padding: 4,
    },
    logi: {
      borderRadius: "25%",
      width: 150,
      height: 150,
    },
  });
export default Home