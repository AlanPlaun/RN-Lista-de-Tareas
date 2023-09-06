import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	FlatList,
	StyleSheet,
	Pressable,
	Modal,
	Alert
} from "react-native";
import renderItem from "./Components/Mostrar";
import handleEditTask from "./Components/Editar";
import handleDeleteTask from "./Components/Borrar";

const App = () => {
	const [modalVisible, setModalVisible] = useState(false);
	const [task, setTask] = useState("");
	const [tasks, setTasks] = useState([]);
	const [editIndex, setEditIndex] = useState(-1);

	const handleAddTask = () => {
		if (task) {
			if (editIndex !== -1) {
				// Edit existing task
				const updatedTasks = [...tasks];
				updatedTasks[editIndex] = task;
				setTasks(updatedTasks);
				setEditIndex(-1);
			} else {
				// Add new task
				setTasks([...tasks, task]);
			}
			setTask("");      
			setModalVisible(false); // Cierra el modal al agregar o actualizar la tarea

		}
	};

	return (
		<View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
			<TextInput
	 		style={styles.input}
	 		placeholder="Enter task"
	 		value={task}
				onChangeText={(text) => setTask(text)}
			/>
	 	<TouchableOpacity
				style={styles.addButton}
				onPress={handleAddTask}>
				<Text style={styles.addButtonText}>
					{editIndex !== -1 ? "Update Task" : "Add Task"}
				</Text>
				
			</TouchableOpacity>
			
          </View>
        </View>
      </Modal>	
	  <FlatList
				data={tasks}
				renderItem={renderItem}
				keyExtractor={(item, index) => index.toString()}
			/>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
		// <View style={styles.container}>
		// 	<Text style={styles.heading}>Geeksforgeeks</Text>
		// 	<Text style={styles.title}>ToDo App</Text>
		// 	<Pressable
		// 		style={styles.input}
		// 		placeholder="Enter task"
		// 		value={task}
		// 		onChangeText={(text) => setTask(text)}
		// 	/>
		// 	<TouchableOpacity
		// 		style={styles.addButton}
		// 		onPress={handleAddTask}>
		// 		<Text style={styles.addButtonText}>
		// 			{editIndex !== -1 ? "Update Task" : "Add Task"}
		// 		</Text>
		// 	</TouchableOpacity>
		// 
		// </View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 40,
		marginTop: 40,
	},
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
