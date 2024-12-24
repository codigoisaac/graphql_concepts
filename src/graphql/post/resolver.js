const post = () => ({ id: '1', title: 'test' });

const posts = () => [
  { id: '1', title: 'test' },
  { id: '2', title: 'test1' },
];

export const postResolvers = {
  Query: {
    post,
    posts,
  },
};
