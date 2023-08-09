import React, { useState } from "react";
import {View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet,} from 'react-native';

const agregarTarea = () => {
    if (tarea) {
        if (editIndex !== -1) {
            // Editar tarea existente
            const actualizarTareas = [...tareas];
            actualizarTareas[editIndex] = tarea;
            setTareas(actualizarTareas);
            setEditIndex(-1);
        } else {
            // Añadir tarea
            setTareas([...tareas, tarea]);
        }
        setTarea("");
    }
};

const editarTarea = (index) => {
    const tareaParaEditar = tarea[index];
    setTarea(tareaParaEditar);
    setEditIndex(index);
};

const eliminarTarea = (index) => {
    const actualizarTareas = [...tareas];
    actualizarTareas.splice(index, 1);
    setTareas(actualizarTareas);
};

export default {agregarTarea, editarTarea, handleDeleteTask};