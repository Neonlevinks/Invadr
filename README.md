
# INVADR - A simple catalogue of games you love!


## Overview

Invadr is a catalogue of over 500,000 games, which can be sorted by Genre, and liked by a User. Users can then view their profiles to see a list of games they've liked.

<br>

## Getting Started

1. Create a new repository using this repository as a template.
2. Clone your repository onto your local device.
3. Install dependencies using the npm install command.
4. Create the `.env` file with the information below

```
PGHOST=localhost
PGUSER=reviewr
PGDATABASE=reviewrdb
PGPASSWORD=reviewr
PGPORT=5432
```
5. Log into psql with: 
```
psql -d reviewrdb -U reviewr
```
6. Create the schema with the following command within psql:
```
\i db/migrations/tables.sql;
```
7. Seed the users with the following command:
```
\i db/seeds/users.sql;
```
8. To run the backend server, in a new terminal, from the project root directory, run the following command:
```
npm start
```
9. To run the frontend server, use the following commands sequentially:
```
cd frontend
npm start
```

<br>

## Warnings & Tips

- Do not edit the `layout.css` file directly, it is auto-generated by `layout.scss`
- Split routes into their own resource-based file names, as demonstrated with `FilterBanner.jsx` and `Likes.jsx`
- Split database schema (table definitions) and seeds (inserts) into separate files, one per table. See `db` folder for pre-populated examples.

<br>

## Dependencies

- Node 10.x or above
- NPM 5.x or above
- React 18.1.x
- React Router Dom 6.3.0
- PG 8.5.x
- MUI material 5.6.x
- MUI icons-material 5.6.x
- Emotion react 11.9.x
- Emotion styled 11.8.x
- Axios 0.27.x or above
- cookie-session 2.x or above
- CORS 2.8.x
- Express 4.17.x
- Morgan 1.9.x
- Request 2.88.x
- Nodemon 2.0.x
- Webpack Dev Server 4.9.x
<br>


## Documentation

On loading the front end, you will see the main game page. To log in you can click the controller icon in the top right. For testing purposes, you can use the following information to log in:  

```
email: mariokart@gmail.com
password: asdf
```
<br>

[![01.png](https://i.postimg.cc/13vzjzf4/01.png)](https://postimg.cc/21Bmqrdf)  

<br>

You can use the drop down under "Pick a Genre" to select a genre of game, which will return 20 games under that genre. Each game has a like button which gets saved to your personal likes. For the example below, I am using selecting puzzle, and liking the first game on the shown only.

<br>

[![image.png](https://i.postimg.cc/HLjPQ6qj/image.png)](https://postimg.cc/CZTN0sLV)
[![image.png](https://i.postimg.cc/50dq6p1h/image.png)](https://postimg.cc/QBmWzQFm)
[![image.png](https://i.postimg.cc/htfKjRS5/image.png)](https://postimg.cc/0zRTW3KY)

<br>

Once liked, the user can click the Profile option in the top navigation bar, to be redirected to their profile

<br>

[![image.png](https://i.postimg.cc/TPPzYVfq/image.png)](https://postimg.cc/0zLWVJ6b)

<br>

If the user no longer likes the game, they can unclick the like button to remove it from their profile

<br>

[![image.png](https://i.postimg.cc/nzSBftTG/image.png)](https://postimg.cc/ph8pK4wm)

<br>

