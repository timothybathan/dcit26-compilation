import React from "react";
import { View, Text, ScrollView, Image , Button, StyleSheet, ImageBackground} from "react-native";

const Home = ({navigation}) => {
  return(
    <ImageBackground source={require('../assets/ss.png')} style={styles.container}>
    <ScrollView>
    <Image style={styles.image} source={require('../assets/Jose-Rizal.png')}/>

    <Text style={styles.text1}>
        {"\n"}
        LIFE AND WORKS OF 
      </Text>  
      <Text style={styles.text2}>
      RIZAL
      {"\n"}
      </Text>
      <Text style={styles.text}>

    Dr. José Rizal, the national hero of the Philippines, is not only admired for possessing intellectual brilliance but also for taking a stand and resisting the Spanish colonial government. While his death sparked a revolution to overthrow the tyranny, Rizal will always be remembered for his compassion towards the Filipino people and the country.
    {"\n"}
    </Text>
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
      
    </ScrollView>
    </ImageBackground>
  );
}

export default Home;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFDBAC'
  },
  text:{
    textAlign: 'justify',
    textIndent: 50,
    padding: 10
  },
  text1:{
    textAlign: "center",
    fontSize: 30
  },
  text2:{
    textAlign: "center",
    fontSize: 50
  },
  image: {
    width: '100%',
    height: 200
    
  }
}
);