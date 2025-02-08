// This is a Server Component by default in Next.js 15
async function getUsers() {
  const res = await fetch('http://backend:4000/users', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store', // Ensures fresh data (use 'force-cache' for static generation)
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch users');
  }
  
  return res.json();
}

export default async function Home() {
  const users = await getUsers();
  
  return (
      <div>
        <h1>Users List</h1>
        <ul>
          {users.map((user: { id: number; name: string }) => (
              <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
  );
}
