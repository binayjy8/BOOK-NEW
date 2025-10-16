import useFetch from "../useFetch";

const BookByTitle = (title) => {
    const { data, loading, error } = useFetch(`https://book-chi-indol.vercel.app/api/${title}`) 
}

export default BookByTitle;