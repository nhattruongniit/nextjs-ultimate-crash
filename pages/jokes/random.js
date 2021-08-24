import React from 'react';
import Link from 'next/Link';
import { Card, Button } from "react-bootstrap";

import Layout from '../../components/Layout';

// apis
import { fetchRandomJoke } from '../api/jokeApi';

function Random({ joke }) {
  return (
    <Layout>
      <Card className="my-4 shadow">
        <Card.Body>
          <Card.Text>
            <img src={joke.icon_url} alt="Icon" />
            <br />
            {joke.value}
          </Card.Text>
          <Link href="/" passHref>
            <Button variant="dark">Back</Button>
          </Link>
        </Card.Body>
      </Card>
    </Layout>
  )
}

// usage when get value that depend on each request
export const getServerSideProps = async () => {
  const joke = await fetchRandomJoke();
  return {
    props: {
      joke
    }
  }
}

export default Random;
