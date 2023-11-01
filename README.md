## Link Deploy

This project was deploy here: [https://booking-server-dangtrantien.vercel.app](https://booking-server-dangtrantien.vercel.app)

### This project has following structures:

```
controllers
  │─ admin.js
  │─ hotel.js
  └─ user.js
middleware
  └─ auth.js
models
  │─ Hotel.js
  │─ Room.js
  │─ Transaction.js
  └─ User.js
routes
  │─ admin.js
  │─ hotel.js
  └─ user.js
.gitignore
app.js
nodemon.json
package-lock.json
package.json
```

- controllers: Folder contains file to take action from folder routes and send data to Client.
- auth.js: File contains code to check authentication.
- models: Folder contains file to create data schema.
- routes: Folder contains file to create Rest API router path.
- .gitignore: File contains code to ignore some folder when pushing project on Github.
- app.js: File contains code to initialize the server.
- nodemon.json: File contains code storing env value.
- package.json & package-lock.json: File contains libraries code for building the Website.
