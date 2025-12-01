import { useEffect, useState } from "react";
import "./fetchitem.css"; // <-- import the CSS

export default function ItemFetcher() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("http://185.7.81.47:3001/api/v1/movies/");
                const data = await response.json();
                setItems(data.data);
            } catch (err) {
                setError("Uh-oh, something went wrong!");
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    if (loading)
        return (
            <div className="loader-container">
                <div className="loader"></div>
                <span>Loading movies…</span>
            </div>
        );

    if (error)
        return <div className="error-message">{error}</div>;

    return (
        <div className="movies-grid">
            {items.map((item, i) => (
                <div key={i} className="movie-card">
                    <h3 className="movie-title">{item.title}</h3>
                    <p className="movie-info">🎬 Director: <strong>{item.director}</strong></p>
                    <p className="movie-year">📅 {item.year}</p>
                </div>
            ))}
        </div>
    );
}
