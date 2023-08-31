import handleEditTask from "./Editar";
import handleDeleteTask from "./Borrar";

const renderItem = ({ item, index }) => (
    <View style={styles.task}>
        <Text
            style={styles.itemList}>{item}</Text>
        <View
            style={styles.taskButtons}>
            <TouchableOpacity
                onPress={() => handleEditTask(index)}>
                <Text
                    style={styles.editButton}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => handleDeleteTask(index)}>
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