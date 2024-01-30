// const heading=React.createElement("h1",{id:"Heading"},"Hello")
// const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)

const parent=React.createElement("div",{id:"parent"},[
React.createElement("div",{id:"child 1"},[
    React.createElement("h1",{id:"child"},"I'm h1 tag"),
        React.createElement("h2",{id:"child"},"I'm h2 tag")
    ]),
    React.createElement("div",{id:"child 2"},[
        React.createElement("h1",{id:"child"},"I'm h1 tag"),
        React.createElement("h2",{id:"child"},"I'm h2 tag")
    ])
]);
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)