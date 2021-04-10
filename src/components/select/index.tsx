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
  SelectBox,
} from '../../components/select/styles';
// import {BiCaretDown} from 'react-icons/bi';
import Icon from 'react-native-vector-icons/FontAwesome';

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
        <SelectBox onPress={() => setShowList(true)}>
          <Text>{getSelectItem.label ?? 'select item'}</Text>
          <Icon name="angle-down" size={18} color="#999" />
        </SelectBox>
      ) : (
        renderListItems(items)
      )}
    </View>
  );
};

export default Select;
