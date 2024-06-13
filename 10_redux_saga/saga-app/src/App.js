import React, { useEffect } from "react"; 
import { useDispatch, useSelector } from "react-redux"; 
import {fetchDataRequest,deleteDataRequest} from './actions';
import './App.css';

const App = () => { 
	const dispatch = useDispatch(); 
	const data = useSelector((state) => state.data); 
	const error = useSelector((state) => state.error); 

	useEffect(() => { 
		dispatch(fetchDataRequest()); 
	}, [dispatch]); 

	const handleDeleteData = () => { 
		dispatch(deleteDataRequest()); 
	}; 

	return ( 
		<div className="app-container"> 
			<h1>Redux Saga App</h1> 
			<div className="data-container"> 
				{data ? ( 
					<div className="data"> 
						{JSON.stringify(data)} 
					</div> 
				) : ( 
					<div className="loading"> 
						{error 
							? `Error: ${error}` 
							: "Loading data..."} 
					</div> 
				)} 
			</div> 
			<button 
				className="fetch-button"
				onClick={() => dispatch(fetchDataRequest())} 
			> 
				Fetch Data 
			</button> 
			<button 
				className="delete-button"
				onClick={handleDeleteData} 
			> 
				Delete Data 
			</button> 
		</div> 
	); 
}; 

export default App;
