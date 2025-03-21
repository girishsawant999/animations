import Link from "next/link";

export default function Home() {
  return (
    <main className="columns-2xs pt-16 min-h-screen space-4">
      <div className="aspect-square rounded-lg  bg-red-200 p-4 text-neutral-800">
        <h2>Text Gooey Effect</h2>
        <Link href="/gooey-text" className="text-indigo-600 hover:bg-white">
          View Animation
        </Link>
      </div>
      <div className="aspect-square rounded-lg  bg-green-200">Test</div>
      <div className="aspect-square rounded-lg  bg-indigo-200">Test</div>
      <div className="aspect-square rounded-lg  bg-yellow-200">Test</div>
    </main>
  );
}
