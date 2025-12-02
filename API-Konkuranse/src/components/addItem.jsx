import { useState } from "react";
import "./CreateItem.css"; // <-- import CSS file

export default function CreateItem() {
    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [year, setYear] = useState("");
    const [status, setStatus] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus("Sending…");

        try {
            const response = await fetch("http://185.7.81.47:3001/api/v1/movies/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title, director, year })
            });

            if (!response.ok) throw new Error();

            setStatus("Movie added successfully!");
            setTitle("");
            setDirector("");
            setYear("");
        } catch (err) {
            setStatus("Something went wrong — try again?");
        }
    }

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h2 className="form-title">Add a New Movie</h2>

            <input
                type="text"
                className="form-input"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />

            <input
                type="text"
                className="form-input"
                placeholder="Director"
                value={director}
                onChange={(e) => setDirector(e.target.value)}
                required
            />

            <input
                type="number"
                className="form-input"
                placeholder="Year"
                value={year}
                onChange={(e) => setYear(parseInt(e.target.value))}
                required
            />

            <button type="submit" className="form-button">
                Add Movie
            </button>

            {status && <div className="form-status">{status}</div>}
        </form>
    );
}
