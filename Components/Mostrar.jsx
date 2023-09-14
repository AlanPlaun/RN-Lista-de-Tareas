
import { StyleSheet, View, Text, Pressable, useState} from "react-native";
const RenderItem = (props) => {
    // const [isFinished, setIsFinished] = useState(false);
    function Check({name, isFinished}){
    if (isFinished =true) {
        return <li style={styles.subrayado} className="item">{name} ✔</li>;
    }
    else{
    return <li className="item">{name}</li>;
    }
    }

    return(
    <View style={styles.task}>
        <Check style={styles.itemList}
        name={props.item}
        isFinished={false}
        />
        <View
            style={styles.taskButtons}>
            <Pressable
                onPress={() => props.borrar(props.item.length)}> 
                {/* SACAR EL ID DEL OBJETO */}
                <Text
                    style={styles.deleteButton}>Delete</Text>
            </Pressable>
			<Pressable
                onPress={() => {Check(props.item)}}> 
                <Text
                    style={styles.finishButton}>Completada</Text>
            </Pressable>
        </View>
    </View>
    )
    }

const styles = StyleSheet.create({
    subrayado: {textDecorationLine: 'underline'},

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