import React, { useEffect } from "react"; 
import { useDispatch, useSelector } from "react-redux"; 
import {fetchDataRequest} from './actions';
import './App.css';

const App = () => { 
	const dispatch = useDispatch(); 
	const data = useSelector((state) => state.data); 
	
	useEffect(() => { 
		dispatch(fetchDataRequest()); 
	}, [dispatch]); 

	return ( 
		<div className="app-container"> 
			<h1>Redux Saga App</h1> 
			<div className="data-container"> 
				{data && ( 
					<div className="data"> 
						{JSON.stringify(data)} 
					</div> 
				)} 
			</div> 
		</div> 
	); 
}; 

export default App;
