# Book Store

A simple application to display, search and filter a collection a books.

The books are stored in a PostgreSQL database and managed with a Node.js API. The web interface was built with React.

A live version of the app is available [here](https://my-bookstore-app.netlify.app).

## Usage

Clone the app to your computer:

```sh
git clone git@github.com:gabrielecanepa/bookstore
cd bookstore
```

### API

1. Switch to the `/api` folder
2. Install the dependencies with `yarn install` or `npm install`
3. Install the [Sequelize CLI](https://sequelize.org/master/manual/migrations.html) globally with `yarn global add sequelize-cli` or `npm install -g sequelize-cli`, or just run it with npx (e.g. `npx sequelize-cli db:create`)
4. Build a local database and create some books:
   ```sh
   sequelize db:create
   sequelize db:migrate
   sequelize db:seed:all
   ``` 
5. Run the app locally on port 5000 with `yarn dev` or `npm run dev`

### Web

1. Switch to the `/web` folder
2. Install the dependencies with `yarn install` or `npm install`
3. Run the app locally with `yarn start` or `npm run start`



