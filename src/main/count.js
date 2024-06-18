import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Context 생성
export const CounterContext = createContext();

// Provider 컴포넌트 생성
export const Count = ({ children }) => {
    let [sumPrice, setSumPrice] = useState(0);

  return (
    <CounterContext.Provider value={{ sumPrice, setSumPrice }}>
      {children}
    </CounterContext.Provider>
  );
};