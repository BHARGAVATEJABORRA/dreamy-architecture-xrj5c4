import React, { useEffect, useState } from "react";

const FLAG_URL =
  "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/706174";

export default function App() {
  const [letters, setLetters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch(FLAG_URL)
      .then((res) => res.text())
      .then((text) => {
        const cleaned = text.replace(/[^a-zA-Z]/g, "");
        setLetters(cleaned.split(""));
      })
      .catch((err) => {
        console.error("Error fetching flag:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!loading && index < letters.length) {
      const timeout = setTimeout(() => setIndex(index + 1), 500);
      return () => clearTimeout(timeout);
    }
  }, [loading, index, letters]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {letters.slice(0, index).map((char, i) => (
        <li key={i}>{char}</li>
      ))}
    </ul>
  );
}

