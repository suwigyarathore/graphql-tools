import mongoose from 'mongoose';
import { Friends } from './dbConnector';

export const resolvers = {
  Query: {
    getFriend: (_, { id }) => {
      return new Friend(id, friendDataBase[id]);
    },
  },

  Mutation: {
    createFriend: (_, { input }) => {
      const newFriend = new Friends({
        ...input
      });

      newFriend.id = newFriend._id;

      return new Promise((resolve, reject) => {
        newFriend.save(((error) => {
          error ? reject(error) : resolve(newFriend);
        }))
      })
    },
  },
};
