import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	FlatList,
	StyleSheet,
} from "react-native";
import renderItem from "./Components/Mostrar";

const App = () => {
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
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.heading}>Geeksforgeeks</Text>
			<Text style={styles.title}>ToDo App</Text>
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
			<FlatList
				data={tasks}
				renderItem={renderItem}
				keyExtractor={(item, index) => index.toString()}
			/>
		</View>
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
});

export default App;
