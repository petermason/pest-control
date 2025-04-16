import * as React from 'react';
import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function PlaceScreen() {
  const { id } = useLocalSearchParams();
  
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-foreground text-xl">Place ID: {id}</Text>
    </View>
  );
}
