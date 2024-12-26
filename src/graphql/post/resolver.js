const post = async (_, { id }, { getPosts }) => {
  const response = await getPosts(id);
  const post = await response.json();

  if (!post.id) return { statusCode: 404, message: 'Post not found' };
  return post;
};

const posts = async (_, { input }, { getPosts }) => {
  const apiFiltersInput = new URLSearchParams(input);

  const posts = await getPosts(`?${apiFiltersInput}`);

  return posts.json();
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },

  Post: {
    unixTimestamp: ({ createdAt }) =>
      Math.floor(new Date(createdAt).getTime() / 1000),
  },

  PostResult: {
    __resolveType(obj) {
      return obj.id ? 'Post' : obj.statusCode ? 'PostNotFoundError' : null;
    },
  },
};
