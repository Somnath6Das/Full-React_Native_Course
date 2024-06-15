import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  FlatList,
} from 'react-native';
import React from 'react';
import pokemonList from './data.json';

const MainFlatList = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.ScrollView}>
        <FlatList
          data={pokemonList}
          // horizontal
          renderItem={({item}) => {
            return (
              <View style={styles.card} key={item.id}>
                <Text style={styles.cardText}>{item.type}</Text>
                <Text style={styles.cardText}>{item.name}</Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => item.id.toString()}
          ItemSeparatorComponent={<View style={{height: 16}} />}
          ListEmptyComponent={<Text>No Item found!</Text>}
        />
      </View>
    </SafeAreaView>
  );
};

export default MainFlatList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight,
  },
  ScrollView: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    // marginBottom: 16,
  },
  cardText: {fontSize: 30},
});
