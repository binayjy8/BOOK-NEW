import { useState } from "react";
import useFetch from "../useFetch";

const Book = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const { data, loading, error } = useFetch("https://book-chi-indol.vercel.app/books");
    
    const handleDelete = async (bookId) => {
        try{
            const response = await fetch(`https://book-chi-indol.vercel.app/books/${bookId}`,
                {method: "DELETE"},
            );

            if(!response.ok){
                throw "Failed to delete book";
            }

            const data = await response.json();
            if(data){
                setSuccessMessage("Book deleted successfully");
                window.location.reload();
            }
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