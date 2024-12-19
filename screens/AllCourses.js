import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import Courses from "../components/Courses";
import { CoursesContext } from "../store/coursesContext";


const AllCourses = () => {
  const coursesContext = useContext(CoursesContext);

  return <Courses  courses={coursesContext.courses}  coursesPeriod="Hepsi"  nullText="Herhangi Bir Kursa Kayıtlı Değilsiniz" />;
};

export default AllCourses;

const styles = StyleSheet.create({});
