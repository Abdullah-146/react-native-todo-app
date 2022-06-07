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
import {
  View,
  TouchableOpacity,
  FlatList,
  Text,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";
import ShowProfile from "./ShowProfile";

const Profile = ({navigation}) => {
  return (
    <View>
      <FlatList
        data={users}
        renderItem={(item) => {
          return (
            <View style={styles.container}>
              <TouchableOpacity style={styles.container} onPress={() => { {console.log(item.index);} return  navigation.navigate('ShowProfile',(item.index)) ;}}>
                <Image
                  style={styles.Slogo}
                  source={{ uri: item.item.profileImage }}
                />
                <View style={styles.introduction}>
                  <Text style={styles.users}>{item.item.displayName}</Text>
                  <Text style={styles.users}>{item.item.id}</Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  introduction: {
    display: "flex",
    flexDirection: "column",
  },
  users: {
    color: "grey",
    paddingLeft: 10,
  },
  Slogo: {
    borderRadius: "25%",
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});
export default Profile;
