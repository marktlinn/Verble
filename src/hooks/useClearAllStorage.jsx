import React from "react";
import { useState, useEffect } from "react";

const useClearAllStorage = () => {
  const clearAllStorage = () => {
    return localStorage.clear();
  };
  return { clearAllStorage };
};

export default useClearAllStorage;
