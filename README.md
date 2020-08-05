### Overview

Fortunately is a fortune-telling app. A player can either choose from a selection of topics to ask a question, or submit their own custom question.
The player will then see their results along with their lucky numbers.

### Wireframes

- Mobile/Tablet Landing

https://res.cloudinary.com/dqlrz1dko/image/upload/v1596417126/Fortunately/Homepage_mobile_tablet_kgbmwk.pdf

- Mobile/Tablet Body

https://res.cloudinary.com/dqlrz1dko/image/upload/v1596417126/Fortunately/Homepage_mobile_tablet_kgbmwk.pdf

- Desktop Landing

https://res.cloudinary.com/dqlrz1dko/image/upload/v1596417159/Fortunately/Homepage_desktop_ekpbsa.pdf

- Desktop Body

https://res.cloudinary.com/dqlrz1dko/image/upload/v1596417170/Fortunately/Results_desktop_ug2zue.pdf

### MVP

#### Goals

- App returns API data.
- App can take a user input question.
- App uses React Class & Function Components.
- App routes to results page and additionally renders random "lucky" numbers

#### Libraries

> Use this section to list all supporting libraries and their role in the project.

|     Library     | Description                 |
| :-------------: | :-------------------------- |
|  React Router   | _For main site navigation._ |
| React Bootstrap | _For styling resources._    |
|      Axios      | _For API data._             |

<br>

#### Data

> Use the Data Section to define the API(s) you will be consuming for your project, inluding sample URL queries.

|     API      | Quality Docs? | Website                                    | Sample Query |
| :----------: | :-----------: | :----------------------------------------- | :----------- |
| Affirmations |      yes      | https://github.com/annthurium/affirmations | See below    |

{
"affirmation": "Nothing is impossible. The word itself says 'I’m possible!'"
}
{
"affirmation":"Sucking at something is the first step towards being good at something"
}
{
"affirmation": "Small progress is still progress"
}
{
"affirmation": "The path to success is to take massive, determined action"
}
{
"affirmation": "I admire you for taking this on"
}

#### Component Hierarchy

```
src
|__ assets/
      |__ fonts
      |__ images
|__ components/
      |__ Header.jsx
      |__ Home.jsx
      |__ Results.jsx
      |__ Form.jsx
      |__ Buttons.jsx
      |__ Numbers.jsx
      |__ Scratch.jsx
      |__ Footer.jsx
```

<br>

#### Component Breakdown

| Component |    Type    | state | props | Description                                               |
| :-------: | :--------: | :---: | :---: | :-------------------------------------------------------- |
|  Header   | functional |   n   |   y   | _The header will contain the logo._                       |
|   Home    |   class    |   n   |   y   | _The homepage will render the options in flexbox._        |
|  Results  |   class    |   n   |   y   | _The results page will render the API call & random #'s._ |
|   Form    |   class    |   y   |   n   | _The form will take input to create field in Airtable._   |
|  Buttons  |   class    |   y   |   y   | _The buttons will link between the two views._            |
|  Numbers  |   class    |   y   |   y   | _The numbers will render in results view._                |
|  Scratch  |   class    |   y   |   y   | _The scratch will animate the numbers in results view._   |
|  Footer   | functional |   n   |   y   | _The footer will show info about me and the API used._    |

#### Component Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Code Components     |    H     |     8 hrs      |    6.5 hrs    |   6.5 hrs   |
| Setup State & API   |    H     |     6 hrs      |     5 hrs     |    5 hrs    |
| Setup Route/Link    |    H     |     4 hrs      |    1.5 hrs    |   1.5 hrs   |
| CSS                 |    L     |     6 hrs      |     2 hrs     |    2 hrs    |
| Responsive Design   |    H     |     3 hrs      |     0 hrs     |    0 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |    1.5 hrs    |   1.5 hrs   |
| Post MVP            |    L     |     5 hrs      |     0 hrs     |    0 hrs    |
| TOTAL               |          |     35 hrs     |   16.5 hrs    |  16.5 hrs   |

#### Helper Functions

> Use this section to document all helper functions– generic functions that can be reused in other applications.

| Function | Description |
| :------: | :---------- |
|   TBD    |             |

### Post-MVP

- CSS animations\_

---

### Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

### Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.
