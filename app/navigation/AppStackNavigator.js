import AccountScreen from '../screens/AccountScreen';
import BookingsScreen from '../screens/BookingsScreen'
import EditProfileScreen from '../screens/EditProfileScreen'
import FavouritesScreen from '../screens/FavouritesScreen'
import HomeScreen from '../screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen'
import MapScreen from '../screens/MapScreen'
import NotificationsScreen from '../screens/NotificationsScreen'
import PaymentMethodsScreen from '../screens/PaymentMethodsScreen'
import RegistrationForm from '../screens/RegistrationForm'
import SplashScreen from '../screens/SplashScreen'
import TurfDetailsScreen from '../screens/TurfDetailsScreen'
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen'

import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Splash' component={SplashScreen}options={{ headerShown: false }}/>
      <Stack.Screen name="Login" component={LoginScreen}options={{ headerShown: false }} />
      <Stack.Screen name="Registration" component={RegistrationForm}options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Account" component={AccountScreen}options={{ headerShown: false }} />
      <Stack.Screen name="TurfDetails" component={TurfDetailsScreen}options={{ headerShown: false }} />
      <Stack.Screen name="Map" component={MapScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Notification" component={NotificationsScreen}options={{ headerShown: false }} />
      <Stack.Screen name="PaymentMethods" component={PaymentMethodsScreen}options={{ headerShown: false }} />
      <Stack.Screen name="Bookings" component={BookingsScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Favourites" component={FavouritesScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="EditProfile" component={EditProfileScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen}options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default AppNavigator;