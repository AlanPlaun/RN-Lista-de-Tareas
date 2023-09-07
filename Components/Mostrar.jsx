
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const renderItem = (props ) => (
    <View style={styles.task}>
        <Text
            style={styles.itemList}>{props.tareas}</Text>
        <View
            style={styles.taskButtons}>
            <TouchableOpacity
                onPress={() => props.borrar(props.tareas.length)}> 
                {/* SACAR EL ID DEL OBJETO */}
                <Text
                    style={styles.deleteButton}>Delete</Text>
            </TouchableOpacity>
        </View>
    </View>
);

const styles = StyleSheet.create({
    task: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 15,
		fontSize: 18,
	},
    itemList: {
		fontSize: 19,
	},
    taskButtons: {
		flexDirection: "row",
	},
    editButton: {
		marginRight: 10,
		color: "green",
		fontWeight: "bold",
		fontSize: 18,
	},
	deleteButton: {
		color: "red",
		fontWeight: "bold",
		fontSize: 18,
	},
});

export default renderItem;