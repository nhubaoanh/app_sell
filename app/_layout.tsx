import 'react-native-reanimated';
import {Drawer } from "expo-router/drawer";
import { View } from 'react-native';
import DrawerLayout from './(drawer)/_layout';
import { Stack } from 'expo-router';

export default function RootLayout() {

  return (
    <Stack>
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
    </Stack>
  );
}
