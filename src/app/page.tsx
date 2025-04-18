import Link from "next/link";
import { db } from "../db";
export default async function Home() {
  const snippets = await db.snippet.findMany();
  const filterSnippet = snippets?.map((snippet) => {
    return (
      <div
        key={snippet.id}
        className="flex justify-between items-center p-2 border rounded"
      >
        <div>{snippet.title}</div>
        <Link href={`snippets/${snippet.id}`}>View</Link>
      </div>
    );
  });
  return (
    <div className="text-center">
      <div className="p-4 flex flex-row justify-between">
        <h1 className="text-xl font-bold">Snippets</h1>
        <Link className="border p-2 rounded" href={`snippets/new`}>
          New
        </Link>
      </div>
      <div className="flex flex-col gap-2">{filterSnippet}</div>
    </div>
  );
}
