import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.circle}><Text style={styles.addText}>✓</Text></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#F9F9FB',
    padding: 15,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    height: 72,
    width: 343,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  circle: {
    width: 36,
    height: 36,
    backgroundColor: '#4D8AF0',
    borderRadius: 70,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    maxWidth: '80%',
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },
  addText: {
    color: '#FFF',
    fontSize: 25,
  },
});

export default Task;