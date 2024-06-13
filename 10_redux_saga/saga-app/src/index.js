import React from "react"; 
import ReactDOM from "react-dom/client"; 
import "./index.css"; 
import App from "./App"; 
import { configureStore } from "@reduxjs/toolkit"; 
import { Provider } from "react-redux"; 
import createSagaMiddleware from "redux-saga"; 
import rootReducer from "./reducers"; 
import { watchFetchData } from "./sagas"; 

const sagaMiddleware = createSagaMiddleware(); 

const store = configureStore({ 
	reducer: rootReducer, 
	middleware: (getDefaultMiddleware) => 
		getDefaultMiddleware().concat(sagaMiddleware), 
}); 

sagaMiddleware.run(watchFetchData); 
const root = ReactDOM.createRoot( 
	document.getElementById("root") 
); 
root.render( 
	<Provider store={store}> 
		<React.StrictMode> 
			<App /> 
		</React.StrictMode> 
	</Provider> 
); 

