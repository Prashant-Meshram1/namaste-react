// const heading = React.createElement("h1", { id: "hello", xyz: "abc" }, "Hello World from React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// const head = React.createElement("h2", { id: "hello" }, "hello react js practice here");
// const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(head);
/* <div id =parent>
    <div id = child>
        <h1>i m an h1 tag</h1>
    </div>
</div> */

const parent = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" },
    React.createElement("h1", { id: "hello" }, "i m an h1 tag")));
const xyz = ReactDOM.createRoot(document.getElementById("root"));
xyz.render(parent);
/* <div id =parent>
    <div id = child>
        <h1>i m an h1 tag</h1>
        <h2> hello i am new h2  tag</h2>
    </div>
</div> */

// const parent = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" },
//     [React.createElement("h1", { id: "hello" }, "i m an h1 tag"), React.createElement("h2", { id: "ok" }, " hello i am new h2  tag")]));
// const root = ReactDOM.createRoot(document.getElementById("root"));
// const parent = React.createElement(
//     "div",
//     { id: "parent" },
//     React.createElement("div", { id: "child" },
//         React.createElement("h1", { id: "hello" }, "I'm an h1 tag"),
//         React.createElement("h2", { id: "ok" }, "Hello, I am a new h2 tag")
//     )
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
/*
<div id="parent">
            <div id="child">
                <h1 id ="hello">i m an h1 tag</h1>
                <h2> hello i am new h2 tag</h2>
            </div>
        </div>
            <div id=child2>
                <h1>i m an h1 tag</h1>
                <h2> hello i am new h2 tag</h2>
            </div>
        </div> */

// const parent = React.createElement("div", { id: "parent" },
//     React.createElement("div", { id: "child" }, [
//         React.createElement("h1", { id: "hello" }, "i m an h1 tag"),
//         React.createElement("h2", { id: "ok" }, " hello i am new h2  tag")]),

//     React.createElement("div", { id: "child2" }, [
//         React.createElement("h1", {}, "i am a new h1 tag of child 2"),
//         React.createElement("h2", {}, "hello i am new h2 tag")]));


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent)