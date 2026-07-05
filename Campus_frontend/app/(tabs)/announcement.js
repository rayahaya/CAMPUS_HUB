import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import {colors,fonts,} from "../../constants/theme";
// This is the announcement screen that displays a list of announcements for the user
const announcements = [
    { id: "1", title: "Welcome to CampusHub!",
         content: "We are excited to have you on board. Stay tuned for updates and announcements." },
    { id: "2", title: "Campus Event: Spring Fest", 
        content: "Join us for the annual Spring Fest on April 15th. Enjoy food, music, and fun activities!" },
    { id: "3", title: "New Feature: Study Groups", 
        content: "We have launched a new feature that allows you to create and join study groups with your classmates." },
    {
        id: "4", title:"Mid semester Break Announcement",
        content: "The mid semester break will be from March 10th to March 17th. Enjoy your break and come back refreshed!"
    }
];


// Define styles outside the component

const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: colors.background,
        padding: 16,
      },
      listPadding: {
        paddingBottom: 24,
      },
      announcementCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#E2E8F0',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      announcementTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1A365D',
        marginBottom: 4,
      },
      announcementContent: {
        fontSize: 15,
        color: '#334155',
      },
    });
export default function AnnouncementScreen() {
  
  // 1. Define how each announcement looks
  const renderAnnouncement = ({ item }) => (
    <TouchableOpacity style={styles.announcementCard}>
      <Text style={styles.announcementTitle}>{item.title}</Text>
      <Text style={styles.announcementContent}>{item.content}</Text>
    </TouchableOpacity>
  );

  // 2. Return the main view with the list
  return (
    <View style={styles.container}>
      <FlatList
        data={announcements} // Make sure 'announcements' is defined above or imported
        renderItem={renderAnnouncement}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listPadding}
      />
    </View>
  );
   
















































}