import styled from 'styled-components';
import { User } from '../interfaces/User';

const UserListDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background-color: lightblue;
`;

const UserCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 10px;
  border: 2px solid lightcoral;
  border-radius: 10px;
  background-color: white;
  width: 200px;
  text-align: center;
`;

const UserImage = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
`;

const UserName = styled.h2`
  font-size: 1.2em;
  margin: 10px 0;
`;

const UserEmail = styled.p`
  font-size: 0.9em;
  color: gray;
`;

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