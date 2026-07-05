import React from 'react';
import {View,Text,FlatList,TouchableOpacity,SafeAreaView,StyleSheet }from 'react-native'
import {colors,spacing,fonts}from '../../constants/theme';


export default function EventsScreen(){
    const renderItems =({item})=>
        <TouchableOpacity >
            style ={styles.card}
            <View 
             style={styles.categoryBadge}>
                <Text
                 style={styles.categoryText}>{item.category}</Text>
            </View>
            {/*TITLE*/}
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{item.title ||'Campus Event'}</Text>
            </View>
            <View style={styles.infoRow}>
        <Text style={styles.dateText}>📅 {item.date}</Text>
        <Text style={styles.locationText}>📍 {item.location}</Text>
      </View>
      <View>
      <Text style={styles.description} numberOfLines={4}>
        {item.description}
      </Text>
      </View>
            



    
        </TouchableOpacity>

        return(
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={EVENTS}
                    renderItem={renderItems}
                    keyExtractor={(item) => item.id}
                />
            </SafeAreaView>
        );
         
        
            


     const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Elevation for Android
    elevation: 3,
  },
  categoryBadge: {
    backgroundColor: colors.primary || '#6200ee',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderBottomRightRadius: 10,
  },
  categoryText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  contentContainer: {
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginBottom: 8,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  dateText: {
    fontSize: 14,
    color: '#666',
  },
  locationText: {
    fontSize: 14,
    color: '#666',
  },
  description: {
    fontSize: 14,
    color: '#777',
    lineHeight: 20,
  },
});
        
}















  export const EVENTS = [
  {
    id: '1',
    title: 'Tech Career Fair',
    date: 'March 15, 2026',
    location: 'Main Hall',
    category: 'Career',
    description:
      'Meet top tech companies hiring interns and graduates. Bring your CV and dress professionally.',
  },
  {
    id: '2',
    title: 'React Native Workshop',
    date: 'March 18, 2026',
    location: 'Lab 3',
    category: 'Academic',
    description:
      'Hands-on workshop covering navigation, state management and API integration in React Native.',
  },
  {
    id: '3',
    title: 'Startup Pitch Night',
    date: 'March 20, 2026',
    location: 'Auditorium',
    category: 'Entrepreneurship',
    description:
      'Watch fellow students pitch their startup ideas to a panel of investors and mentors.',
  },
  {
    id: '4',
    title: 'Sports Day',
    date: 'March 22, 2026',
    location: 'Sports Complex',
    category: 'Social',
    description:
      'Annual inter-departmental sports competition. Register your team before March 20.',
  },
  {
    id: '5',
    title: 'Research Symposium',
    date: 'March 25, 2026',
    location: 'Conference Room B',
    category: 'Academic',
    description:
      'Final year students present their research projects. Open to all students and faculty.',
  },
  {
    id: '6',
    title: 'Coding Competition',
    date: 'March 28, 2026',
    location: 'ICT Centre',
    category: 'Career',
    description:
      'Solve algorithmic challenges in 3 hours. Prizes for top 3 teams. Register in pairs or solo.',
  },
];



const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 16,
    elevation: 3, // Adds shadow on Android
    shadowColor: '#000', // Adds shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  categoryBadge: {
    backgroundColor: '#e0e7ff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  categoryText: {
    color: '#4338ca',
    fontSize: 12,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 8,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  dateText: {
    color: '#6b7280',
    fontSize: 14,
  },
  locationText: {
    color: '#6b7280',
    fontSize: 14,
  },
  description: {
    fontSize: 14,
    color: '#4b5563',
    lineHeight: 20,
  },
});

