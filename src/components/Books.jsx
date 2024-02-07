import Book from "./Book";

const Books = () => {
  const books = [
    {
      img: "https://m.media-amazon.com/images/I/912fTvsUKLL._AC_UY218_.jpg",
      title: "Iron Flame (The Empyrean Book 2)",
      authors: ["Rebecca Yarros"],
      reviews: "115,386",
      audiobook: "Available",
      price: "$16.79",
      reviewText:
        "“The first year is when some of us lose our lives. The second year is when the rest of us lose our humanity.” —Xaden Riorson",
    },
    {
      img: "https://m.media-amazon.com/images/I/71IQ8lCksdL._AC_UY218_.jpg",
      title: "Outlive: The Science and Art of Longevity",
      authors: ["Peter Attia MD", "Bill Gifford - contributor", "et al."],
      reviews: "11,298",
      audiobook: "Available",
      price: "$16.99",
      reviewText:
        "5.0 out of 5 stars Wonderful mix of facts, sound medical advice, anecdotes and opinions for living a long healthy life",
    },
    {
      img: "https://m.media-amazon.com/images/I/A15A7wamBML._AC_UY218_.jpg",
      title: "Fourth Wing: Empyrean, Book 1",
      authors: ["Rebecca Yarros", "Rebecca Soler", "et al"],
      reviews: "163,702",
      audiobook: "Available",
      price: "$17.22",
      reviewText: "Totally Captivating!!",
    },
    {
      img: "https://m.media-amazon.com/images/I/81h4xinmqmL._AC_UY218_.jpg",
      title: "A Court of Thorns and Roses Paperback Box Set (5 books)",
      authors: ["Sarah J. Maas"],
      reviews: "17,049",
      audiobook: "Available",
      price: "$53.54",
      reviewText: "Great fantasy series, not feminist literature.",
    },
    {
      img: "https://m.media-amazon.com/images/I/81VgwKeq6jL._AC_UY218_.jpg",
      title: "The Heaven & Earth Grocery Store: A Novel",
      authors: ["James McBride", "Dominic Hoffman", "et al."],
      reviews: "27,084",
      audiobook: "Available",
      price: "$16.99",
      reviewText: "Brilliant story -- lives up to all the accolades!",
    },
  ];

  return (
    <>
      {books.map((book) => (
        <Book
          img={book.img}
          title={book.title}
          authors={book.authors}
          audiobook={book.audiobook}
          reviews={book.reviews}
          price={book.price}
        >
          <p>{book.reviewText}</p>
        </Book>
      ))}
    </>
  );
};

export default Books;
