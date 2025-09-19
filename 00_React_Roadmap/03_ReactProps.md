## React Props ->

### `Props`:-

- Props (short for "properties") are objects that hold data and configurations passed from a parent component to a child component in React.
- They are used to pass data and allow components to be more dynamic and reusable.
- Props are read-only and immutable, meaning they cannot be modified by the child component that receives them. This ensures that components do not alter the data passed from the parent, preserving the unidirectional data flow in React.
- Props work similarly to HTML attributes but allow more complex and dynamic data to be passed between components.

```jsx
//App.jsx file
import { useState } from "react";
import Card from "../Component/Card";

function App() {
  return(
    <>
    <h1 className='bg-green-500 text-black p-4 rounded-xl mb-5 text-center'>Tailwind CSS Learning</h1>
    <Card cardName = "Mountain" btnText = "clickMe" />
    <Card cardName = "Beach" btnText = "Visit Me" />
    </>
  )
}

export default App;
```

```jsx
//Card component File
import React from "react";

const Card = ({cardName,btnText = "Visit Me"}) => {
  return (
    <>
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white flex align-middle justify-center flex-col">
        <img
          className="w-full h-48 object-cover"
          src="https://plus.unsplash.com/premium_photo-1729068649616-48b0254eed5d?q=80&w=1858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Card Image"
        />

        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800">{cardName}</h2>
          <p className="mt-2 text-gray-600">
            This is a simple card component created using Tailwind CSS. You can
            customize it to suit your needs!
          </p>

          <div className="mt-4 flex justify-between items-center">
            <button className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded hover:bg-blue-600">
              {btnText}
            </button>
            <span className="text-gray-500 text-sm">10 mins read</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
```

### `Default Props`:-

It is not necessary to always add props in the ReactDOM.render() element. You can also set defaults props directly.

```jsx
const Card = ({cardName,btnText = "Visit Me"})=>{
    return(
        <>
        //Here code Write on Props 
        </>
    )
}
```

## React Fragments ->

- A `Fragment` is a lightweight wrapper component that allows you to group multiple elements without adding extra nodes to the DOM. This is useful when you need to return multiple elements from a component but don't want to wrap them in an additional `<div>` or other container,which could lead to unwanted DOM nesting.

# Syntax ->

1. ## `Explicit Syntax`

```jsx
import React from 'react'

function Example (){
  return (
    <React.Fragment>
    <h1>Title</h1>
    <p>This is paragraph</p>
    </React.Fragment>
  )
}

export default Example;
```

2. ## `Shorthand Syntax`:

- React also provides a shorthand syntax, which is just an empty tag (<>) and its closing counterpart (`</>`). This is equivalent to React.Fragment.

```jsx
function Example(){
  return(
    <>
    <h1>Title</h1>
    <p>This is Paragraph</p>
    </>
  )
}
```

3. ## `Key Fragments`:

- The shorthand syntax does not accept key attribute. Fragments can accept a key attribute when used with explicit syntax. This is particularly useful when rendering a list of items.

```jsx
function ItemList({items}){
  return items.map(item => (
    <React.Fragment key={item.id}> 
    <h2>{item.name}</h2>
    <p>{item.description}</p>
    </React.Fragment>
  ));
}
```
