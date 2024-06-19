// actions/index.js 
export const fetchDataSuccess = (data) => ({ 
	type: "FETCH_DATA_SUCCESS", 
	payload: data, 
}); 

export const apiDataRequest = (data) => ({ 
	type: "API_DATA_REQUEST", 
	payload:data
});
