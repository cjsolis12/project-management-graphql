const express = require('express');
require('dotenv').config();
const {graphqlHTTP} = require('express-graphql');
const schema = require('../schema/schema')
const port = process.env.PORT || 5000;
const connectDB = require('./config/db')

const app = express();

// Connect to MongoDB
connectDB()
app.use(
    '/graphql',
    graphqlHTTP({
        schema: schema,
        graphiql: true,
    })
  );

app.listen(port, console.log(`server running on port http://localhost:${port}/graphql`))