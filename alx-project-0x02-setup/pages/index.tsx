import Header from "../components/layout/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <Header />
      <h2 className="mt-8 text-3xl font-semibold text-blue-700">Welcome to alx-project-2!</h2>
      <p className="mt-4 text-lg text-gray-700">Your Next.js + TypeScript + Tailwind CSS project is ready.</p>
    </main>
  );
}
