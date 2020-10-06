import React, { useContext } from 'react'
import BookContext from './BookContext'

const BookList = () => {
  const { state: books, dispatch } = useContext(BookContext)
  if (books.length) {
    return (
      <ul>
        {books.map(_ => {
          return (
            <li
              key={_.id}
              onClick={() =>
                dispatch({ type: 'REMOVE_BOOK', book: { id: _.id } })
              }
            >
              {_.title}, the id is {_.id}
            </li>
          )
        })}
      </ul>
    )
  } else {
    return <h3>No books available</h3>
  }
}
export default BookList
