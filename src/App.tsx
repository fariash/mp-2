import { useEffect, useState } from 'react';
import RandomUserList from './components/RandomUserList';
import styled from 'styled-components';
import { User } from './interfaces/User';

const Container = styled.div`
  width: 80vw;
  margin: auto;
  border: 5px solid lightblue;
  padding: 20px;
`;

export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://randomuser.me/api/?results=10');
        const data = await response.json();
        setUsers(data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <Container>
      {loading ? <p>Loading...</p> : <RandomUserList users={users} />}
    </Container>
  );
}