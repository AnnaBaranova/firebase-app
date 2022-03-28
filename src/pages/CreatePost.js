import React, {useState, useEffect } from 'react';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { auth, db } from '../firebase-config';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  let navigate = useNavigate();

  const handleSubmit = async () => {
    const postCollectionRef = collection(db, 'posts');
    await addDoc(postCollectionRef, {
      title,
      content,
      createdAt: Timestamp.fromDate(new Date()),
      author: {name: auth.currentUser.displayName, id: auth.currentUser.uid} 
    });
    navigate('/', { replace: true });
  };

  useEffect(() => {
    if (!auth.currentUser) {
      navigate('/login');
    }
  }, []);
  

  return (
    <div className='createPostPage'>
      <div className='cpContainer'>
        <h1>Create a post</h1>
        <div className='inputGp'></div>
        <label>Title</label>
        <input placeholder='Title' onChange={(e) => {setTitle(e.target.value)}}></input>
        <div className='inputGp'></div>
        <label>Content</label>
        <textarea placeholder='Content' onChange={(e) => {setContent(e.target.value)}}></textarea>
        <button className='btn' onClick={handleSubmit}>Create</button>
      </div>
    </div>
  );
};

export default CreatePost;