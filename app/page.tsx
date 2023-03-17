import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex flex-wrap items-center justify-center text-slate-300">
      <div className="flex flex-wrap w-full text-center p-0 m-0 justify-center">
        <div className="w-full p-4">
          <p className="text-6xl font-medium w-full p-4">
            Revolutionize your video learning with AI-powered notes.
          </p>
        </div>
        <Link
          className="border rounded-sm px-8 py-2 text-xl font-medium"
          href={"/home"}
        >
          <p>Try now</p>
        </Link>
      </div>
    </main>
  );
}
