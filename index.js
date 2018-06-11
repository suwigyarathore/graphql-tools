import express from "express";
import graphqlHTTP from "express-graphql";
import schema from "./schema";

const app = express();

app.get("/", (req, res) => {
  res.send('Graphql Rocks');
});

const root = {
  friend: () => ({
    id: '123',
    firstName: 'Suwigya',
    lastName: 'Rathore',
    gender: 'Male',
    language: 'Nederlands',
    email: 'suwi@learndutch.com'
  })
};

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true
}))

app.listen(8080, () => console.log("Server running on port localhost:8080/graphql"));
