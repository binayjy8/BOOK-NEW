import useFetch from "../useFetch";

const Book = () => {

    const { data, loading, error } = useFetch("https://book-chi-indol.vercel.app/books");
    console.log(data);

    return (
        <div>
            <ul>
                {data?.map((book) => (
                    <li>{book.name}</li>
                ))}
            </ul>
        </div>
    )
};

export default Hotels;