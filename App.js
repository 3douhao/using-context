import React, { useReducer } from 'react'
import BookList from './BookList'
import BookForm from './BookForm'
import BookContext from './BookContext'

const App = () => {
  const bookReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_BOOK':
        return [...state, action.book]
      case 'REMOVE_BOOK':
        return state.filter(_ => _.id !== action.book.id)
      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(bookReducer, [])
  return (
    <>
      <BookContext.Provider value={{ state, dispatch }}>
        <BookList />
        <BookForm />
      </BookContext.Provider>
    </>
  )
}

export default App
