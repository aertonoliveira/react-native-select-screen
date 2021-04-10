import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Alert} from 'react-native';

import {Container, SearchBox, ListElements} from './styles';

const ListItems: React.FC = () => {
  const {navigate} = useNavigation();

  const ITEMS = [
    {id: 1, label: 'Element'},
    {id: 2, label: 'Element'},
    {id: 3, label: 'Element'},
    {id: 4, label: 'Element'},
    {id: 5, label: 'Element'},
  ];

  return (
    <Container>
      <SearchBox></SearchBox>
      <ListElements>
        {ITEMS.map(item => (
          <TouchableOpacity
            key={item.id}
            onPress={() => navigate('Home', {selectedItem: item})}
            style={{
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#cccccc',
              padding: 20,
            }}>
            <Text>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </ListElements>
    </Container>
  );
};

export default ListItems;
