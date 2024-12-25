import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Courses from "../components/Courses";
import { CoursesContext } from "../store/coursesContext";
import { getLastWeek } from "../helper/date";
import { getCourses } from "../helper/http";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorText from "../components/ErrorText";

const RecentCourses = () => {
  const coursesContext = useContext(CoursesContext);

  const [fetchedCourses, setFetchedCourses] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    setError(null);
    async function takeCourses() {
      setIsFetching(true);

      try {
        const courses = await getCourses();
        coursesContext.setCourse(courses);
      } catch (error) {
        setError("Kursları Çekemedik.");
      }

      setIsFetching(false);
    }

    takeCourses();
  }, []);

  if (error && !isFetching) {
    return <ErrorText message={error} />;
  }

  if (isFetching) {
    return <LoadingSpinner />;
  }

  const recentCourses = coursesContext.courses.filter((course) => {
    const today = new Date();
    const dateLastWeek = getLastWeek(today, 7);
    return course.date >= dateLastWeek && course.date <= today;
  });

  return (
    <Courses
      courses={recentCourses}
      coursesPeriod="Son Bir Hafta"
      nullText="Yakın Zamanda Herhangi Bir Kursa Kayıt Olmadınız"
    />
  );
};

export default RecentCourses;

const styles = StyleSheet.create({});
