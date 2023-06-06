import { Card } from 'react-native-paper';
import styled from 'styled-components/native';
import { Text } from '../../../../components/typography/text.component';

export const InfoCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-top: ${(props) => props.theme.space[3]};
  position: relative;
`;
export const InfoCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const Ratings = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const Section = styled.View`
  position: absolute;
  right: ${(props) => props.theme.space[2]};
  top: ${(props) => props.theme.space[4]};
  flex-direction: row;
`;

export const OpenInfo = styled.View`
  margin: ${(props) => props.theme.space[2]};
`;

export const ClosedText = styled(Text)`
  margin: ${(props) => props.theme.space[1]};
`;

export const TypeIcon = styled.Image`
  width: 30px;
  height: 30px;
  margin: ${(props) => props.theme.space[2]};
`;
