import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Courses from '../components/Courses'

const RecentCourses = () => {
  return (
    <Courses coursesPeriod="Son Bir Hafta" />
   )
}

export default RecentCourses

const styles = StyleSheet.create({})