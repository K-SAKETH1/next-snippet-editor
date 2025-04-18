import { db } from "@/src/db";
import { redirect } from "next/navigation";
export default function CreateSnippet() {
  async function CreateSnippetForm(formdata: FormData) {
    //This needs to be a server action
    "use server";
    //chect the users input and make sure they are valid
    const title = formdata.get("title") as string;
    const code = formdata.get("code") as string;
    //create a new record in database
    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });
    console.log(snippet);
    //redirect the user back to the root route
    redirect("/");
  }
  return (
    <form action={CreateSnippetForm}>
      <h2 className="font-bold m-3">Create Snippet</h2>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input
            name="title"
            className="border rounded p-2 w-full"
            id="title"
          />
        </div>
        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <textarea
            name="code"
            className="border rounded p-2 w-full"
            id="code "
          />
        </div>
        <button type="submit" className="rounded p-2 bg-blue-200 text-black">
          Create
        </button>
      </div>
    </form>
  );
}
