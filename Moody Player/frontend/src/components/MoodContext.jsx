import React, { createContext, useContext, useState, useMemo } from 'react';

const MoodStateContext = createContext();

export function MoodProvider({ children }) {
  // The initial mood is now 'idle' to create a distinct starting state.
  const [mood, setMood] = useState('idle');
  const [confidence, setConfidence] = useState(0);
  const [status, setStatus] = useState('Ready to begin detection.');

  const value = useMemo(() => ({
    mood,
    setMood,
    confidence,
    setConfidence,
    status,
    setStatus
  }), [mood, confidence, status]);

  return (
    <MoodStateContext.Provider value={value}>
      {children}
    </MoodStateContext.Provider>
  );
}

export function useMood() {
  const context = useContext(MoodStateContext);
  if (context === undefined) {
    throw new Error('useMood must be used within a MoodProvider');
  }
  return context;
}
