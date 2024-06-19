// reducers/index.js 

const initialState = { 
	data: null, 
	api:null,
	error: null, 
}; 

const dataReducer = (state = initialState, action) => { 
	switch (action.type) { 
		case "FETCH_DATA_SUCCESS": 
			return { 
				...state, 
				data: action.payload, 
				error: null, 
			}; 
		case "API_DATA_REQUEST": 
			return { 
				...state, 
				api: action.payload, 
			}; 
		default: 
			return state; 
	} 
}; 

export default dataReducer;
