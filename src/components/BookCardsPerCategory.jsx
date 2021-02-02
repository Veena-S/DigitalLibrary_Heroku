import React, {
  useState, useRef, useLayoutEffect, useEffect,
} from 'react';
import SingleBookCard from './SingleBookCard.jsx';

export default function BookCardsPerCategory({ category, bookList, loggedInUser }) {
  const [seeCompleteList, setSeeCompleteList] = useState(false);
  const [displayList, setDisplayList] = useState([]);
  const [seeMoreLessButtonText, setSeeMoreLessButtonText] = useState('See More');
  const targetRef = useRef();
  const [bookListDimensions, setBookListDimensions] = useState({ width: 0, height: 0 });
  const booksCountPerRow = 6;

  // const [initialListCount, setInitialListCount] = useState(6);

  // useLayoutEffect(() => {
  //   if (targetRef.current) {
  //     setBookListDimensions({
  //       width: targetRef.current.offsetWidth,
  //       height: targetRef.current.offsetHeight,
  //     });
  //     booksCountPerRow = bookListDimensions.width / bookList.length;
  //     booksCountPerRow = (booksCountPerRow > 6) ? 6 : booksCountPerRow;
  //     setInitialListCount((bookList.length > booksCountPerRow)
  //       ? booksCountPerRow : bookList.length);
  //   }
  // }, []);

  const initialListCount = (bookList.length > booksCountPerRow)
    ? booksCountPerRow : bookList.length;
  console.log(initialListCount);

  console.log('BookCardsPerCategory = ', category, bookList);

  const initialListOfBookElements = bookList.slice(0, initialListCount).map((book) => (
    <SingleBookCard book={book} loggedInUser={loggedInUser} />));
  useEffect(() => { setDisplayList([...initialListOfBookElements]); }, []);

  const moreListOfBookElements = bookList.slice(initialListCount).map((book) => (
    <SingleBookCard book={book} loggedInUser={loggedInUser} />));

  const fullListOfBookElements = bookList.map((book) => (
    <SingleBookCard book={book} loggedInUser={loggedInUser} />));

  const handleSeeMoreBooks = () => {
    // Check the see complete list value before modifying
    if (seeCompleteList) {
      setSeeCompleteList(false);
      setDisplayList([...initialListOfBookElements]);
      setSeeMoreLessButtonText('See More');
    }
    else {
      setSeeCompleteList(true);
      setDisplayList([...fullListOfBookElements]);
      setSeeMoreLessButtonText('See Less');
    }
  };

  return (
    <div className="mt-4">
      <div className="row mb-2">
        <div className="col-8">
          <h4>{category}</h4>
        </div>
        <div className="col">
          <button type="button" className="btn btn-sm btn-info" data-bs-toggle="collapse" data-bs-target={`#see-more-books-${category}`} aria-expanded="false" aria-controls={`see-more-books-${category}`} onClick={handleSeeMoreBooks}>{seeMoreLessButtonText}</button>
        </div>
      </div>
      <div ref={targetRef} className={`row vw-100 row-cols-1 row-cols-md-${initialListCount} g-4`}>
        { displayList }
      </div>
      {/* <div ref={targetRef} className={`row vw-100 row-cols-1 row-cols-md-${initialListCount} g-4`}>
        { initialListOfBookElements }
        <div className={`${!seeCompleteList ? 'collapse' : ''} g-4`} id={`see-more-books-${category}`}>
          { (bookList.length > initialListCount)
          && moreListOfBookElements}
        </div>
      </div> */}
      {/* <div className={`${!seeCompleteList ? 'collapse' : ''}`} id={`see-more-books-${category}`}>
        <div className={`row vw-100 row-cols-1 row-cols-md-${initialListCount} g-4`}>
          { (bookList.length > initialListCount)
          && moreListOfBooks}
        </div>
      </div> */}
    </div>
  );
}