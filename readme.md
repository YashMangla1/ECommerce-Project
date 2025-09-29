# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

##

- Asynchronous code= code that does not finish right away
- fetch()- return a promise
- Promise- lets us wait for asynchronous code to finish
- .then - fetch contact the backend to get some data but it takes some time
  for backend to respond. Code is going line by line. Then at some point in the future, this is going to finish. We're going to get the response from backend. When it finishes in the future, it will run the function inside.

- When fetch gets a response from the backend, it'll save it as a parameter in this inner function called response

- .json= gives us the data attached to the response

- response.json() is also a asynchronous. we cannot stored it in a variable.

- Axios= cleaner way to make requests to the backend
- useEffect()= lets us control when some code runs
- Dependancy Array- lets us control when useEffect runs
- API - Application Programming Interface
- /api- these URL paths are for interacting with the backend

- ?expand=product- it is called query parameter, let us add additional info to our request

- for fetching the data from Backend:::
  We'll create some state to save the data using useState, we need to give the name and updater function inside the [deliveryOptions, setDeliveryOptions]
  Now, we'll get the delivery options from the backend
  useEffect, we'll give a function and in the end we'll give an empty dependancy array, so that code runs ones only.
  axios.get(api)
  then we're going to wait for the response to come back using .then and we'll give a function and inside the function, the response from the backend will be saved as the response parameter.
  once we get the response we'll save it up in the deliveryOptions using setDeliveryOptions(response.data)

- Asynch Await= lets us write asynchronous code like normal code
  \*\* When we write await in front of axios.get, it is going to wait for this code to finish, then it's going to move on the next line, we're waiting for this code to finish we can actually save this result in a variable.
  \*\* In order to write await we should be asynchronous function.When we use async await with useEffect, when we put async in front of a function that function will return a promise because that has some asynchronous code.
  \*\* Problem is inner function in useEffect should not return a prosmise, it should return nothing or clean up function. What we'll do to get rid of this problem is we'll create a new function inside useEffect like const getHomeData and will make it async and move our await code inside this and at the end just need to run this function.

  \*\* we use <strictmode>, but strictMode runs useEffect twice. Running twice helps us catch bugs.(Running useEffect twice should result in the same HTML being rendered. This is called idempotency).

  \*\* when we send a request to the backend, we can set a url path. Based on the URL path, the backend can do different things. like- /api/products = gives us the products. In addition to the URl path every request also has a type.
  axios.get('')- it sends 2 pieces of information:1. type 2. URl path , When backend receives our request, it looks for both type and the URL path, to decide what to do. Type is also called HTTP method.

  \*\* 4 common types of requests: 1. GET 2. POST 3. PUT 4. DELETE
