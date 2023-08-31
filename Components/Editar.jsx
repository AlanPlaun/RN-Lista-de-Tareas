const handleEditTask = (index) => {
    const [task, setTask] = useState("");
	const [tasks, setTasks] = useState([]);
	const [editIndex, setEditIndex] = useState(-1);

    const taskToEdit = tasks[index];
    setTask(taskToEdit);
    setEditIndex(index);
};

export default handleEditTask;