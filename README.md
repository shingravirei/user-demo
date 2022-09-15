# User Demo

The project consists of two parts, a rest api build with Nest and a frontend app build with React

---

## Requirements

- docker and docker-compose installed
- node 18 installed

obs: if you don't have docker and docker-compose installed or you're having some kind of problem with your current docker installation, you just need an mysql instance running on your PC with the credentials shown below

## Installation Instructions

create an `.env` file at the root of the project with these variables
```bash
# MySQL vars
MYSQL_ROOT_PASSWORD=root
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=admin
MYSQL_PASSWORD=admin
MYSQL_DATABASE=test

# api vars
PORT=3000
```

clone the project and at the root run these commands

```bash
# start the mysql db on a docker container
docker-compose up -d
```

```bash
# install the front and api dependencies
cd front && npm install && cd ..
cd api && npm install && cd ..
```

```bash
# now you need to open two terminal windows and access the `api` and `front` folders on each of these windows

# at the api folder run
npm run start:dev # the api dev server will start on the port 3000

# at the front folder run
npm start dev # the front app dev server will start on the port 5173 
```
> now you can access the app on your browser accessing the link http://localhost:5173/

---

```bash
# to stop the docker container run this command at the root
docker-compose down
```

---

## Technologies Used

- Frontend
  - React
  - React-Query
  - Ky
  - Chakra-UI
  - Vitejs
  
- Backend
  - Nestjs
  - mysql
  - TypeORM
  - Docker