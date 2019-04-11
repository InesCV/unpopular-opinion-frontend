# Unpopular Opinion

## Description

It's an App where you can know how popular are your opinions based on what other people respond to the same opinions and a general overview of everything you've opinated about.

## User Stories

-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault.
-  **Signup:** As an anon I can't do anything.
-  **Login:** As a user I can login to the platform so that I can see the opinions and everything else.
-  **Logout:** As a user I can logout from the platform so no one else can use it.
-  **Add Opinion:** As a user I can add an opinion that I will share with the community.
-  **Opinions:** As a user I want to want to be able to respond to the different opinions of the community.
-  **Profile:** As a user I can see my profile an how popular am I within my community. Also I will see how people respond to my opinions.

## Backlog

User profile:
- See my index of popularity by category.
- Upload my profile picture.
- See other users profile.
- List of people you follow and are followed by.
- Chat with other users.

In my zone:
- Add geolocation to the users so you can check those who are closer to you.
- See the level of compatibility you have within your area.
- See the level of compatibility you have with every specific user near you.

The swiper (Home):
- You can mark as favourite the opinions you want to follow
- You can report those opinions that do not follow the App policies.
- You can follow those users whom opinions you like.
- The fist opinions that will appear are those closer to you.
- Filter the opinions by category.
  
# Client

## Pages

| url | public | Functionality |
|-----|-------|---------------|
| `/` | false | landing page |
| `/signup` | true | Signup user |
| `/login` | true | login user |
| `/profile` | false | profile of user |
| `/opiniongenerator` | false | user content creator |
| `/inmyzone?????` | false | user content creator |

## Services

# Server

## Models

User model
```
username - String // required
email - String // required & unique
password - String // required
```
Backlog - User model
```
favorites - [ObjectID<Opinions>] // not required
followers - [ObjectID<Followers>] // not required
following - [ObjectID<Following>] // not required
location - {lat: Number, long: Number} // required if using "In my zone"
```

Opinion model
```
owner - ObjectID<User> // required
category - Array[Enum]  // required & defined by the App
question - String // required & caracter limited
response // required & caracter limited - {
  x: String,
  y: String
}
```
Backlog - Opinion model
```
photo - Ni puta idea
location // required if using "In my zone" - { 
  lat: Number, 
  long: Number
  } 
reported // created by the API - {
  isReported: boolean (default: false),
  isRevised - boolean (default: false),
  by: [ObjectID<user>]
}
```
Response model
```
opinion - ObjectID<opinion> 
responses - Array[{
  user - ObjectID<user>,
  response - Array[enum]
}] 
```

## API Endpoints (backend routes)

## API routes:

### auth
|Method|Route|Functionality|
|---|---|---|
|GET|api/auth/me|Check session status|
|POST|api/auth/signup|Log in user to app and set user to session (Body: username, email, password)|
|POST|api/auth/login|Register user to app and set user to session (Body: username, mail, password)|
|POST|api/auth/logout|Log out user from app and remove session|

### users
|Method|Route|Functionality|
|---|---|---|
|<span style="color:magenta">PUT</span>|api/user|Updates the information of the user|

### opinions
|Method|Route|Functionality|
|---|---|---|
|GET|api/opinions|Gives back all the opinions on the platform|
|GET|api/opinion/:id|Gives back a unique opinion, what we show in our cards|
|POST|api/createopinion|Creates a new opinion card inside the platform|
|<span style="color:magenta">PUT</span>|api/opinion|Updates a new opinion card inside the platform|
|<span style="color:magenta">DELETE</span>|api/opinion/:id|Erases an opinion from the platform|

### response
|Method|Route|Functionality|
|---|---|---|
|POST|api/opinion/response|Sends the response of the user to an exact opinion|
|<span style="color:magenta">POST</span>|api/opinion/favorite|The user saves the opinion as favorite|
|<span style="color:magenta">POST</span>|api/opinion/report|Reports an opinion from the platform|


### admin
|Method|Route|Functionality|
|---|---|---|
|<span style="color:magenta">GET</span>|api/admin/reports|The admin gets all the reported opinions|
|<span style="color:magenta">PUT</span>|api/admin/reports/:id|The admin modifies the state of the reported opinion|
|<span style="color:magenta">DELETE</span>|api/admin/reports/:id|The admin deletes once and for all the reported opinion|
|<span style="color:magenta">DELETE</span>|api/admin/user/:id|The admin deletes the profile of a user|
  

## Links

### Trello/Kanban

[Link to your trello board](https://trello.com/b/upzsvW5g/unpopular-opinion) or picture of your physical board

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/Ironhack-PartTime-BCN/boilerplate-frontend-module-3)

[Server repository Link](https://github.com/Ironhack-PartTime-BCN/boilerplate-backend-module-3)

[Deploy Link Backend](http://heroku.com)

[Deploy Link Frontend]()

### Slides

The url to your presentation slides

[Slides Link](http://slides.com)
