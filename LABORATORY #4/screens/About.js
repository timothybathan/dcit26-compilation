import React from "react";
import { View , Button, StyleSheet, ImageBackground, ScrollView, Text, Image} from "react-native";

const About = ({navigation}) => {
  return(
    <ImageBackground source={require('../assets/ss.png')} style={styles.container}>
      <ScrollView>
      <Image style={styles.image} source={require('../assets/6939415_orig.gif')}/>
      <Text style={styles.text}>
      In 1887 Rizal published his first novel, Noli me tangere (The Social Cancer), a passionate exposure of the evils of Spanish rule in the Philippines. A sequel, El filibusterismo (1891; The Reign of Greed), established his reputation as the leading spokesman of the Philippine reform movement. He published an annotated edition (1890; reprinted 1958) of Antonio Morga’s Sucesos de las Islas Filipinas, hoping to show that the native people of the Philippines had a long history before the coming of the Spaniards. He became the leader of the Propaganda Movement, contributing numerous articles to its newspaper, La Solidaridad, published in Barcelona. Rizal’s political program included integration of the Philippines as a province of Spain, representation in the Cortes (the Spanish parliament), the replacement of Spanish friars by Filipino priests, freedom of assembly and expression, and equality of Filipinos and Spaniards before the law.
      </Text>
      <Text style={styles.text}>
Rizal returned to the Philippines in 1892. He founded a nonviolent-reform society, the Liga Filipina, in Manila, and was deported to Dapitan in northwest Mindanao. He remained in exile for the next four years. In 1896 the Katipunan, a Filipino nationalist secret society, revolted against Spain. Although he had no connections with that organization and he had had no part in the insurrection, Rizal was arrested and tried for sedition by the military. Found guilty, he was publicly executed by a firing squad in Manila. His martyrdom convinced Filipinos that there was no alternative to independence from Spain. On the eve of his execution, while confined in Fort Santiago, Rizal wrote “Último adiós” (“Last Farewell”), a masterpiece of 19th-century Spanish verse.

      </Text>
      <Button title="Back" onPress={() => navigation.goBack()} />
      </ScrollView>
      </ImageBackground>
  );
}

export default About;

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
  image: {
    width: '100%',
    height: 200
    
  }
}
);