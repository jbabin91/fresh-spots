import { useEffect, useState } from "preact/hooks";

export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch("/api/users");
      const json = await response.json();
      setUsers(json);
    })();
  }, []);
  return (
    <div class="flex gap-2 w-full">
      <p class="my-6">Client rendered: There are {users.length} users!</p>
    </div>
  );
}
