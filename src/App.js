import "./App.css";
import React, { useState } from "react";
import { useForm } from "./useForm";

function App() {
  const [values, handleChange] = useForm({ email: "", password: "" });

  return (
    <div className="App">
      <input name="email" value={values.email} onChange={handleChange} />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />

      <h1> Hello! {values.email}
    </h1>
    
    </div>

  );
}

export default App;
