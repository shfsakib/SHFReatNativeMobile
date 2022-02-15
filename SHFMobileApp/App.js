import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Toast from 'react-native-toast-message';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Index } from './component/pages';

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();

const RootRoute = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Index' component={Index} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
export default function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <RootRoute />
        {/* <StatusBar style="auto" /> */}
      </NavigationContainer>
      <Toast />
    </QueryClientProvider >
  );
}

