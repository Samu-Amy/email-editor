import { Button } from "@/components/ui/button";
import Link from "next/link";

// TODO: metti una spiegazione sull'utilizzo e come usare il file esportato

const Home = () => {
  return (
    <main className="min-h-screen flex flex-col gap-2 justify-center items-center p-24">
      <h1>Home page</h1>
      <Button asChild>
        <Link href="/editor">Get started</Link>
      </Button>
    </main>
  );
}

export default Home;
