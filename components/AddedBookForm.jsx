import React, { useState } from "react";

const AddedBookForm = () => {
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        publishedYear: "",
        genre: [],
        language: "",
        country: "",
        rating: "",
        summary: "",
        coverImageUrl: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevState) => ({
            ...prevState,
            [name]:
                name === "publishedYear" || name === "rating" ? parseInt(value) : value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault()
        try{
            const response = await fetch("https://book-chi-indol.vercel.app/books",

              {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                }
            );

            if(!response.ok){
                throw "Failed to add hotel";
            }

            const data = await response.json();

            console.log("Added Book", data);

        }catch(error){
            console.log(error);
        }
    }

    return (
        <div>
            <h2>Add New Book</h2>
            <form>
                <label>Title:</label>
                <br />
                <input 
                    type="text"
                    name="name"
                    value={formData.title}
                    onChange={handleSubmit}
                />

                <label>Author:</label>
                <br />
                <input
                    type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleSubmit}
                />
                <br />

                <label>Genre:</label>
                <br />
                <input
                    type="checkbox"
                    name="genre"
                    value={formData.genre}
                    onChange={handleSubmit}
                />
                <label>Language</label>
                <input
                    type="text"
                    name="language"
                    value={formData.language}
                    onChange={handleSubmit}
                />
                <label>Country</label>
                <br />
                <input 
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleSubmit}
                />
                <label>Rating:</label>
                <br />
                <input
                    type="number"
                    name="rating"
                    value={formData.rating}
                    onChange={handleSubmit}
                />
                <br />
                <label>Summary:</label>
                <br />
                <input 
                    type="text"
                    name="summary"
                    value={formData.summary}
                    onChange={handleSubmit}
                />
                <br />
                <br />
                <label>CoverImageUrl</label>
                <br />
                <input 
                    type="url"
                    name="coverImageUrl"
                    value={formData.coverImageUrl}
                    onChange={handleSubmit}
                />

                <button type="submit">Add Book</button>
            </form>
        </div>
    )
}

export default AddedBookForm;