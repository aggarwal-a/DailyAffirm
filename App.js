import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }

  const getCurrentDate=()=>{

    return new Date().toDateString()

}

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

      <View style={styles.tasksWrapper}>
        <Text style={styles.Title}> {getCurrentDate()} </Text>
        <Text style={styles.sectionTitle}>My Tasks</Text>
        <View style={styles.items}>
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                  <Task text={item} /> 
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
        
      </ScrollView>

      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Add a task'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  tasksWrapper: {
    paddingTop: 180,
    paddingHorizontal: 20,
  },

  Title: {
    position: 'absolute',
    justifyContent: 'center',
    padding: 0,
    gap: 6,
    left: 100,
    top: 84,
    fontSize: 20,
    fontWeight: 600,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 600,
    color: '#4D8AF0',
    position: 'absolute',
    width: 92,
    height: 30,
    left: 140,
    top: 144
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#F9F9FB',
    borderRadius: 60,
    borderWidth: 1,
    width: 250,
    borderColor: '#4D8AF0',
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#4D8AF0',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {
    color: '#FFF',
    fontSize: 30
  },
});