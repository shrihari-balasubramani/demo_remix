import { useRef } from "react";
import { ActionFunction, Form, json, Link, LoaderFunction, redirect, useLoaderData } from "remix";
import { addTodo, getAllTodos } from "~/server";

export const loader: LoaderFunction = async ({request, params }) => {
  const data = getAllTodos();
  return json(data)
}

export const action: ActionFunction = async ({ request, params }) => {
  const formData = await request.formData();
  const title = formData.get("title");
  const description = formData.get("description");
  if(typeof title ==='string' && typeof  description  ==='string'){
    addTodo(title,description);
  }
  return redirect('/')
};


export default function Index() {
  const data = useLoaderData() as Record<string, string> ;
  const ref = useRef<HTMLFormElement>(null);
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Link to='another'>another</Link>
      Todos:
      <ol>
      {
        data && Object.keys(data).map(eachKey => 
        <li key={eachKey}>
        <Link to={eachKey}>
          <h5>{eachKey}</h5>
        </Link>
        </li>)
      }
      </ol>
      <Form method="post" ref={ref}>
        <label>title:
        <input type="text" name="title" />
        </label>
        <label>description:
        <textarea name="description" />
        </label>
        <input type="submit" />
        <input type="reset"/>
      </Form>
    </div>
  );
}
