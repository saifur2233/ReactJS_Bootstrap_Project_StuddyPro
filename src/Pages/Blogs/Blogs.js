import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

const Blogs = () => {
  return (
    <div>
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>what is `cors`?</Accordion.Header>
        <Accordion.Body>
            <p>
            Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. 
            CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. 
            In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
            </p>
            <p>
                <b>Example:</b><br />
            An example of a cross-origin request: the front-end JavaScript code served from https://domain-a.com uses XMLHttpRequest to make a request for https://domain-b.com/data.json.
            </p>
            <p>
            For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts. For example, XMLHttpRequest and the Fetch API follow the same-origin policy. This means that a web application using those APIs can only request resources from the same origin the application was loaded from unless the response from other origins includes the right CORS headers.
            </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Why are you using `firebase`? What other options do you have to implement authentication?</Accordion.Header>
        <Accordion.Body>
            <p>
            Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. 
            It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
Firebase Authentication integrates tightly with other Firebase services, and it leverages industry standards like OAuth 2.0 and OpenID Connect, so it can be easily integrated with your custom backend.
            </p>
            <p>
            <b>Other options I have to implement aurhentication</b>
            <br />
            useContext Hook
            </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>How does the private route work?</Accordion.Header>
        <Accordion.Body>
        <p>
            Protected routes are those routes that only grant access to authorized users. 
            This means that users must first meet certain conditions before accessing that specific route. For instance, your application can require only logged-in users be able to visit the dashboard page.
            </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
        <Accordion.Body>
<p>
Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices. Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications. Node.js applications are written in JavaScript, and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux.
</p>
<p><b>How does it work?</b></p>
<p>
First of all just like other languages node comes with packages and modules. These are libraries of functions that we can import from npm (node package manager) into our code and utilize. If you have node installed on your computer, then you already have some basic modules installed. These are how we create a simple server, but I’ll get to that later.
If you are familiar with JavaScript, then you know it is asynchronous and single threaded. The single thread is the event loop which is responsible for running all functions and requests. The asynchronous behavior is extremely important when using node, because it guarantees that the event loop is never blocked by a synchronous function.
</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  )
}

export default Blogs