import Hello from "./components/Hello";
import UserCard from "./components/UserCard";
import Counter from "./components/Counter";

export default function Home() {
  return (
    <main className="p-6">
      <Hello />

      {/* Render UserCards */}
      <UserCard name="Alice" role="Frontend Developer" company="Google" />
      <UserCard name="Bob" role="Backend Developer" />
    </main>
  );
}