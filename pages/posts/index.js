import Link from 'next/Link';
import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';

import Layout from "../../components/Layout";

import { fetchPosts } from '../api/postApi';

function Posts({ posts }) {
  return (
    <Layout>
      {posts.map(post => (
        <Fragment key={post.id}>
          <Card className="my-4 shadow">
            <Card.Body>
              <Card.Title>
                {post.title}
              </Card.Title>
              <Card.Text>
                {post.body}
              </Card.Text>
              <Link href={`/posts/${post.id}`} passHref>
                <Card.Link>
                  See more
                </Card.Link>
              </Link>
            </Card.Body>
          </Card>
        </Fragment>
      ))}
    </Layout>
  )
};

export const getStaticProps = async () => {
  const posts = await fetchPosts();

  return { 
    props: { 
      posts
    }
   }
}

export default Posts;
