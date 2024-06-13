import {Text, Pressable, GestureResponderEvent} from 'react-native';

interface Props {
  onPress: (event: GestureResponderEvent) => void;
  title: string;
}

const CustomButton = ({onPress, title}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
        borderRadius: 5,
        padding: 10,
      }}>
      <Text style={{color: 'blue', fontSize: 18}}>{title}</Text>
    </Pressable>
  );
};

export default CustomButton;
