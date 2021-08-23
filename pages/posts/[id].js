import React from 'react';
import Link from 'next/Link';
import { Card, Button } from "react-bootstrap";

import Layout from "../../components/Layout";

import { fetchPostByIds, fetchPostById } from '../api/postApi';

function PostDetail({ post }) {
  return (
    <Layout>
      <Card className="my-4 shadow">
        <Card.Body>
          <Card.Title>
            {post.title}
          </Card.Title>
          <Card.Text>
            {post.body}
          </Card.Text>
          <Link href={`/posts`} passHref>
            <Button variant="dark">Back</Button>
          </Link>
        </Card.Body>
      </Card>
    </Layout>
  )
}

// usage when get static value and depend on path params
export const getStaticPaths = async () => {
  const paths = await fetchPostByIds();
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const post = await fetchPostById(params.id);
  return { 
    props: { 
      post
    }
   }
}


export default PostDetail;
