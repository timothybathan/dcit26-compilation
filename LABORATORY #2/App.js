//BSCS 3-1
//BATHAN, TIMOTHY
//DOMIÑOS, JAMYCA
//LUZON, RANIEL
//SALAMAT, JORSY
import  React, {useState} from 'react';
import { View, TextInput, Button, StyleSheet, Text, ScrollView } from 'react-native';

export default function App(){

  const [enteredItem, setEnteredItem] = useState('');

  const enteredItemHandler = (enteredText) =>{
    setEnteredItem(enteredText);
  }

  const addItemHandler = () =>{
    setItemList(currentItem =>[... currentItem, enteredItem]);
    setEnteredItem("");
  }

  const [itemList, setItemList] = useState([]);

return (
  <View style = {styles.screen}>
    <View style = {styles.inputContainer}>
        <TextInput 
        placeholder = 'Enter Item'
        style = {styles.input}
        onChangeText = {enteredItemHandler}
        value = {enteredItem}
        />
        <Button
        title = "ADD"
        onPress = {addItemHandler}
        color = '#144667'
        />
    </View>
        <ScrollView>
        {itemList.map((item) => 
          <View key= {item} style = {styles.list}>
          <Text > {item} </Text>
          </View>
         )}
        </ScrollView>
  </View>
);
}

const styles = StyleSheet.create({
  screen: { 
    padding:15,
    backgroundColor: '#f3a65f',
    flex: 1
  },
  inputContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems:'center',
    marginVertical: 15
  },
  input: {
    padding:10, 
    width:225,
    backgroundColor: 'white',
    borderRadius: 15,
    borderColor: '#144667',
    borderWidth: 4
  },
  list: {
    padding: 15,
    borderColor: '#144667',
    borderWidth: 4,
    borderRadius: 50,
    marginVertical: 1,
   backgroundColor: '#faedac',
  }
}
)