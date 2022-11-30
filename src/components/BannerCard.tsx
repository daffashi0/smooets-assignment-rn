import React from 'react';
import {Card, Paragraph, Title} from 'react-native-paper';

type BannerCardProps = {
  id?: number;
  image_url: string;
  title: string;
  description: string;
};

const BannerCard = ({description, image_url, title}: BannerCardProps) => {
  return (
    <Card style={{marginBottom: 20}}>
      <Card.Cover source={{uri: image_url}} />
      <Card.Content>
        <Title>{title}</Title>
        <Paragraph>{description}</Paragraph>
      </Card.Content>
    </Card>
  );
};
export default BannerCard;
