import React from "react";
import { View, Text, ScrollView, Image , Button, StyleSheet, ImageBackground} from "react-native";

const Profile = ({navigation}) => {
  return(
    <ImageBackground source={require('../assets/ss.png')} style={styles.container}>

  <ScrollView>
    <Image style={styles.image} source={require('../assets/d91810d164c82543587eccb17dd3de0d.jpg')}/>
    <Text style={styles.text1}>
        {"\n"}
        José Rizal
        {"\n"}
    </Text>    
    <Text style={styles.text}>
      José Protasio Rizal Mercado Y Alonso Realonda was born on June 19, 1861 to Francisco Mercado and Teodora Alonzo in the town of Calamba in the province of Laguna. He had nine sisters and one brother. At the early age of three, the future political leader had already learned the English alphabet. And, by the age of five, José could already read and write.
{"\n"}
</Text>
<Text style={styles.text}>
Upon enrolling at the Ateneo Municipal de Manila (now referred to as Ateneo De Manila University), he dropped the last three names in his full name, after his brother’s advice – hence, being known as José Protasio Rizal. His performance in school was outstanding – winning various poetry contests, impressing his professors with his familiarity of Castilian and other foreign languages, and crafting literary essays that were critical of the Spanish historical accounts of pre-colonial Philippine societies.
{"\n"}
</Text>
<Text style={styles.text}>
While he originally obtained a land surveyor and assessor’s degree in Ateneo, Rizal also took up a preparatory course on law at the University of Santo Tomas (UST). But when he learned that his mother was going blind, he decided to switch to medicine school in UST and later on specialized in ophthalmology. In May 1882, he decided to travel to Madrid in Spain, and earned his Licentiate in Medicine at the Universidad Central de Madrid.
{"\n"}
</Text>
<Text style={styles.text}>
Apart from being known as an expert in the field of medicine, a poet, and an essayist, Rizal exhibited other amazing talents. He knew how to paint, sketch, and make sculptures. Because he lived in Europe for about 10 years, he also became a polyglot – conversant in 22 languages. Aside from poetry and creative writing, Rizal had varying degrees of expertise in architecture, sociology, anthropology, fencing, martial arts, and economics to name a few.
</Text>
  <Button title="About" onPress={() => navigation.navigate('About')} />
  </ScrollView>
  </ImageBackground>
  );
}

export default Profile;

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
  image: {
    width: '100%',
    height: 200
    
  }
}
);