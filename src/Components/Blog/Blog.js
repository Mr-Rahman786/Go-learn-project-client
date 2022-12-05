import React from 'react';
import Card from 'react-bootstrap/Card';
import './Blog.css'
const Blog = () => {
    return (
        <div className='blog-card text-start'>
            <div>
                <Card className='card-body' border="primary">
                    <Card.Header>Question No : 1</Card.Header>
                    <Card.Body>
                        <Card.Title>What is cors </Card.Title>
                        <Card.Text>
                            Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div>
                <Card className='card-body' border="danger" >
                    <Card.Header>Question No : 2</Card.Header>
                    <Card.Body>
                        <Card.Title>Why we are use firebse ?

                        </Card.Title>
                        <Card.Text>
                            The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div>
                <Card className='card-body' border="secondary" >
                    <Card.Header>Question No : 3</Card.Header>
                    <Card.Body>
                        <Card.Title>How does the private route work</Card.Title>
                        <Card.Text>
                            The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div>
                <Card className='card-body' border="success" >
                    <Card.Header>Question No : 4</Card.Header>
                    <Card.Body>
                        <Card.Title>What is node and how does its works?
                        </Card.Title>
                        <Card.Text>
                            Node. js is an open-source backend javascript runtime environment. It is used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Blog;