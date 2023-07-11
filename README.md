MERN stack

-> client side of the project using vide and react js and used tailwind css for styling

-> yarn create vite

-> created a register.jsx file for register login page.

-> TO send this info to our api, we need to first create our api endpoint. Client is our react app. Api directory will have our express app so all database connections.

-> When we click register , we can send info to our api and we can create user inside the database.

-> We create our express app in api > index.js. 

-> We create a server in index.js of API and create a database in mongodb atlas(mongoURL).

-> Mongoose.js connects your MongoDB clusters or collections with your Node.js app. It enables you to create schemas for your documents. Mongoose provides a lot of functionality when creating and working with schemas. MongoDB is one of the most widely used No-SQL databases in the developer world today. No-SQL databases allow developers to send and retrieve data as JSON documents, instead of SQL objects.

-> Inside API > models > User.js, we have created a model and schema for our user. In app.post method, first we grab the username and password and create a user of that credentials.

-> Jsonwebtoken is a way to securely transmit info b/w parties as a JSON object. After a user is signed in an app, the app assigns a JWT to that user and the sign function tells what info does the token contain. Here we pass the token as a cookie with name = token and value = token.

-> We add axios library to our client side that will submit the form of register.jsx to our api. Now we set some defaults of axios in app.jsx.

-> We add cors library to our api side that send cors headers in response.

-> After successfully registering a user, we want to create a context for our user(UserContext.jsx).

-> Routes.jsx will determine which type of view we want to show after logging in. We grab the username and id of the user.

-> After logging in, we have a token/cookie, we have to send it our API. If it is a user, tell me the username and ID of the user. We need to create an endpoint for this. We cannot read this token on the front end because it is encoded with jwtsecret.

-> Cookie-Parser is used to read the cookie.

-> Then we created Chat page.

-> Then we created a server object(line 78, index.js) which we can use to create a websocket server. Now we have both API server that will respond with json and a websocket server in the same file(index.js). For this we install another package (ws) for websocket server in api.

-> ws is just a library and wss is websocketserver. Now we create a connection and save it in a state.

-> Clients property shows all active connections. We can have multiple token cookies sent. They are seperated by (;). So we find ; and split them and token starts with (token = ). We decode the sent cookie and have username and userId. We save the userId and username info in connection and all the connections sit inside websocket server(wss). Next we grab all the clients from wss and see who is online. 

-> wss.clients is object of clients. [...wss.clients] will convert it into array. We will have 2 connections because when we run react app in developer mode it will render every component 2 times.

-> We grab all the websocket server clients as an array and for each client we send message as a json string consisting of clients who are online.

-> Inside chat.jsx we create a set for all the connections as there can be multiple connections from one client. We will use Object.keys and then we will map through the keys and the keys are actually the user IDs.

-> In index.js on(connection) we are checking the cookie and we are trying to read the username and the user ID from the encrypted cookie token we are setting this on the connection and when someone connects we are also sending info about this to everyone.

-> offlinePeople is an object where the key is actually the ID of the user. 