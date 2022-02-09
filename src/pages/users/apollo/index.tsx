import React from 'react';

import { useUserListQuery } from '../../../apis/graphql';

export const UserList = () => {
  const { loading, error, data } = useUserListQuery();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  return (
    <ul>
      {data?.users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};
