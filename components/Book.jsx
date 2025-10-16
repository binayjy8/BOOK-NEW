import useFetch from "../useFetch";

const Book = () => {

    const { data, loading, error } = useFetch("https://book-chi-indol.vercel.app/books");
    console.log(data);

    return (
        <div>
            <ul>
                {data?.book.map((book) => (
                    <h2>All Books</h2>,
                    <li>{book.title}</li>
                ))}
            </ul>
        </div>
    )
};

export default Book;