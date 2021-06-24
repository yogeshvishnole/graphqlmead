const users = [
  {
    id: "1",
    name: "Yogesh",
    email: "yogesh@example.com",
    age: 21,
  },
  {
    id: "2",
    name: "Poornesh",
    email: "poornesh@example.com",
    age: 21,
  },
  {
    id: "3",
    name: "Neha",
    email: "neha@example.com",
  },
];

const posts = [
  {
    id: "1",
    title: "React Fundamentals",
    body: "1.Components,2.Props,3.state,4.hooks,5.lifecycle of components ",
    published: true,
    author: "1",
  },
  {
    id: "2",
    title: "Functional components in react",
    body:
      "In react we can make commponents of ui and functionality in two ways by using  classes or functions , but functions are the best way to share logic",
    published: true,
    author: "1",
  },
  {
    id: "3",
    title: "Hooks in react",
    body:
      "Hooks are the fundamental way to use logic and state in react , there are some hooks provided by react and we can make custom hooks as well.",
    published: true,
    author: "2",
  },
];

const comments = [
  {
    id: "1",
    text: "Very sweet and short intro to hooks. Love you poornesh",
    author: "3",
    post: "1",
  },
  {
    id: "2",
    text: "Great sir thankyou",
    author: "2",
    post: "1",
  },
  {
    id: "3",
    text: "Man knows his thing very well",
    author: "2",
    post: "3",
  },
  {
    id: "4",
    text: "outstanding",
    author: "1",
    post: "2",
  },
];

const db = {
  users,
  posts,
  comments,
};

export { db as default };
