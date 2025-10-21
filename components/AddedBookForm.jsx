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
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                />
                <br />

                <label>Author:</label>
                <br />
                <input
                    type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                />
                <br />

                <label>Genre:</label>
                <br />
                <input
                    type="checkbox"
                    name="genre"
                    value={formData.genre}
                    onChange={handleChange}
                />
                <br />
                <label>Language</label>
                <br />
                <input
                    type="text"
                    name="language"
                    value={formData.language}
                    onChange={handleChange}
                />
                <br />
                <label>Country</label>
                <br />
                <input 
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                />
                <br />
                <label>Rating:</label>
                <br />
                <input
                    type="number"
                    name="rating"
                    value={formData.rating}
                    onChange={handleChange}
                />
                <br />
                <label>Summary:</label>
                <br />
                <input 
                    type="text"
                    name="summary"
                    value={formData.summary}
                    onChange={handleChange}
                />
                <br />
                <br />
                <label>CoverImageUrl</label>
                <br />
                <input 
                    type="url"
                    name="coverImageUrl"
                    value={formData.coverImageUrl}
                    onChange={handleChange}
                />

                <button type="submit">Add Book</button>
            </form>
        </div>
    )
}

export default AddedBookForm;