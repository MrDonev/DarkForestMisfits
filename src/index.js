import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./Util/FireBase";
import { getAuth } from "firebase/auth";

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
