const user = () => ({ id: '1', userName: 'test' });

const users = () => [
  { id: '1', userName: 'test' },
  { id: '2', userName: 'test1' },
];

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
