import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataSuccess, apiDataRequest } from './actions';
import './App.css';

const App = () => {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.data);
	const api = useSelector((state)=>state.api);
	const error = useSelector((state) => state.error);
	const handleAPIData = () => {
		fetch('https://jsonplaceholder.typicode.com/todos/1')
			.then(response => response.json())
			.then(json =>dispatch(apiDataRequest(json)))
		
	};

	return (
		<div className="app-container">
			<h1>Redux  App</h1>
			<div className="data-container">
				{data && data}
			</div>
			<div className="data-container">
               {api && api.title}
			</div>
			<button
				className="fetch-button"
				onClick={() => dispatch(fetchDataSuccess("salman"))}
			>
				Fetch Data
			</button>
			<button
				className="delete-button"
				onClick={handleAPIData}
			>
				Fetch From API Data
			</button>
		</div>
	);
};

export default App;
