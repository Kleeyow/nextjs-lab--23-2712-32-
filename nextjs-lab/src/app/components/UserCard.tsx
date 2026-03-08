interface UserCardProps {
  name: string;
  role: string;
  company?: string;
}

export default function UserCard({ name, role, company }: UserCardProps) {
  const companyName = company ?? "Independent";

  return (
    <div className="border p-4 rounded shadow mt-4">
      <h2 className="font-bold">{name}</h2>
      <p>{role}</p>
      <p className="text-gray-500 text-sm">{companyName}</p>
    </div>
  );
}