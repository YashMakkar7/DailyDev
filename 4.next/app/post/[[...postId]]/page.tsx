
export default async function Posts({params}:{
    params:Promise<{
        postId : string[]
    }>
}){
    const posts = (await params).postId
    console.log(posts)
    return <div>
        post page content {JSON.stringify(posts) === undefined ? "this is the post page handeled by catch all segment ": JSON.stringify(posts)}
        
    </div>
}