import {useNavigation, useRoute} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

type ItemProps = {
  id: string;
  label: string;
};

const Select: React.FC = () => {
  const {navigate} = useNavigation();
  const route = useRoute<any>();

  const [item, setItem] = useState({} as ItemProps);

  useEffect(() => {
    const {selectedItem} = route?.params;
    console.log('item selecionado: ', selectedItem);
    // setItem(selectedItem);
  }, []);

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
      <Text>{item.label ?? 'Selecione'}</Text>
      <View style={{width: 20, height: 20, backgroundColor: '#666'}} />
    </TouchableOpacity>
  );
};

export default Select;
