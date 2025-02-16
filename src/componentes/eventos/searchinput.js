import React, { useState, useEffect } from 'react';
import useDebounce from './useDebounce';
import styles from './searchimput.module.css'

const Searchinput = ({ value, onChange }) => {
  const [displayValue, setDisplayValue] = useState(value); 
  const debouncedChange = useDebounce(onChange, 500); 

  useEffect(() => {
    setDisplayValue(value); 
  }, [value]);

  function handleChange(event) {
    const newValue = event.target.value;  
    setDisplayValue(newValue); 
    debouncedChange(newValue);   
  }

  return (
    <input className={styles.input}
      type="search"
      placeholder="Search..."
      value={displayValue} 
      onChange={handleChange} 
    />
  );
};

export default Searchinput;
