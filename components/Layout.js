import Head from 'next/head';
import Link from 'next/Link';
import { Nav, Navbar, Container } from 'react-bootstrap';

export default function Layout({ children }) {
  return (
    <Container>
      <Head>
        <title>My Next App</title>
        <meta charset="UTF-8" />
        <meta name="description" content="Free Web tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="author" content="John Doe" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <header>
        <Navbar bg='dark' variant='dark'>
          <Container>
            <Link href="/">
              <Navbar.Brand>My Next App</Navbar.Brand>
            </Link>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link href="/posts" passHref>
                  <Nav.Link>Post</Nav.Link>
                </Link>
                <Link href="/jokes/random" passHref>
                  <Nav.Link>Jokes</Nav.Link>
                </Link>
                <Link href="/about" passHref>
                  <Nav.Link>About</Nav.Link>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar> 
      </header>
      <br />
      <main>
        {children}
      </main>
    </Container>
  )
}