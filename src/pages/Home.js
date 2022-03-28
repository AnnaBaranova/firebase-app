import React, { useState, useEffect } from 'react';
import { deleteDoc, getDocs, doc } from 'firebase/firestore';
import { auth, db } from '../firebase-config';
import { collection } from 'firebase/firestore';

function Home({isAuth}) {
  const [postList, setPostList] = useState([]);
  const postCollectionRef = collection(db, 'posts');

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);
      setPostList(data.docs.map(doc => ({...doc.data(), id: doc.id})));
    };
    getPosts();
  }, []);

  const handleDelete = async (id) => {
    const postDoc = doc(db, 'posts', id);
    await deleteDoc(postDoc);
    setPostList(postList.filter(post => post.id !== id));
  };


  return (
    <div className='homePage'>
      <h1>Posts</h1>
      {postList.map(post => (
        <div key={post.id} className='post'>
          <h2 className='postHeader'>{post.title}</h2>
          <div className='deletePost'>
           {isAuth && post.author.id === auth.currentUser.uid && <button onClick={() => handleDelete(post.id)}>&#128465;</button>}
          </div>
          <div className='postTextConatainer'>
          <p>{post.content}</p>
          <h3>@{post.author.name}</h3>
          </div>
    </div>
      ))}
    </div>
  );
}

export default Home;