import {Image} from 'react-native';

export default function Logo() {
  return (
     <Image source={require('../assets/tud.jpeg')}
     style={{ width: 150, height: undefined, aspectRatio: 1.5, resizeMode: 'contain' }}
    />
  )
}