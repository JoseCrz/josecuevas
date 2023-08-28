import { Inconsolata } from "next/font/google";
import { FaGithubSquare } from "react-icons/fa";

const inconsolata = Inconsolata({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center sm:p-6 md:p-24 ${inconsolata.className}`}
    >
      <h1 className="text-6xl text-blue-800">José Cuevas</h1>
      <p>I&apos;ll put something here eventually.</p>
      <a
        href="https://github.com/JoseCrz"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-12 text-2xl hover:text-blue-900"
      >
        <FaGithubSquare />
      </a>
    </main>
  );
}
