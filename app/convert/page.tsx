import InputUrl from "./InputUrl";

export default function home() {
  return (
    <main className="h-screen flex flex-col items-center justify-center w-full">
      <p className="text-6xl p-6 font-medium w-full text-center text-slate-100">
        Enter the youtube URL below
      </p>
      <InputUrl />
    </main>
  );
}
