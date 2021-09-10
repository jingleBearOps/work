import React from 'react';


const posts = [
  { id: 1, title: 'icon 1', content: 'information 1' },
  { id: 2, title: 'icon 2', content: 'information 2' }
];
export const Blog = () => {
  const sidebar =
  (
    <ul>
      {posts.map((post) =>
        <li key={post.id}>
          {post.title}
          {post.content}
        </li>
      )}
    </ul>
  );

  return (
    <div>
      {sidebar}
    </div>
  );
};
