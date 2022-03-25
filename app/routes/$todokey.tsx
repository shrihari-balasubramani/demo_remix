import { json, Link, LoaderFunction, useLoaderData, useParams } from "remix";
import { getAllTodos, getTodoByKey } from "~/server";
import styles from '~/todo.css';

export function links() {
    return [{ rel: "stylesheet", href: styles }];
  }

export const loader: LoaderFunction = async ({request, params }) => {
    if(!params?.todokey){
        throw("no todokey")
    }
    const description = getTodoByKey(params.todokey);
    return json({title: params.todokey ,description})
  }



const TodoDetailsPage =  ()=>{
    const {title, description} = useLoaderData() as {title: string; description: string} ;
    return <div>
        <h5 className="something">{title}</h5>
        <p>{description}</p>
        </div>
}

export default TodoDetailsPage