import React, { useState } from "react";
import {View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet,} from 'react-native';
import Tarea from "./Tarea";

const mostrarBotones = ({item, index}) =>(
    <View style={styles.tarea}>
        <Text style={styles.listaItem}>{item}</Text>
        <View style={styles.botones}>
            <TouchableOpacity onPress={()=> editarTarea(index)}>
                <Text style={styles.botonEditar}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> borrarTarea(index)}>
                <Text style={styles.botonBorrar}>Eliminar</Text>
            </TouchableOpacity>
        </View>
    </View>
)

const estructuraLista = () => (
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
)

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
	task: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 15,
		fontSize: 18,
	},
	listaItem: {
		fontSize: 19,
	},
	botones: {
		flexDirection: "row",
	},
	botonEditar: {
		marginRight: 10,
		color: "green",
		fontWeight: "bold",
		fontSize: 18,
	},
	botonBorrar: {
		color: "red",
		fontWeight: "bold",
		fontSize: 18,
	},
});

export default mostrarBotones;