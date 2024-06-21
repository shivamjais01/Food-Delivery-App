const parent = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{id:"grandchild1"},"I AM GRAND CHILD1"),
        React.createElement("h2",{id:"grandchild2"},"I AM GRAND CHILD2")]
    )
); 

        const root=ReactDOM.createRoot(document.getElementById("root"));
         root.render(parent);
