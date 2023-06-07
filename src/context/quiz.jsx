import { createContext } from 'react';

export const QuizContext = createContext()

export const QuizProvider = ({ children }) => {

  const value = {name: "Nostalgia Quiz"}

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}
