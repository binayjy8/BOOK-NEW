import React, { useState } from "react";

const AddedBookForm = () => {
    const [formDta, setFormData] = useState({
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

    return (
        <div>
            <h2>Add New Book</h2>
            <form>
                <label>Title:</label>
                <input />
            </form>
        </div>
    )
}