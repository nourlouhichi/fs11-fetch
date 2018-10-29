# Fetch

In this repository, you will use use fetch to get data asynchronously from an API.

## Objectives

- Use Fetch to interact with an API.
- Use React state to handle asynchronous data.

## Setup

Run `yarn` to install packages.
Run `yarn start` to run the development server.

## Basic Requirements

### 1. Create a form.

- [ ] This form should have an input for "location" and a button to "submit".
  - Clicking on "submit" should call the method "getWeather" on your component.
  - Clicking on "submit" should also update the state "loading" to true.

### 2. Call the Open Weather Map API.

- [ ] Call the Open Weather API from the "getWeather" method.
  - Get your own configs, and store configs them inside a `.env` file in the root level (make sure you import them to the component you are using them in).
  - Use "fetch" from the "getWeather" method and call the Open Weather API.
  - Store weather data in state.

### 3. Show the end user useful information (make this visually pleasing!)

- [ ] Create a visual for when data is loading.
- [ ] Show weather data once it has loaded.
- [ ] Show an error if the data did not load.


## Resources

- [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Open Weather Map API](https://openweathermap.org/)
- [React Documentation](https://reactjs.org/docs/hello-world.html)

## Notes

_This is a student project that was created at [Codely](http://codely.tech), a full stack development bootcamp in Barcelona._
