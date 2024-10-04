import styled from 'styled-components';

export const UserListDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background-color: lightblue;
`;

export const UserCard = styled.div`
  display: flex;
  flex-direction: column;
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
