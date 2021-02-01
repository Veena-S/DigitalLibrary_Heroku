import React from 'react';
import BookCardsPerCategory from './BookCardsPerCategory.jsx';

export default function BookCards({ booksPerCategory, loggedInUser }) {
  const listPerCategoryBookElements = Object.keys(booksPerCategory).map((category) => (
    <BookCardsPerCategory
      category={category}
      bookList={[...booksPerCategory[category]]}
      loggedInUser={loggedInUser}
    />
  ));

  return (
    <div>
      {listPerCategoryBookElements}
    </div>
  );
}
