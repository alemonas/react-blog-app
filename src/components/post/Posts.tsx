import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, LinearProgress } from '@material-ui/core';
import PostList from './components/PostList';
import Alert from '@material-ui/lab/Alert';

const Posts: React.FC = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchPosts = async (): Promise<void> => {
      try {
        setLoading(true);
        const postsData = await axios.get(
          'https://jsonplaceholder.typicode.com/posts'
        );

        setPosts(postsData.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <Container>
      { isLoading && <LinearProgress />}
      { error && <Alert severity="error">Errro</Alert>}
      { !isLoading && <PostList posts={posts} />}
    </Container>
  );
};

export default Posts;
