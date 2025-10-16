import Book from "../components/Book";
import BookByTitle from "../components/BookByTitle";
import useFetch from "../useFetch";

export default function App() {
  return (<main> 
    <Book />
    <BookByTitle title="Shoe Dog" />
  </main>)
}