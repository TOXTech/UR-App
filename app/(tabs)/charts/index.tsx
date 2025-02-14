import { Client, Databases } from 'appwrite';
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const { width, height } = Dimensions.get('window');

const client = new Client()
  .setEndpoint('https://your-appwrite-endpoint.com')
  .setProject('your-project-id');

const databases = new Databases(client);

type ChartData = {
  daily: number[];
  weekly: number[];
  monthly: number[];
  annually: number[];
};

const fetchChartData = async (
  setChartData: React.Dispatch<React.SetStateAction<ChartData>>
) => {
  try {
    const response = await databases.listDocuments('database-id', 'collection-id');
    const records = response.documents;
    
    const daily = records.map((record: any) => record.daily);
    const weekly = records.map((record: any) => record.weekly);
    const monthly = records.map((record: any) => record.monthly);
    const annually = records.map((record: any) => record.annually);
    
    setChartData({ daily, weekly, monthly, annually });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

type ChartSectionProps = {
  title: string;
  percentage: string;
  change: number;
  dataset: number[];
};

const ChartSection: React.FC<ChartSectionProps> = ({ title, percentage, change, dataset }) => (
  <View style={styles.chartContainer}>
    <StatusBar style="light" />
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.percentage}>{percentage}</Text>
    <Text style={[styles.change, { color: change < 0 ? 'red' : 'green' }]}> {change}% of standards</Text>
    <BarChart
      data={{
        labels: dataset.map((_, i) => (i + 1).toString()),
        datasets: [{ data: dataset }],
      }}
      width={width * 0.9}
      height={220}
      yAxisLabel="$" // Added missing yAxisLabel
      yAxisSuffix="%" // Added missing yAxisSuffix
      chartConfig={{
        backgroundGradientFrom: '#222233',
        backgroundGradientTo: '#222233',
        decimalPlaces: 2,
        color: (opacity = 1) => `rgba(0, 200, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      }}
      style={{ marginVertical: 10 }}
    />
  </View>
);

const Charts = () => {
  const [chartData, setChartData] = useState<ChartData>({ daily: [], weekly: [], monthly: [], annually: [] });

  useEffect(() => {
    fetchChartData(setChartData);
  }, []);

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 150 }}>
      <ChartSection title="Daily" percentage="1.23%" change={3} dataset={chartData.daily} />
      <ChartSection title="Weekly" percentage="0.25%" change={-15} dataset={chartData.weekly} />
      <ChartSection title="Monthly" percentage="0.01%" change={-9} dataset={chartData.monthly} />
      <View style={{ height: height * 0.6 }}>
        <ChartSection title="Annually" percentage="2.74%" change={7} dataset={chartData.annually} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161622',
    paddingVertical: 20,
  },
  chartContainer: {
    backgroundColor: '#222233',
    margin: 10,
    padding: 15,
    borderRadius: 10,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  percentage: {
    color: '#fff',
    fontSize: 24,
  },
  change: {
    fontSize: 14,
    marginTop: 5,
  },
  tabBar: {
    backgroundColor: '#161622',
    borderTopWidth: 0,
  }
});

export default Charts;