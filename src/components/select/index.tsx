import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import _ from 'lodash';
import {
  Container,
  SearchBox,
  ListElements,
  ItemLabel,
  ButtonItem,
  SearchInput,
} from '../../components/select/styles';

type ItemProps = {
  id: number;
  label: string;
};

type ListItemProps = {
  items: ItemProps[];
};

const Select: React.FC<ListItemProps> = ({items}: ListItemProps) => {
  const [getSelectItem, setSelectItem] = useState({} as ItemProps);
  const [showList, setShowList] = useState(false);

  function renderListItems(items: ItemProps[]) {
    return (
      <Container>
        <SearchBox>
          <SearchInput></SearchInput>
        </SearchBox>
        <ListElements>
          {items.map(item => (
            <ButtonItem
              key={item.id}
              onPress={() => {
                setSelectItem(item);
                setShowList(false);
              }}>
              <ItemLabel>{item.label}</ItemLabel>
            </ButtonItem>
          ))}
        </ListElements>
      </Container>
    );
  }

  return (
    <View>
      {!showList ? (
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
          onPress={() => setShowList(true)}>
          <Text>{getSelectItem.label ?? 'select item'}</Text>
          <View style={{width: 20, height: 20, backgroundColor: '#666'}} />
        </TouchableOpacity>
      ) : (
        renderListItems(items)
      )}
    </View>
  );
};

export default Select;
