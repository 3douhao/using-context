import React, { useState, useContext } from 'react'
import BookContext from './BookContext'
import { v1 as uuid } from 'uuid'

const BookForm = () => {
  const { dispatch } = useContext(BookContext)
  const [title, setTitle] = useState('')
  const [name, setName] = useState('')

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        dispatch({
          type: 'ADD_BOOK',
          book: { id: uuid(), title, name }
        })
        setTitle('')
        setName('')
      }}
    >
      <input
        type='text'
        placeholder='Name of the book'
        onChange={e => setTitle(e.target.value)}
        value={title}
      />
      <input
        type='text'
        placeholder='Name of the author'
        onChange={e => setName(e.target.value)}
        value={name}
      />
      <button>Add a book</button>
    </form>
  )
}

export default BookForm
