# Fresh Spots

- Users can create and share lists of places to visit
- Features
  - A user can sign up with social auth / login / logout
  - A user can CRUD lists
  - A user can add a specific Point of Interest (POI) to the list
  - A user can add a comment / more info to a given POI
  - A user can share this list with anyone

- Backend Framework
  - [Deno + Fresh](https://fresh.deno.dev/)
- Database Access
  - [Kysely](https://koskimas.github.io/kysely/)
- OAuth 2
  - [DenoGrant](https://github.com/w3cj/deno_grant)

The code is in the [app](/app/) directory. See the README there for setup directions.

---

## TODO

- Day 1
  - [x] Upgrade Deno
  - [x] Generate Fresh Project
  - [x] Familiarize myself with Fresh
  - [x] Linter?
  - [x] Setup the database
    - [x] Docker Postgres
  - [x] Create a users table
  - [x] At least 1 route that returns data from DB
- Day 2
  - [x] Update the README
  - [ ] use dotenv from std library
    - https://deno.land/std@0.150.0/dotenv
  - [ ] Figure out DenoAuth
  - [ ] Define out Models...
    - User
    - Social Profile
    - Spot List
    - Spot
    - Spot Comments
  - [ ] Show a map on the home page
  - [ ] Allow users to login and logout

# Stretch Features

- Social Features
  - Comments on lists
  - Favoriting / Staring lists
  - Posting pictures of food / events at the spots would be pretty cool, similar to Yelp or Amazon reviews
