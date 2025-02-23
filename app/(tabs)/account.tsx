import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { AntDesign, Feather } from '@expo/vector-icons';

export default function AccountScreen() {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    profilePicture: 'https://via.placeholder.com/100', 
  };

  return (
    <View style={styles.container}>
      {/* Profile Header */}
      <View style={styles.profileSection}>
        <Image source={{ uri: user.profilePicture }} style={styles.profileImage} />
        <Text style={styles.userName}>{user.name}</Text>
        <Text style={styles.userEmail}>{user.email}</Text>
      </View>

      {/* Account Options */}
      <View style={styles.menu}>
      <Link href="./account_pages/orderHist">
        <Pressable style={styles.menuItem}>
        <AntDesign name="profile" size={24} color="black" />
        <Text style={styles.menuText}>Order History</Text>
        </Pressable>
        </Link>
        

        <Pressable style={styles.menuItem} onPress={() => console.log('Navigate to Settings')}>
          <Feather name="settings" size={24} color="black" />
          <Text style={styles.menuText}>Settings</Text>
        </Pressable>

        <Pressable style={styles.menuItem} onPress={() => console.log('Logging Out')}>
          <AntDesign name="logout" size={24} color="red" />
          <Text style={[styles.menuText, { color: 'red' }]}>Logout</Text>
        </Pressable>
      </View>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    paddingTop: 50,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  userEmail: {
    fontSize: 16,
    color: '#666',
  },
  menu: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuText: {
    fontSize: 18,
    marginLeft: 15,
    color: '#333',
  },
});