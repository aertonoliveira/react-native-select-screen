import React from 'react';
import {View, Text} from 'react-native';
import Select from '../components/select';

const Home: React.FC = () => {
  const ITEMS = [
    {id: 1, label: 'Element 1'},
    {id: 2, label: 'Element 2'},
    {id: 3, label: 'Element 3'},
    {id: 4, label: 'Element 4'},
    {id: 5, label: 'Element 5'},
  ];

  return (
    <View style={{padding: 20}}>
      <Select items={ITEMS} />
    </View>
  );
};

export default Home;
