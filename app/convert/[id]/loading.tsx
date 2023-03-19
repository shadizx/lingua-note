import Cube from "./Cube";

export default function loading() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Cube />
      <p className="text-6xl font-semibold p-4 text-slate-200">
        Transcribing...
      </p>
    </div>
  );
}
