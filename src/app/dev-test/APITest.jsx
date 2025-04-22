'use client';
import { Suspense, useEffect, useState } from 'react';

export default function TestList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setData(data))
      .then(() => console.log('Data fetched'))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <h2>Test Area Here</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </Suspense>
    </>
  );
}
