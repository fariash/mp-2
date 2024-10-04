import { User } from '../interfaces/User';
import { UserListDiv, UserCard, UserImage, UserName, UserEmail } from './UserStyle';



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