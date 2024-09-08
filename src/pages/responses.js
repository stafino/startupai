import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Responses() {
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    const fetchResponses = async () => {
      const res = await axios.get('/api/typeform-responses');
      setResponses(res.data.items);
    };
    fetchResponses();
  }, []);

  return (
    <div>
      <h1>Typeform Responses</h1>
      <ul>
        {responses.map((response, index) => (
          <li key={index}>
            {/* Display response data as needed */}
            {JSON.stringify(response)}
          </li>
        ))}
      </ul>
    </div>
  );
}