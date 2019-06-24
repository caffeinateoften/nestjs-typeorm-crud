import { polls } from './poll.seed';

export const seedPolls = async () => {
    const dbConnection = await '' /* createTypeormConnection(); // Try to mimick the way knex repo establishes a connection ... */
    const promises = posts.map((post: any) => {
      return dbConnection.createQueryBuilder().insert().into('Post').values(post).execute();
    });
    await Promise.all(promises); // or in my case I run them sequentially by chaining the promises
  };