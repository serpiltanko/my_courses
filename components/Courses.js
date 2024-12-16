import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CoursesSummary from "./CoursesSummary";
import CoursesList from "./CoursesList";



  
const Courses = ({ coursesPeriod, courses }) => {
  return (
    <View style={styles.container}>
      <CoursesSummary  courses={courses}    periodName={coursesPeriod} />
      <CoursesList  courses={courses} />
    </View>
  );
};

export default Courses;

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:25,
        paddingTop:25,
    }
});
