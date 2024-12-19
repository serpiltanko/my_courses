import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useContext, useState } from "react";
import EvilIcons from "@expo/vector-icons/EvilIcons";

import { CoursesContext } from "../store/coursesContext";
import CourseForm from "../components/CourseForm";
import { storeCourse, updateCourse, deleteCourseHttp } from "../helper/http";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorText from "../components/ErrorText";

const ManageCourse = ({ route, navigation }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState();

  const coursesContext = useContext(CoursesContext);
  const courseId = route.params?.courseId;

  let isEditing = false;

  const selectedCourse = coursesContext.courses.find(
    (course) => course.id === courseId
  );

  if (courseId) {
    isEditing = true;
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Kursu Güncelle" : "Kurs Ekle",
    });
  }, [navigation, isEditing]);

  async function deleteCourse() {
    setIsSubmitting(true);
    setError(null);
    try {
      coursesContext.deleteCourse(courseId);
      await deleteCourseHttp(courseId);
      navigation.goBack();
    } catch (error) {
      setError("Kursları Silemedik.");
      setIsSubmitting(false);
    }
  }

  if (error && !isSubmitting) {
    return <ErrorText message={error} />;
  }

  function cancelHandler() {
    navigation.goBack();
  }

  async function addOrUpdateHandler(courseData) {
    setIsSubmitting(true);
    setError(null);

    try {
      
    if (isEditing) {
      coursesContext.updateCourse(courseId, courseData);
      await updateCourse(courseId, courseData);
    } else {
      const id = await storeCourse(courseData);
      coursesContext.addCourse({ ...courseData, id: id });
    }
    navigation.goBack();
      
    } catch (error) {
      setError("Kurs eklemede ve ya güncellemede hata var.");
      setIsSubmitting(false);
    }





  }

  if (isSubmitting) {
    return <LoadingSpinner />;
  }

  return (
    <View style={styles.container}>
      <CourseForm
        onSubmit={addOrUpdateHandler}
        cancelHandler={cancelHandler}
        buttonLabel={isEditing ? "Güncelle" : "Ekle"}
        defaultValues={selectedCourse}
      />

      {isEditing && (
        <View style={styles.deleteContainer}>
          <EvilIcons
            name="trash"
            size={36}
            color="black"
            onPress={deleteCourse}
          />
        </View>
      )}
    </View>
  );
};

export default ManageCourse;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },
  deleteContainer: {
    alignItems: "center",
    borderTopWidth: 2,
    borderTopColor: "blue",
    paddingTop: 10,
    marginTop: 16,
  },
});
