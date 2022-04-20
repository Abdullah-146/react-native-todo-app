import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native';

export default function App() {
    const [title, setit] = useState("");
    const [post, setP] = useState("");
    const [TList, setTList] = useState([]);
    const [PList, setPList] = useState([]);
 
    return (
       <View style={styles.container}>
           <View style={styles.title1}>
           <Text >Input Form</Text>
           </View>
           <View style={styles.second}>
               <Text style={styles.border}>Title </Text>
               <TextInput style={styles.txtinput} value={title}  onChangeText={(val) => {setit(val);}}></TextInput>
               <Text style={styles.border}>Text Box</Text>
           </View>
           <View style={styles.second}>
               <Text style={styles.border}>Post </Text>
              
               <TextInput style={styles.txtinput} value={post} onChangeText={(val) => {setP(val);}}></TextInput>
              
               <Text style={styles.border}>Text Box</Text>
           </View>
           <View style={styles.second}>
               <Text style={styles.border}>........ </Text>
               <TouchableOpacity style={styles.border1} onPress={()=>{setP(""); setit("")}}  ><Text>Reset Button</Text></TouchableOpacity>
               <TouchableOpacity style={styles.border1} onPress={()=>{setTList([...TList, title]),
                  setPList([...PList, post])}}><Text>Save Button</Text></TouchableOpacity>
           </View>
           <View style={styles.title2}>
           <Text style={styles.bolder} >Post List</Text>
           </View>
           <ScrollView>
           {PList.map((item,iteration)=>{
            return(
           <View style = {styles.postcard}>
               <Text style ={styles.title3}>Title:{TList[iteration]}</Text>

               <Text style ={styles.title3}> POSTS Details:{item}</Text>
               <View style = {styles.dateview}>
               <Text style ={styles.date}>Date: 10 April, 2022</Text>
               </View>
               
           </View>
           
            );})
           
           }
           </ScrollView>

        
       </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 0 ,
        flex: 1,
        backgroundColor: '#fff',
      
     
    },
    title1 : {
        marginTop: 50,
        backgroundColor: 'lightblue',
        width:'100%',
        alignSelf:'auto',
        alignItems: 'center',},
    border: {
        borderWidth: 1,
        height: 30,
        paddingRight:'25%',
        alignItems:'flex-start',
        textAlign:'center', },
    second: {
        flexDirection:'row',
        paddingBottom:'0.05%',
    } ,
    title2: {
  
        fontWeight:'bold',
        fontSize: 20,
        width:'100%',
        alignSelf:'auto',
        alignItems: 'center',},
    bolder: {
        fontWeight:'bold',
        fontSize: 18

    } ,
    postcard:{
        position:"relative",
          borderWidth:1,
          backgroundColor:'lightblue',
          height: 200 ,
          width: '100%'
    },
    title3:{
       fontWeight : 'bold',
       fontSize:16
    },
    date: {
        alignItems:'flex-end',
        fontWeight : 'bold',
        fontSize:14,
        paddingRight:30,
    },
    dateview:{
        // marginTop:'33%',
    //    backgroundColor:"green",
       width:250,
       height:40,
        position:"absolute",
        bottom:"3%",
        right:"2%",
        alignItems:'flex-end',
        justifyContent:'flex-start',
        
    }
    ,
    border1: {
        borderWidth: 1,
        paddingRight:'10%',
        alignItems:'flex-start',
        backgroundColor:'lightblue', },

    txtinput:{
        backgroundColor :'green',
        width:123 , 
        height: 27 ,

    }
});