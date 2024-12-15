import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import CourseItem from "./CourseItem";



function renderCourseItem(itemData){
    return <CourseItem {...itemData.item}/>
}


const CoursesList = ({ courses }) => {
  return <FlatList
  data={courses}
  keyExtractor={(item)=>item.id}
    renderItem={renderCourseItem}

  
  />;
};

export default CoursesList;

const styles = StyleSheet.create({});
