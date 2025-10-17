import useFetch from "../useFetch";

const Book = () => {

    const { data, loading, error } = useFetch("https://book-chi-indol.vercel.app/books");
    console.log(data);

    return (
        <div>
            <h2>All Books</h2>
            <ul>
                {data?.book.map((book) => (
                    <li>{book.title}</li>
                ))}
            </ul>
        </div>
    )
};

export default Book;