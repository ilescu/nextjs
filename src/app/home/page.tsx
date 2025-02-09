'use client'; // This is required for Client Components

import { useEffect, useState } from 'react';

export default function Users() {
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch('https://xmuteam.com/api/users?page=1&limit=10', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
        .then((response) => response.json())
        .then((data) => {
          setUsers(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching users:', error);
          setLoading(false);
        });
  }, []);
  
  console.log(users);
  
  if (loading) return <p>Loading...</p>;
  
  return (
      <div>
        <h1>Users List update! zzzzzzzzasklmdlaksmdlakmsdlkams</h1>
        <ul>
          {users.map((user) => (
              <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
  );
}
