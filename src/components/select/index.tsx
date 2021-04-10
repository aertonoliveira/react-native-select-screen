import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import _ from 'lodash';
import {
  Container,
  SearchBox,
  ListElements,
} from '../../components/select/styles';

interface ItemProps {
  id: string;
  label: string;
}

const Select: React.FC<ItemProps> = (items: ItemProps) => {
  const {navigate} = useNavigation();
  const route = useRoute();

  const [getItem, setItem] = useState([items]);
  const [getSelectItem, setSelectItem] = useState({} as ItemProps);

  function Render() {
    return (
      <Container>
        <SearchBox></SearchBox>
        <ListElements>
          {getItem.map(item => (
            <TouchableOpacity
              key={item.id}
              onPress={() => setSelectItem(item)}
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
  }

  return (
    <TouchableOpacity
      style={{
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#cccccc',
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
      onPress={() => navigate('ListItems')}>
      <Text>{getSelectItem.label}</Text>
      <View style={{width: 20, height: 20, backgroundColor: '#666'}} />
    </TouchableOpacity>
  );
};

export default Select;
