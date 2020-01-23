import React from 'react';
import { GridListTile, GridList, makeStyles } from '@material-ui/core';
import PostCard from './PostCard';

interface Props {
  posts: any;
}

const useSytles = makeStyles(() => ({
  root: {
    display: 'flex',
    backgroundColor: 'red',
  },
  gridList: {
    width: 500,
    height: 499,
  },
  gridListTitle: {
    backgroundColor: '#ccc'
  },
}));

const PostList = (props: Props) => {
  const { posts } = props;
  const classes = useSytles();

  const postsRender = posts.map((post: any) => (
    <GridListTile
      key={post.id}
      className={classes.gridListTitle}
      style={{ height: 'auto' }}
    >
      <PostCard title={post.title} body={post.body} />
    </GridListTile>
  ));

  return (
    <GridList cellHeight={160} cols={3} spacing={3}>
      {postsRender}
    </GridList>
  );
};

export default PostList;
