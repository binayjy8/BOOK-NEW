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

                <label htmlFor="author">Author:</label>
                <br />
                <input
                    id="author"
                    type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    required
                />
                <br />

                <label>Genre (Select all that apply):</label>
                <br />
                {/* Example Checkbox for Genre */}
                <input
                    type="checkbox"
                    id="fiction"
                    name="genre"
                    value="Fiction"
                    checked={formData.genre.includes("Fiction")}
                    onChange={handleChange}
                />
                <label htmlFor="fiction">Fiction</label>
                <input
                    type="checkbox"
                    id="mystery"
                    name="genre"
                    value="Mystery"
                    checked={formData.genre.includes("Mystery")}
                    onChange={handleChange}
                />
                <label>Mystery</label>
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

                <button type="submit">Add Book</button>
            </form>
        </div>
    )
}