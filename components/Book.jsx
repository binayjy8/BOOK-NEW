import { useState } from "react";
import useFetch from "../useFetch";

const Book = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const { data, loading, error } = useFetch("https://book-chi-indol.vercel.app/books");
    
    const handleDelete = async () => {
        try{

        }catch(error){
            console.log(error);
        }
    }

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