import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    FlatList,
    StyleSheet,
    Pressable,
    Modal,
    Alert
} from "react-native";
import renderItem from "./Mostrar";

const Modalol = (props) => {
    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.modalState}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    props.setModalState(!props.modalState);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter task"
                            value={props.tarea}
                            onChangeText={(text) => props.setTarea(text)}
                        />
                        <Pressable
                            style={styles.addButton}
                            onPress={props.AnadirTarea}>
                            <Text style={styles.addButtonText}>
                                {props.editIndex !== -1 ? "Update Task" : "Add Task"}
                            </Text>
                        </Pressable>

                    </View>
                </View>
            </Modal>
            {/* 
            data tiene que volver a app.js y app tiene mapear los datos y mandarlos a renderItem por props 
            <FlatList
                data={props.tareas}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            /> */}
        </View>
        )

}

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

export default Modalol;