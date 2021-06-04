import React, { useState, useEffect} from "react";
import { ActivityIndicator, TouchableOpacity, View, Text, Button, Image, StyleSheet } from "react-native";

const Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  function fetchRandomData() {
    setLoading(true);
    fetch('https://randomuser.me/api')
    .then((response) => response.json())
    .then((json) => {
       setData(json.results[0]);
        console.log(json.results[0]);
      })
    .catch((error) => console.log(error))
    .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchRandomData();
  }, []);

  return(
    <View style={styles.container}>
      <View style={styles.container}>
        { isLoading ? <ActivityIndicator size="large" color= "black"/> : (
          <TouchableOpacity onPress={() => navigation.navigate('Profile', data)}>
            <Image style={styles.image} source={{uri: data.picture.large}} />
          </TouchableOpacity>  
        )}
        
        { isLoading ? true : (
          <Text style={styles.names}>
            {data.name.first}
            {data.name.last} </Text>
        )}

        { isLoading ? true: (
          <Button title ="Random User" color= "#34485e" onPress={() => {fetchRandomData();}  } />
        )}
      </View>
    </View>
  );
}
export default Home;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#51683a'
  },
  image:{
    width:250,
    height: 300,
    marginHorizontal: 140,
    marginVertical: 10,
    marginBottom: 100,
    resizeMode: 'cover'
  },
  names:{
    padding: 15,
    color: '#000112',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Arnoldboecklin',
    marginTop:-100
  }
}
);
