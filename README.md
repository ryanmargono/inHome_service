# README.md
## Installation
`yarn install`

## Execution
`npm start`
`localhost:8080`

## Design Decisions

### Folder Structure

    ├── src                   
    │   ├── api # endpoint controllers
    │   ├── db  # database file
    │   ├── loaders # service start up logic
    │   ├── models  # db models
    │   ├── services    # endpoint business logic
    │   └── app.js  # app entry point  

I took on this project as if I was building an application in the real world. Therefore, factors such as scale and testibility played a big part in how I structured the application. 

Loaders split up start up logic into module with specific purposes. In this case, there is a loader file for initializing express and another for sequelize. By splitting these up, it allows an engineer to easily write tests for each module.

Seperating business logic from the endpoint controllers also benefits testing. If business logic wasn’t seperated, then writing tests for them would have to involve mocking request and response objects, which complicates the process. In addition, this seperation provides better readibility, which helps with a growing team as engineers need to quickly onboard.

### Node + Express

Any commonly used backend framework would have done the trick. However, I have been working primarily with Django and Python in the back end for the last year and wanted to use this opportunity as a refresher for Node and JS.

### Sequelize

Using an ORM sped up development time by abstracting away the need to write SQL queries directly.


## Extra Credit

## User Avatar

I used a random image generator API ([Lorem Picsum](https://picsum.photos/)) to get a URL for each user on creation.

## Limitations and Improvements

	* writing tests.
	* more error handling.