import React, { useState, useEffect, useCallback } from 'react';
import {
  RefreshControl,
  View,
  Dimensions,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { Text, Avatar, Button, Icon, ListItem } from 'react-native-elements';
import Header from '../../components/Header';
import { getPokemonList, IMG_URL } from '../../api/index';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export default List = (props) => {
  const [pokemons, setPokemons] = useState()
  const [next, setNext] = useState()
  const [refreshing, setRefreshing] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    getPokemonList().then(data => {
      setPokemons(data.results)
      setNext(data.next)
    })
  }, [])

  const loadMore = () => {
    setLoadingMore(true)
    getPokemonList(next).then(data => {
      setPokemons([...pokemons, ...data.results])
      setNext(data.next)
      setLoadingMore(false)
    })
  }

  const getPokemonImgId = (id) => {
    console.log('long. ' + id.length)
    switch (id.length) {
      case 1:
        return `00${id}`
      case 2:
        return `0${id}`
      default:
        return id
    }
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    console.log('refreshing')
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const renderItem = (item) => {
    const path = item.url.split('/');
    const imgID = getPokemonImgId(path[6]);

    return (
      <View style={styles.rowContainer}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('ListDetail', item={item})}
          style={styles.pokemonContainer}
        >
          <View style={styles.pokemonItem}>
            <Text style={{ color: 'white' }}>{item.name}</Text>
            <Avatar size="large" source={{ uri: `${IMG_URL}${imgID}.png` }} />
          </View>
        </TouchableOpacity>

        {/* Add a check to avoid rendering an empty item for odd-length list */}
        {pokemons.indexOf(item) + 1 < pokemons.length && (
          <TouchableOpacity
          onPress={() => props.navigation.navigate('ListDetail', { item: pokemons[pokemons.indexOf(item) + 1] })}

            style={styles.pokemonContainer}
          >
            <View style={styles.pokemonItem}>
              <Text style={{ color: 'white' }}>{pokemons[pokemons.indexOf(item) + 1].name}</Text>
              <Avatar size="large" source={{ uri: `${IMG_URL}${getPokemonImgId(pokemons[pokemons.indexOf(item) + 1].url.split('/')[6])}.png` }} />
            </View>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <Header />
        <FlatList
          data={pokemons}
          numColumns={1} // Set numColumns to 1 to display one column
          bounces={false}
          renderItem={(item) => renderItem(item.item)}
          keyExtractor={(item, index) => index.toString()} // Convert index to string for keyExtractor
          style={{ marginTop: height / 8 }}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => onRefresh()}
            />
          }
          ListFooterComponent={
            loadingMore ?
              (<ActivityIndicator />)
              : (<Button title='Load more' onPress={() => loadMore()} />)
          }
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width,
    height,
  },
  mainContent: {
    flex: 1,
    width,
    height,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
  },
  pokemonContainer: {
    flex: 1,
  },
  pokemonItem: {
    backgroundColor: '#808080',
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: '#707070',
    padding: 10,
    marginVertical: 5,
  },
});
