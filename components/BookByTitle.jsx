import useFetch from "../useFetch";

const BookByTitle = (title) => {
    const { data, loading, error } = useFetch(`https://book-chi-indol.vercel.app/books/${title}`) 

    return data ? (
        <div>  
            <h2>Title: {data.title}</h2>
            <p>Author: {data.author}</p>
            <p>PublishedYear: {data.publishedYear}</p>
            <p>Language: {data.language}</p>
            <p>Country: {data.country}</p>
        </div>
    ) : (
        loading && <p>Loading...</p>
    )
}

export default BookByTitle;