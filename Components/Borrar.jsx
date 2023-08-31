const handleDeleteTask = (index) => {
    const [task, setTask] = useState("");
	const [tasks, setTasks] = useState([]);
	const [editIndex, setEditIndex] = useState(-1);

    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
};

export default handleDeleteTask