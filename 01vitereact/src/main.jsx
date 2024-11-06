import React, { Children } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>Mai hoon Gian !</h1>
        </div>
    )
}

const ReactElement = {
    type: 'a',
    props: {
        href : 'https//google.com',
        traget : '_blank',
    },
    Children : 'click me to visit',
}

const anotherUser = "Ravindra"

const anotherElement = (
    <a href="https://google.com">visit google</a>
)

const reactElem = React.createElement(
    'a',
    {
        href : "https://google.com" ,target: '_blank'
    },
    'click me to visit youtube',
    anotherUser,
)

createRoot(document.getElementById('root')).render(
    reactElem
)
