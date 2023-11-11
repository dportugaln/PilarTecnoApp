import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import Collapsible from 'react-native-collapsible';
import { getPokemon } from '../../api';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ListDetail = (props) => {
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [isAbilitiesCollapsed, setAbilitiesCollapsed] = useState(true);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const { url } = props.route.params.item;
        const details = await getPokemon(url);
        setPokemonDetails(details);
      } catch (error) {
        console.error('Error fetching Pokemon details:', error);
      }
    };

    fetchPokemonDetails();
  }, []);

  const toggleAbilities = () => {
    setAbilitiesCollapsed(!isAbilitiesCollapsed);
  };

  if (!pokemonDetails) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.gridContainer}>
      <Header
        leftComponent={(
          <View>
            <TouchableOpacity style={{ marginTop: 5 }} onPress={() => props.navigation.goBack()}>
              <Icon type='font-awesome-5' name="arrow-left" color={"white"} />
            </TouchableOpacity>
          </View>
        )}
        // Add other header props as needed
      />
      <Image
        source={{ uri: pokemonDetails.sprites.front_default }}
        style={styles.gridColumn} // Adjust this style as needed
      />
      <Text style={styles.detailText}>{pokemonDetails.name}</Text>
      <TouchableOpacity onPress={toggleAbilities} style={styles.gridButton}>
        <Text style={styles.buttonTitle}>Toggle Abilities</Text>
      </TouchableOpacity>
      <Collapsible collapsed={isAbilitiesCollapsed}>
        <View>
          <Text style={styles.detailText}>Abilities:</Text>
          {pokemonDetails.abilities.map((ability) => (
            <Text key={ability.ability.name} style={styles.detailText}>{ability.ability.name}</Text>
          ))}
        </View>
      </Collapsible>
    </View>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    flex: 1,
    backgroundColor: 'black',
    width: WIDTH,
    height: HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridColumn: {
    flex: 1,
    justifyContent: 'center',
    width: WIDTH * 0.8, // Adjust the width as needed
    height: HEIGHT * 0.3, // Adjust the height as needed
  },
  gridRow: {
    flex: 1,
    justifyContent: 'center',
  },
  gridButton: {
    backgroundColor: 'grey',
    width: WIDTH * 0.4,
    height: WIDTH * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    elevation: 3,
  },
  buttonTitle: {
    fontSize: 18,
    color: 'white',
    elevation: 3,
  },
  detailText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
});

export default ListDetail;
