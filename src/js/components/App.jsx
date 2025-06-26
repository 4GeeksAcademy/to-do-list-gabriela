import React, { useState } from "react";
import Appname from "./Appname";
import '../../styles/index.css'; 

const App = () => {
	const [tasks, setTasks] = useState([]);
	const [userInput, setUserInput] = useState('');

	const handleKeyUp = (e) => {
		if (e.key === 'Enter' && userInput.trim() !== '') {
			setTasks([...tasks, userInput.trim()]);
			setUserInput('');
		}
	};

	const handleDelete = (indexToDelete) => {
		setTasks(tasks.filter((_, index) => index !== indexToDelete));
	};



	return (
		<div className="App">
			<Appname />
			<div>
				<input 
					type="text"
					value={userInput}
					onChange={(e) => setUserInput(e.target.value)}
					onKeyUp={handleKeyUp}
					placeholder="What needs to be done?"
				/>
				<ul id="tasksDisplay">
					{tasks.map((task, index) => (
						<li key={index} className="task-item">
							<span>{task}</span>
							<i
								className="fas fa-trash"
								onClick={() => handleDelete(index)}
							></i>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default App;