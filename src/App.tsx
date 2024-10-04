import styled from 'styled-components';
import FetchRandomUsers from './components/FetchRandomUser';  // Import data fetching component

const Container = styled.div`
  width: 80%;
  margin: auto;
  border: 5px solid lightblue;
  padding: 5%;
`;

export default function App() {
  return (
    <Container>
      <FetchRandomUsers />  {/*\ handle fetching and displaying users */}
    </Container>
  );
}