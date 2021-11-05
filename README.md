# CowList

Create a CRUD app using React (without Redux) that interfaces with a RESTful API powered by Node (with Express) and a database (MySQL) from scratch.
<p align=“center”>
<img src=“https://github.com/vannguyen-vn/CowList/blob/master/client/disk/img1.jpg” width=“250”><img src=“https://github.com/vannguyen-vn/CowList/blob/master/client/disk/img2.jpg” width=“250”>
</p>

### Technlogies

1. For server: Node.js with [Express](https://www.npmjs.com/package/express) and [nodemon](https://www.npmjs.com/package/nodemon)
1. For frontend: [React](https://www.npmjs.com/package/react) with JSX
1. For AJAX requests: [jQuery](https://www.npmjs.com/package/jquery), [axios](https://www.npmjs.com/package/axios),or fetch
1. For database: MySQL (with [mysql](https://www.npmjs.com/package/mysql))

### Backend Requirements

Create a RESTful API for a resource named `cows` that responds to the following endpoints:

| intention           | request type | request url | request body                              | side effect                    | response body                                                                    |
| ------------------- | :----------: | ----------- | ----------------------------------------- | ------------------------------ | -------------------------------------------------------------------------------- |
| read all cow data   |     GET      | `/api/cows` | none                                      | none                           | `[{name: 'Buttercup', description: '...'}, {name: 'Daisy', description: '...'}]` |
| create new cow data |     POST     | `/api/cows` | `{name: 'Milkshake', description: '...'}` | creates new record in database | `{name: 'Milkshake', description: '...'}`                                        |

### Frontend Requirements

Build the `Create` and `Read` functionality of a CRUD app using React. The frontend should make use of the already created, in the previous section, RESTful API endpoints to accomplish the following user stories:

1. When the user loads the page, the user should see a list of all names of previously created cows (but not their descriptions).

1. When the user types the name and description of a new cow they want to input into the database and presses the `[Submit]` button, the newly created cow's information should be displayed in the list from the previous step **only after the data has been successfully written to the database**.

1. When the user clicks on the name of a cow, the name and description of that cow should be displayed prominently at the top of the page (so as to mimic the functionality of a modal/popup that shows the details of a particular cow).

   a. Only the details of the most recently clicked cow should be prominently displayed at the top of the page at a time. For example, if `Betsy` is the first cow clicked, `Betsy`'s information should be displayed. If `Milkshake` is clicked afterwards, only `Milkshake`'s information should be displayed. `Betsy`'s description should no longer be visible.

   b. The details of any clicked cow should be prominently displayed in the same location in the DOM at the top of the page (aka not within the clicked component).

## Installation
npm is the package management system for this project.

Use npm install to install all dependencies.

To start the server, use npm run start.
To build, use npm run build.
