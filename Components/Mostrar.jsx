
import { StyleSheet, View, Text, Pressable } from "react-native";

const RenderItem = (props) => (
    <View style={styles.task}>
        <Text
            style={styles.itemList}>{props.item}</Text>
        <View
            style={styles.taskButtons}>
            <Pressable
                onPress={() => props.borrar(props.item.length)}> 
                {/* SACAR EL ID DEL OBJETO */}
                <Text
                    style={styles.deleteButton}>Delete</Text>
            </Pressable>
			<Pressable
                onPress={() => props.terminar(props.item.length)}> 
                {/* SACAR EL ID DEL OBJETO ssssssssss*/}
                <Text
                    style={styles.finishButton}>Completada</Text>
            </Pressable>
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
    finishButton:{
        color:"green",
        fontWeight: "bold",
		fontSize: 18,
    }
});

export default RenderItem;