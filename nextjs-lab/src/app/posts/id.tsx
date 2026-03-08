interface PageProps {
  params: { id: string };
}

export default async function PostPage({ params }: PageProps) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const post = await res.json();

  return (
    <div>
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p>{post.body}</p>
      <p className="text-gray-500">User ID: {post.userId}</p>
      <a href="/posts" className="text-blue-500 mt-2 inline-block">Back to Posts</a>
    </div>
  );
}