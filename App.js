import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Pressable,
  Modal,
  Alert,
} from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage"; // Importa AsyncStorage

import RenderItem from "./Components/Mostrar";
import Modalol from "./Components/Modal";

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  // useEffect(() => {
  //   // Cargar tareas desde AsyncStorage al cargar la aplicación
  //   loadTasks();
  // }, []);

  // const saveTasks = async (tasksToSave) => {
  //   try {
  //     // Guarda las tareas en AsyncStorage como una cadena JSON
  //     await AsyncStorage.setItem("tasks", JSON.stringify(tasksToSave));
  //   } catch (error) {
  //     console.error("Error al guardar las tareas en AsyncStorage: ", error);
  //   }
  // };

  // const loadTasks = async () => {
  //   try {
  //     // Carga las tareas desde AsyncStorage y las convierte de nuevo en un array
  //     const savedTasks = await AsyncStorage.getItem("tasks");
  //     if (savedTasks !== null) {
  //       setTasks(JSON.parse(savedTasks));
  //     }
  //   } catch (error) {
  //     console.error("Error al cargar las tareas desde AsyncStorage: ", error);
  //   }
  // };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    // saveTasks(updatedTasks); // Guarda las tareas actualizadas en AsyncStorage
  };
 
  const handleFinishTask = (index) => {
    return(
      <text style={styles.subrayado}>{index}</text>
    )
    // saveTasks(updatedTasks); Guarda las tareas actualizadas en AsyncStorage
  };

  const handleAddTask = () => {
    if (task) {
      if (editIndex !== -1) {
        const updatedTasks = [...tasks];
        updatedTasks[editIndex] = task;
        setTasks(updatedTasks);
        setEditIndex(-1);
      } else {
        setTasks([...tasks, task]);
      }
      setTask("");
      setModalVisible(false);
      // saveTasks([...tasks, task]); // Guarda las tareas actualizadas en AsyncStorage
    }
  };

  return (
    <View style={styles.centeredView}>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
      <Modalol
        modalState={modalVisible}
        setModalState={setModalVisible}
        tarea={task}
        setTarea={setTask}
        tareas={tasks}
        setTareas={setTasks}
        AnadirTarea={handleAddTask}
        index={editIndex}
        setIndex={setEditIndex}
      />
      {tasks.map((p, index) => (
        <RenderItem
          key={index.toString()}
          item={p}
          borrar={() => handleDeleteTask(index)}
          terminar={() => handleFinishTask(index)}
          alt="Delete"
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 40,
		marginTop: 40,
	},
  negrita: {fontWeight: 'bold'},
    cursiva: {fontStyle: 'italic'},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 20,
	},
	heading: {
		fontSize: 30,
		fontWeight: "bold",
		marginBottom: 7,
		color: "green",
	},
	input: {
		borderWidth: 3,
		borderColor: "#ccc",
		padding: 10,
		marginBottom: 10,
		borderRadius: 10,
		fontSize: 18,
	},
	addButton: {
		backgroundColor: "green",
		padding: 10,
		borderRadius: 5,
		marginBottom: 10,
	},
	addButtonText: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center",
		fontSize: 18,
	},
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 22,
	},
	modalView: {
		margin: 20,
		backgroundColor: 'white',
		borderRadius: 20,
		padding: 35,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2,
	},
	buttonOpen: {
		backgroundColor: '#F194FF',
	},
	buttonClose: {
		backgroundColor: '#2196F3',
	},
	textStyle: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	modalText: {
		marginBottom: 15,
		textAlign: 'center',
	},
});

export default App;
