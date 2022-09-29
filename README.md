<h1 align="center">LiftNutrtionTrackerBE</h1>

## Links

- [LiftingNutritionTracker BE](https://github.com/Skyoung93/LiftNutritionTrackerBE "Back End Repo")

## Routes 

GET /foods/names
  - returns list of unique names of foods previously entered
GET /foods/date/:date
  - returns all entries on the day given
  - params:
     - unix ms time (int) or 'YYYY-MM-DD' Str Format
PUT /foods
  - updates entry based on id
  - body:
    - id, int
    - name, str
    - mass, int
    - carbs, int
    - fiber, int
    - sugars, int
    - protein, int
    - fats, int
    - trans, int
    - saturated, int
POST /foods
  - creates entry 
  - body:
    - date, str
    - name, str
    - mass, int
    - carbs, int
    - fiber, int
    - sugars, int
    - protein, int
    - fats, int
    - trans, int
    - saturated, int

GET /lifts/names
  - returns list of unique names of exercises previously entered
GET /lifts/date/:date
  - returns all entries on the day given
   - params:
     - unix ms time (int) or 'YYYY-MM-DD' Str Format
PUT /lifts
  - updates entry based on id
  - body:
    - id, int
    - week, int
    - day, int
    - exercise, str
    - weight, int
    - set, int
    - rep, int
    - rating, int
    - notes, str
POST /lifts

  - body:
    - date, str
    - week, int
    - day, int
    - exercise, str
    - weight, int
    - set, int
    - rep, int
    - rating, int
    - notes, str

## Available Commands

In the project directory, you can run:

### `"npm install"`,

Install Dependencies.

### `npm start"`,

The server runs off of node.js 

## Future Updates

- [ ] handle (') in notes? The escape character throws an error for some reason
- [ ] DB Expansion: user info, shared foods and lifts pool to select from

## Authors

Sean Young

[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Skyoung93)

[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:seankaicheeyoung@gmail.com)

[![Linkedin](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/seankcyoung/)

## 🤝 Support

Contributions, issues, and feature requests are welcome!

Give a ⭐️ if you like this project!

## Technologies and Resources
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Git]( https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white )
![NPM]( https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white )
![Postman]( https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white )
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Postgres]( https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white )

## Recommended Extension Technologies and Resources
![Nginx]( https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white )



