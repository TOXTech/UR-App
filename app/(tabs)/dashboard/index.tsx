import { Ionicons } from '@expo/vector-icons'; // Make sure you have expo/vector-icons installed
import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { Animated, Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { ProgressBar } from 'react-native-paper';

const { width } = Dimensions.get('window');

const data = {
  daily: [1.23, 1.0, 1.5, 1.2, 1.1],
  weekly: [0.25, 0.3, 0.2, 0.4, 0.1],
  monthly: [0.01, 0.02, 0.015, 0.01, 0.005],
};

const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientTo: '#08130D',
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.5,
};

const MainDashboard = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedPolluter, setSelectedPolluter] = useState(null);
  const slideAnim = useRef(new Animated.Value(-width * 0.7)).current;
  const navigation = useNavigation();

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    Animated.timing(slideAnim, {
      toValue: menuVisible ? -width * 0.7 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      {/*Menu*/}
      {menuVisible && (
        <TouchableOpacity style={styles.overlay} onPress={toggleMenu} activeOpacity={1} />
      )}

      <Animated.View style={[styles.sideMenu, { transform: [{ translateX: slideAnim }] }]}>
        <Text style={styles.menuTitle}>Menu</Text>
        <TouchableOpacity>
          <Text style={styles.menuItem}>Download</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.menuItem}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.menuItem}>Logout</Text>
        </TouchableOpacity>
      </Animated.View>

      <View style={styles.header}>
        <TouchableOpacity onPress={toggleMenu}>
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Dashboard</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {!selectedPolluter ? (
          <>
            <View style={styles.userInfoCard}>
              <Text style={styles.userName}>Dr. Abaho</Text>
              <Text style={styles.userRole}>Researcher</Text>
              <View style={styles.userMetrics}>
                <View>
                  <Text style={styles.metricLabel}>Motorcyclists</Text>
                  <Text style={styles.metricValue}>143</Text>
                </View>
                <View>
                  <Text style={styles.metricLabel}>Active:</Text>
                  <Text style={styles.metricValue}>100</Text>
                </View>
                <View>
                  <Text style={styles.metricLabel}>Inactive:</Text>
                  <Text style={styles.metricValue}>43</Text>
                </View>
              </View>
            </View>
          {/*Motari Lists*/}
            <View style={styles.card}>
              <Text style={styles.sectionTitle}>Polluters</Text>
              {[
                { id: "RAX123", progress: 0.46, color: "#FFC107", co2: "0.46% CO2" },
                { id: "RAX456", progress: 0.30, color: "#4CAF50", co2: "0.30% CO2" },
                { id: "RAX789", progress: 0.60, color: "#FF5722", co2: "0.60% CO2" }
              ].map((polluter) => (
                <TouchableOpacity
                  key={polluter.id}
                  onPress={() => setSelectedPolluter(polluter)}
                >
                  <View style={styles.polluterContainer}>
                    <Text style={styles.polluterText}>{polluter.id}</Text>
                    <ProgressBar style={styles.progressBar} progress={polluter.progress} color={polluter.color} />
                    <Text style={styles.polluterText}>{polluter.co2}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.card}>
              <Text style={styles.sectionTitle}>Inactive Users</Text>
              <Text style={styles.polluterText}>RAX XXX X - Hardware Issue</Text>
            </View>
          </>
        ) : (
          <View style={styles.detailContainer}>
            <TouchableOpacity style={styles.button} onPress={() => setSelectedPolluter(null)}>
                <Text style={styles.buttonText}>Back</Text>
              </TouchableOpacity>
            <View style={styles.Detailheader}>
              <Text style={styles.locationId}>{selectedPolluter.id}</Text>
              <Text style={styles.aqi}>AQI &lt; 50</Text>
              <Text style={styles.status}>Good</Text>
              <View style={{ marginTop: 10, flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => navigation.navigate('tracking')}>
                <Ionicons name="location-outline" size={24} color="white" />
              </TouchableOpacity>
              </View>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Daily</Text>
              <Text style={styles.percentage}>1.23%</Text>
              <Text style={styles.description}>3% of standards</Text>
              <BarChart
                data={{
                  labels: ['CO2', 'NO2', 'PM', 'O2', 'CO'],
                  datasets: [{ data: data.daily }],
                }}
                width={width - 42}
                height={220}
                chartConfig={chartConfig}
                style={styles.chart}
              />
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Weekly</Text>
              <Text style={styles.percentage}>0.25%</Text>
              <Text style={styles.description}>-15% of standards</Text>
              <BarChart
                data={{
                  labels: ['CO2', 'NO2', 'PM', 'O2', 'CO'],
                  datasets: [{ data: data.weekly }],
                }}
                width={width - 42}
                height={220}
                chartConfig={chartConfig}
                style={styles.chart}
              />
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Monthly</Text>
              <Text style={styles.percentage}>0.01%</Text>
              <Text style={styles.description}>-9% of standards</Text>
              <BarChart
                data={{
                  labels: ['CO2', 'NO2', 'PM', 'O2', 'CO'],
                  datasets: [{ data: data.monthly }],
                }}
                width={width - 42}
                height={220}
                chartConfig={chartConfig}
                style={styles.chart}
              />
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161622',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 1,
  },
  sideMenu: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width * 0.7,
    height: '100%',
    backgroundColor: '#1E1E2D',
    padding: 20,
    zIndex: 2,
  },
  menuTitle: {
    marginTop: 35,
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  menuItem: {
    fontSize: 16,
    color: '#9e9e9e',
    paddingVertical: 10,
  },
  header: {
    flexDirection: 'row',
    marginTop: 25,
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#161622',
  },
  Detailheader: {
    flexDirection: 'row',
    marginTop: 25,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#161622',
  },
  menuIcon: {
    fontSize: 24,
    color: '#fff',
  },
  title: {
    marginLeft: 96,
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  content: {
    flexGrow: 1,
    padding: 16,
  },
  userInfoCard: {
    backgroundColor: '#1E1E2D',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#1E1E2D',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  sectionHeaderTitle: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  userName: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  userRole: {
    fontSize: 14,
    color: '#9e9e9e',
    marginBottom: 16,
  },
  userMetrics: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  metricLabel: {
    fontSize: 14,
    color: '#9e9e9e',
  },
  metricValue: {
    fontSize: 18,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  polluterText: {
    fontSize: 14,
    color: '#fff',
  },
  polluterContainer: {
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'flex-start',
  },
  progressBar: {
    marginVertical: 4,
    height: 10,
    margin: 8,
    borderRadius: 3,
    width: 160,
  },
  detailContainer: {
    padding: 25,
    backgroundColor: '#1E1E2D',
    borderRadius: 12,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#0195AF',
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  locationId: {
    fontSize: 24,
    color: '#fff',
    marginTop: 7,
  },
  status: {
    fontSize: 18,
    color: '#00ff00',
    marginTop: 10,
  },
  aqi: {
    fontSize: 16,
    color: '#fff',
    marginTop: 13,
  },
  section: {
    marginRight: 20,
  },
  sectionTitle: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 10,
  },
  percentage: {
    fontSize: 18,
    color: '#fff',
  },
  description: {
    fontSize: 14,
    color: '#999',
    marginBottom: 10,
  },
  chart: {
    marginVertical: 8,
    marginLeft: -20,
  },
});

export default MainDashboard;