import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ProgressBar } from 'react-native-paper'; // Using react-native-paper's ProgressBar for cross-platform support

const MainDashboard = () => {
  return (
    <View style={styles.container}>
      {/* Header with Hamburger Menu */}
      <View style={styles.header}>
        <Text style={styles.menuIcon}>☰</Text>
        <Text style={styles.title}>Dashboard</Text>
      </View>

      {/* Dashboard Sections */}
      <ScrollView contentContainerStyle={styles.content}>
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

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Polluters</Text>
          <View style={styles.polluterContainer}>
            <Text style={styles.polluterText}>RAX XXX X</Text>
            <ProgressBar style={styles.progressBar} progress={0.46} color="#FFC107" />
            <Text style={styles.polluterText}>0.46% CO2</Text>
          </View>
          <View style={styles.polluterContainer}>
            <Text style={styles.polluterText}>RAX XXX X</Text>
            <ProgressBar style={styles.progressBar} progress={0.30} color="#4CAF50" />
            <Text style={styles.polluterText}>0.30% CO2</Text>
          </View>
          <View style={styles.polluterContainer}>
            <Text style={styles.polluterText}>RAX XXX X</Text>
            <ProgressBar style={styles.progressBar} progress={0.60} color="#FF5722" />
            <Text style={styles.polluterText}>0.60% CO2</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Inactive Users</Text>
          <Text style={styles.polluterText}>RAX XXX X - Hardware Issue</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default MainDashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161622',
  },
  header: {
    flexDirection: 'row',
    marginTop: 25,
    alignItems: 'center',
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
  sectionTitle: {
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
    width: 125,
  },
});