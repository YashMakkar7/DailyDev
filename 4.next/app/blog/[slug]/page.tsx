import axios from "axios";

interface Todo {
   userId: number;
   id: number;
   title: string;
   completed: boolean;
}

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
   const postId = (await params).slug;
   const response = await axios.get<Todo>(`https://jsonplaceholder.typicode.com/todos/${postId}`);
   const data = response.data;

   return (
      <div className="flex w-screen h-screen justify-center items-center">
         <div className="border p-2 rounded">
            <h1>Blog Post {postId}</h1>
            <p>Title: {data.title}</p>
            <p>Status: {data.completed ? "Completed" : "Pending"}</p>
         </div>
      </div>
   );
}
