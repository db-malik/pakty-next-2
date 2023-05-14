import { useState } from 'react';

export const  setToLocalStorage=(key, value)=> {
  // Get the initial value from local storage or use the initial value provided
  localStorage.setItem(key, JSON.stringify(value));
  }

  // Update local storage when the value changes
export   const getFromLocaStorage = (key) => {
  const storedData = localStorage.getItem(key);
  return storedData ? JSON.parse(storedData) : [];
}
