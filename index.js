import express from "express";
import graphqlHTTP from "express-graphql";
import schema from "./schema";

const app = express();

app.get("/", (req, res) => {
  res.send('Graphql Rocks');
});

const root = {
  hello: () => "Hi i am static resolver"
};

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true
}))

app.listen(8080, () => console.log("Server running on port localhost:8080/graphql"));
