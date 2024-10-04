import { User } from '../interfaces/User'; 
import styled from 'styled-components';

export const UserListDiv = styled.div` 
  display: flex;  // Arrange the child components in a row
  flex-wrap: wrap; // Wrap child components to the next line if necessary
  justify-content: space-evenly;
  background-color: lightblue;
`;

export const UserCard = styled.div`
  display: flex;
  flex-direction: column; // Stack children vertically
  align-items: center;
  padding: 5%;
  margin: 2%;
  border: 2px solid lightcoral;
  background-color: white;
  text-align: center;
`;

export const UserImage = styled.img`
  border-radius: 50%;
`;

export const UserName = styled.h2`
  font-size: 1.2;
`;

export const UserEmail = styled.p`
  font-size: .5;
  color: gray;
`;

// receives an array of 'users' and renders a list of user cards
export default function RandomUserList({ users }: { users: User[] }) {
  return (
    <UserListDiv>
      {users.map((user, index) => (
        <UserCard key={index}>
          <UserImage src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
          <UserName>
            {user.name.first} {user.name.last}
          </UserName>
          <p>{user.location.city}, {user.location.country}</p>
          <UserEmail>{user.email}</UserEmail>
        </UserCard>
      ))}
    </UserListDiv>
  );
}
