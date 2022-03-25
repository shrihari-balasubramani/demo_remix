import JSONdb from 'simple-json-db';

export const getTodoByKey = (key: string)=>{
    const db = new JSONdb('/Users/bal0007s/test_Remix/storage.json');
    return db.get(key);
}

export const getAllTodos = ()=>{
    const db = new JSONdb('/Users/bal0007s/test_Remix/storage.json');
    return db.JSON();
}


export const addTodo = (title: string, description: string)=>{
    const db = new JSONdb('/Users/bal0007s/test_Remix/storage.json');
    db.set(title, description);
}