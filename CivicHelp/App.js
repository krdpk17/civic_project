import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';

const Stack = createNativeStackNavigator();

// Home Screen Component
function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to Civic Help</Text>
        <Text style={styles.subtitle}>Your Community Assistant</Text>
        
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Services')}
        >
          <Text style={styles.buttonText}>View Services</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('About')}
        >
          <Text style={styles.buttonText}>About</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// Services Screen Component
function ServicesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Our Services</Text>
        <View style={styles.serviceCard}>
          <Text style={styles.serviceTitle}>Community Support</Text>
          <Text style={styles.serviceDescription}>Connect with local community services</Text>
        </View>
        <View style={styles.serviceCard}>
          <Text style={styles.serviceTitle}>Emergency Contacts</Text>
          <Text style={styles.serviceDescription}>Quick access to emergency numbers</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

// About Screen Component
function AboutScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>About Us</Text>
        <Text style={styles.paragraph}>
          Civic Help is your go-to platform for accessing community services and emergency assistance.
          We're here to make civic engagement easier and more accessible for everyone.
        </Text>
      </View>
    </SafeAreaView>
  );
}

// App Component
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2196F3',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ title: 'Civic Help' }}
        />
        <Stack.Screen 
          name="Services" 
          component={ServicesScreen}
          options={{ title: 'Our Services' }}
        />
        <Stack.Screen 
          name="About" 
          component={AboutScreen}
          options={{ title: 'About Us' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 8,
    width: '80%',
    marginVertical: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  serviceCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    marginVertical: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  serviceTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 5,
  },
  serviceDescription: {
    fontSize: 16,
    color: '#666',
  },
  paragraph: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    lineHeight: 24,
  },
}); 