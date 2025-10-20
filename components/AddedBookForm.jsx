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
                />

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
                <label>Language</label>
                <input
                    type="text"
                    name="language"
                    value={formData.language}
                    onChange={handleChange}
                />
                <label>Country</label>
                <br />
                <input />
                <label>Rating:</label>
                <br />
                <input
                    type="number"
                    name="rating"
                    value={formData.rating}
                    onChange={handleChange}
                />
                <br />

                <button type="submit">Add Book</button>
            </form>
        </div>
    )
}