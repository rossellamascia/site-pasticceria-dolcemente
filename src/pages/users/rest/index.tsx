import React from 'react';

import { useListUsers } from '../../../apis/rest/endpoints';

export const UserList = () => {
  const { isLoading, error, data } = useListUsers();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  return (
    <ul>
      {data?.data?.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};
