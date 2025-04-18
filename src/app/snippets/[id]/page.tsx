import { db } from "@/src/db";
import { notFound } from "next/navigation";
interface Props {
  params: {
    id: string;
  };
}
export default async function SnippetShowPage(props: Props) {
  const id = parseInt(props.params.id);
  if (isNaN(id)) {
    return notFound();
  }
  const snippet = await db.snippet.findFirst({
    where: { id },
  });
  if (!snippet) {
    return notFound();
  }
  return <div>{snippet.title}</div>;
}
