# ReduxSimpleStarter

Interested in learning [Redux](https://www.udemy.com/react-redux/)?

### Getting Started

There are two methods for getting started with this repo.

#### Familiar with Git?
Checkout this repo, install dependencies, then start the gulp process with the following:

```
> git clone https://github.com/StephenGrider/ReduxSimpleStarter.git
> cd ReduxSimpleStarter
> npm install
> npm start
```

#### Not Familiar with Git?
Click [here](https://github.com/StephenGrider/ReactStarter/releases) then download the .zip file.  Extract the contents of the zip file, then open your terminal, change to the project directory, and:

```
> npm install
> npm start
```

Redux and react are both seperate one will take care of application state and the other will take care of the Ui (view) 

Reducer is a function that returns the piece of the application state.

Container is a component that has direct access to the state of the redux
dumb component does not connect to the redux state

#why react-redux
There is an entire library, called react-redux whose sole purpose is to seamlessly integrate redux’s state management into a React application.

Provider is a React component given to us by the “react-redux” library. It serves just one purpose : to “provide” the store to its child components.

uses connect to map the stores state and dispatch to the props of a component 




#npm install -g windows-build-tools -- for c++ dependency and python too
