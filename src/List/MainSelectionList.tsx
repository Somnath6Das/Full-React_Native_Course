import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  FlatList,
  SectionList,
} from 'react-native';
import React from 'react';

import groupedPokemonList from './grouped-data.json';

const MainSelectionList = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.ScrollView}>
        <SectionList
          sections={groupedPokemonList}
          renderItem={({item}) => {
            return (
              <View style={styles.card}>
                <Text style={styles.cardText}>{item}</Text>
              </View>
            );
          }}
          renderSectionHeader={({section}) => (
            <Text style={styles.sectionHeaderText}>{section.type}</Text>
          )}
          ItemSeparatorComponent={() => <View style={{height: 16}} />}
          SectionSeparatorComponent={() => <View style={{height: 16}} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default MainSelectionList;

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
  sectionHeaderText: {
    backgroundColor: '#f5f5f5',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
