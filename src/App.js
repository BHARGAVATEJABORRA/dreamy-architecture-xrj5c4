import React, { useEffect, useState } from "react";

const FLAG_URL =
  "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/706174";

export default function App() {
  const [flag, setFlag] = useState("");
  const [displayed, setDisplayed] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(FLAG_URL)
      .then((res) => res.text())
      .then((text) => {
        const cleaned = text.replace(/<[^>]+>/g, "").trim();
        setFlag(cleaned);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching flag:", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!loading && flag) {
      let i = 0;
      setDisplayed([]); // clear previous run
      const interval = setInterval(() => {
        setDisplayed((prev) => [...prev, flag[i]]);
        i++;
        if (i >= flag.length) clearInterval(interval);
      }, 500);
    }
  }, [flag, loading]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {displayed.map((char, index) => (
            <li key={index}>{char}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
