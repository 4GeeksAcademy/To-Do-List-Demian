import React, { useState } from "react";

const Home = () => {
	const [task, setTask] = useState("");
	const [taskList, setTaskList] = useState([]);

	const addNewTask = (e) => {
		if (e.key === "Enter" && task.trim() !== "") {
			setTaskList((prev) => [...prev, task]);
			setTask("");
		}
	};

	const deleteTask = (taskToDelete) => {
		const newList = taskList.filter((t) => t !== taskToDelete);
		setTaskList(newList);
	};

	return (
		<div className="d-flex justify-content-center min-vh-100 bg-dark">
			<div className="container py-3" style={{ maxWidth: "600px", width: "100%" }}>
				<div className="d-flex justify-content-between align-items-center">
					<h2 className="text-white">Lista de tareas</h2>
					<span className="text-white">{taskList.length} tarea(s) pendiente(s)</span>
				</div>

				<input
					className="form-control mb-3"
					type="text"
					placeholder="Ingrese una nueva tarea."
					value={task}
					onChange={(e) => setTask(e.target.value)}
					onKeyDown={addNewTask}
				/>

				<div className="border rounded p-2 bg-light">
					{taskList.length === 0 && (
						<p className="text-muted">No hay tareas aún.</p>
					)}

					{taskList.map((t, index) => (
						<div
							key={index}
							className="d-flex justify-content-between align-items-center border-bottom py-2"
						>
							<span>{t}</span>
							<button
								className="btn btn-sm btn-outline-danger"
								onClick={() => deleteTask(t)}
							>
								Borrar
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Home;