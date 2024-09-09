import { StyleSheet, Text, View, FlatList, TextInput, TouchableHighlight } from 'react-native';
import React, { useState } from 'react';
import { Task } from './types';

function App() {

  const [Tasks, setTasks] = useState<Task[]>([]);
  const [taskId, setTaskId] = useState<string>('');
  const [taskName, setTaskName] = useState<string>('');

  const AddTaskOnPress = () => {
    if (taskId && taskName) {
      const newTask: Task = { id: parseInt(taskId), task: taskName };
      setTasks([...Tasks, newTask]);
      setTaskId('');
      setTaskName('');
    }
  };

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.heading}>Welcome to My To-Do List</Text>
      <Text style={styles.personalMessage}>Lets be organised!</Text>
  
      <FlatList
        style={styles.listStyle}
        data={Tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.childView}>
            <Text style={styles.taskNumber}>Task #{item.id}:</Text>
            <Text style={styles.taskName}>{item.task}</Text>
          </View>
        )}
      />
  
      <View style={styles.userInputView}>
        <TextInput
          style={styles.input}
          placeholder='Task id'
          value={taskId}
          onChangeText={setTaskId}
        />
        <TextInput
          style={styles.input}
          placeholder='Task Name'
          value={taskName}
          onChangeText={setTaskName}
        />
  
        <TouchableHighlight onPress={AddTaskOnPress} style={styles.button}>
          <Text style={styles.buttonText}>Add Task</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    backgroundColor: '#0000FF', // blue background
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  heading: {
    marginTop: 60,
    fontSize: 50,
    color: '#000000', // black text
    fontWeight: 'bold',
  },
  personalMessage: {
    fontSize: 25,
    color: '#FFD700', // Gold text
    marginVertical: 10,
  },
  childView: {
    marginVertical: 10,
    backgroundColor: '#F8F8FF', // GhostWhite background for tasks
    padding: 20,
    borderRadius: 10,
  },
  taskNumber: {
    fontSize: 20,
    color: '#00008B', // DarkBlue text
    fontWeight: 'bold',
  },
  taskName: {
    fontSize: 18,
    color: '#000000', // Black text
  },
  userInputView: {
    width: 350,
    height: 200,
    marginVertical: 15,
    backgroundColor: '#4682B4', // SteelBlue background
    padding: 20,
    borderRadius: 10,
    marginTop: 50,
  },
  listStyle: {
    width: '90%',
    marginTop: 20,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    borderRadius: 5,
    color: 'black',
    marginTop: 10,
    fontSize: 18,
  },
  button: {
    backgroundColor: '#FFD700', // Gold button
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 20,
    marginVertical: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFC0CB', // pink text
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
