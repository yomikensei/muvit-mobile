import React from 'react';
import { Card, CardItem, Text, Badge, Body, Right, Icon } from 'native-base';

const ItemCard = () => (
  <Card>
    <CardItem header button>
      <Text>Task #1982819829</Text>
    </CardItem>
    <CardItem header button>
      <Text>14/07/2019</Text>
    </CardItem>
    <CardItem button>
      <Body>
        <Badge success>
          <Text>Delivered</Text>
        </Badge>
      </Body>
      <Right>
        <Icon name="md-arrow-forward" />
      </Right>
    </CardItem>
  </Card>
);

export default ItemCard;
