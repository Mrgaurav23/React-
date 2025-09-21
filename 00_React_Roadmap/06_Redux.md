## 🔹 What is Redux?

Redux is a **state management library** for JavaScript apps (commonly used with React).
It helps manage **global state** of your application in a predictable way.

👉 Without Redux:

* You pass props down multiple levels (prop drilling).
* State is scattered in different components.

👉 With Redux:

* You keep all global data in a **store**.
* Any component can **read/update** it without prop drilling.

---

## 🔹 Key Concepts in Redux

1. **Store** → Holds the global state of your app.
2. **Action** → An object describing what happened .
3. **Reducer** → A pure function that updates the state based on actions.
4. **Dispatch** → A method to send actions to the reducer.
5. **Selector** → Used to read data from the store.

---

## 🔹 How Redux Works

```
UI Component → dispatch(Action) → Reducer → Store (updates state) → UI re-renders
```

---

## 🔹 Example in React with Redux Toolkit (modern way)

Instead of using old `redux` + `react-redux`, we now use **Redux Toolkit (RTK)** because it reduces boilerplate.

### 1. Install

```bash
npm install @reduxjs/toolkit react-redux
```

### 2. Create a Redux Slice (todoSlice.js)

```javascript
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello world" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
```

### 3. Configure Store (store.js)

```javascript
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
  reducer: todoReducer,
});
```

### 4. Provide Store to App (index.js / main.jsx)

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

### 5. Use Redux in a Component (todos.jsx)

```jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div>Todos</div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <div>{todo.text}</div>
            <button onClick={() => dispatch(removeTodo(todo.id))}></button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
```

---

✅ Now you have a working Redux-powered counter app!

- `useSelector` → Reads state
- `useDispatch` → Sends actions

---

Would you like me to also explain **when you should use Redux in a React app** (instead of just `useState` / `useContext`)?
