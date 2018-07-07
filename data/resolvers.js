import mongoose from 'mongoose';
import { Friends, Aliens } from './dbConnector';

export const resolvers = {
  Query: {
    getFriend: (_, { id }) => {
      return new Friend(id, friendDataBase[id]);
    },
    getAliens: () => {
      return Aliens.findAll();
    }
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
    updateFriend: (_, { input }) => {
      return new Promise((resolve, reject) => {
        Friends.findOneAndUpdate(
          {
            _id: input.id
          },
          input,
          {
            new: true
          },
          (err, friend) => {
            if (err)
            {
              reject(err)
            } else
            {
              resolve(friend);
            }
          })
      })
    },
    deleteFriend: (_, { id }) => {
      return new Promise((resolve, reject) => {
        Friends.remove(
          {
            _id: id
          },
          (err) => {
            if (err)
            {
              reject("Delete Unsuccessfull")
            } else
            {
              resolve("Delete Successfull");
            }
          })
      })
    }
  },
};
