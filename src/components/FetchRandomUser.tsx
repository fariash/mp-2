import { useEffect, useState } from 'react';
import RandomUserList from './RandomUserList';  // Imports UI component

// Defines User interface
interface User {
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
  };
  location: {
    city: string;
    country: string;
  };
}

export default function FetchRandomUsers() {
  const [users, setUsers] = useState<User[]>([]);  // State to store fetched users
  const [loading, setLoading] = useState(true);    // Loading state

  // Fetch users from RandomUser API
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')  // Fetch 10 users
      .then(response => response.json())
      .then(data => {
        setUsers(data.results);   // Store fetched users in state
        setLoading(false);        // Set loading to false
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setLoading(false);        // Stop loading even if there's an error
      });
  }, []);

  // Render loading state or pass the data to RandomUserList component
  return (
    <div>
      {loading ? (
        <p>Loading...</p>   // Show loading message while data is being fetched
      ) : (
        <RandomUserList users={users} />  // Pass the fetched users to the UI component
      )}
    </div>
  );
}
