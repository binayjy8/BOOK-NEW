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
    });
}