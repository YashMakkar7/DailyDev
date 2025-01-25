import axios from "axios"
const getBlogs = async() => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/');
    return response.data;
}
interface cardI {
    title: string,
    completed: boolean,
};

const CardComponent = ({ title, completed }: cardI) => {
    return <div className="mb-1">
        <div className="text-white text-lg">{title}</div>
        <div className={`text-md ${completed ? "text-green-500" : "text-red-500"}`}>
                {completed ? "Completed" : "Not Completed"}
        </div>
    </div>
}

export default async function Blogs(){
    const blogs = await getBlogs();
    return <div>
        {blogs.map((blog: cardI) => <CardComponent title={blog.title} completed={blog.completed} />)}
        </div>
}