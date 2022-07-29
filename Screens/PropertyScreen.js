import { StyleSheet, Text, View,Modal,ScrollView  } from 'react-native'
import React,{useState} from 'react'
import Button from '../components/Button';

export default function PropertyScreen({navigation}) {
    const [Visible,setVisible]=useState(false);
    const handClick=()=>{
      setVisible(false)
      navigation.navigate("Empty")
    }
      return (
        <View>
          <Button onPress={()=>{setVisible(true)}} title={"Click Here"}/>
           <Modal 
                visible={Visible} 
                animationType="fade" 
                style={styles.modalContent}
                transparent={true}
                statusBarTranslucent={false}
              >
                  <View style={styles.modalBackground}>    
                        <View style={styles.modalContainer}>
                          <Text style={styles.modalText}>More</Text>
                             <View style={styles.buttonContainer}>
                             <Text>Please Scroll!!</Text>
                              <ScrollView style={{height:290}}>
                                
                                <Button title='New Info'onPress={handClick}/>  
                                <Button title='Schedule'onPress={handClick}/>  
                                <Button title='MIS'onPress={handClick}/>  
                                <Button title='Inspection Done'onPress={handClick}/>  
                                <Button title='Create Report' onPress={handClick}/>  
                                <Button title='Modify Report'onPress={handClick}/>  
                                <Button title='Final Report'onPress={handClick}/>  
                                <Button title='Modify after Final' onPress={handClick}/>  
                              </ScrollView>
                              <View style={{top:60}}> 
                                <Button title= {'Close'} onPress={()=>setVisible(false)} style={styles.modalcloseBtn} textcolor={{color:"black"}}/>
                             </View>
                             </View>
                        </View>
                    </View> 
              </Modal>
        </View>
      )
}

const styles = StyleSheet.create({  modalBackground:{
  backgroundColor:"#191919",
  opacity:0.9,
  flex:1,
},
modalContainer: {
    top:250,
    height:600,
    width: '100%',
    // justifyContent: 'flex-end',
    alignSelf:"center",
    backgroundColor: '#ffffff',
    borderRadius:10,
},

modalcloseBtn:{
  backgroundColor:"#e8e8e8",
  borderRadius:7,
  width:"40%",
  
  
},})