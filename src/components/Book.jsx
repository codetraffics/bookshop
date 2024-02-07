const Book = ({ img, title, authors, reviews, audiobook, price, children }) => {
  return (
    <section>
      <img src={img} alt={title} />
      <h1>{title}</h1>
      <p>Authors: {authors}</p>
      <p>Audiobook: {audiobook}</p>
      <ul>
        <li>Number of reviews: {reviews}</li>
        <li>Price: {price}</li>
      </ul>
      {children}
      <hr />
    </section>
  );
};

export default Book;
