### Lab 10.3: Context API Implementation

This project demonstrates a Todo application built with React, utilizing the Context API for state management. The application includes features for managing todos, filtering, and theme switching, all while persisting state to localStorage.

#### Features
- Design and implementation of multiple, independent contexts for different pieces of global state
- Creation and use of Context Providers to make state and dispatch functions available throughout the component tree
- Consumption of context values and functions in components using the useContext hook
- Management of complex state (e.g., an array of objects, filter states) using useState within context providers
- Implementation of features requiring interaction between different contexts (e.g., filtering todos)
- Addition of a persistence layer using localStorage
- Basic performance considerations when working with Context API

#### Functionality

- Add, edit, and delete todo items
- Filter todo items by all, active, and completed
- Switch between light and dark themes
- Persist todo items and filter state to localStorage

#### Technologies Used
- React
- Context API
- localStorage
---
#### Cloning the Repository

1. To clone this repository, open terminal or command prompt and run the following command:

```bash
git clone https://github.com/urmee04/ToDo-App-Context-API.git
cd todo-app-context-api
npm install
npm run dev
```

2. Install tailwindcss with the following commands

```bash
npm npm install -D tailwindcss@3.4.1 autoprefixer
npx tailwindcss init -p
```
---

#### References

To complete this lab I followed class lessons and code suggestions. I also used following resources to understand core concepts of the React usage

- [react.dev useContext](https://react.dev/reference/react/useContext)
- [react.dev useState](https://react.dev/reference/react/useState)
- [react.dev useEffect](https://react.dev/reference/react/useEffect)
- [ReactJS Tutorial](https://www.tutorialspoint.com/reactjs/reactjs_state_management.htm)
- [localStorage Property](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [hooks Documentation](https://react.dev/reference/react/hooks)
