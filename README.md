# Getting Started with Create React App

## Writing React with Online Editor

Go to [CodeSandBox.io](codesandbox.io) and Sign-up or type [react.new](react.new) in the URL ✍🏽

## What is React?

React is extremely popular, declarative, component-based, state-drive JavaScript Library for building user interfaces - created by Facebook.

-   Component-based: Components are building blocks of user interfaces. We build complex UIs by building and combining multiple components. Each section/aspect of a webpage is broken down into pieces (components).
    Components represents the NavBar, SearchBar, sections, footer, aside, buttons all fixed together eventually.

-   Declarative: We described how a component should look like and how they work using using a declaritive syntax called JSX (JS-XML). JSX is a syntax that combines HTML, CSS and JavaScript as well referencing other (React) components.

-   State: For example, a state in React is an array of products (data) to be rendered on the UI with JSX. Whenever this state is updated, React reacts to the State changes by re-rendering the UI.

-   JS-Library: React is a JavaScript Library which complies with other libraries (external) to build a complete application because React itself is only the "view" layer.

-   NB: React was created in 2011 by Jordan Walke, an engineer working at Facebook at the time. In 2013, React was open-sourced for everyone to use.

`It is no longer advisable to use Create-react-app to build professional projects but Vite is now recommended [vite.dev](vite.dev)`

## Setup React App

```cmd
npx create-react-app project_name
```

### Folder Structure

-   SRC: Where all development codes will go.
-   PUBLIC: Where all assets for the final app lives. Assets such as; images, logo, favicons etc

#### SRC Folder

-   App.js: Contains main component of the app.
-   index.js: Contains the React configuration and renders the components to the UI

#### Rendering Root Component & Strict Mode

-   The `index.js` file provided in the `src` folder renders the app-components in entirity
-   Here is where you need to import all React modules necessary

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
```

-   Create a variable to store the div-element provided in the HTML with the ID of "root"

```javascript
const root = ReactDOM.createRoot(document.getElementById("root"));
```

-   Render this variable by inserting intended components

```javascript
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
```

-   HINT: The component can be created in the `index.js` file or imported from another file.

#### Component

A component is the fundamental piece of an interface and it contains 3-things
a Data (HTML)
b Logic (JS)
c Appearance (CSS)

## Styling React App

Styles can be Inline or External. Moreover, CSS frameworks can be used to provide styles for components in React.

-   Inline: Inline styling are provided as JS objects in JSX. Betterstill, an object variable can be created in the JSX and used as inline style for cleaner coding.

```javascript
const styleVar = {
    color: "red",
    padding: "20px"
}
<h1 style={styleVar}>Hello React</h1>
```

NB: Only variables and functions declared in a JSX component is applicable to the component.

-   External: External CSS can be provided in the `SRC` folder containing the `App.js` file also.

1. Import the CSS file into the App file.
2. insert `classes` provided in the CSS as `className` in the JSX elements necessary.

```html
<h1 className="header">Hello React!</h1>
```

## Passing and Receiving Props

Props is how we pass data inbetween components. Especially from a parent component to a child component. We can imagine prop as being a communication channel between a parent and a child component.
You can add customized attribute to a JSX syntax where its being used in the parent component.

```html
<Pizza ingredient="tomato and pasta" brand="foodCo" />
```

These attributes are called props and are therefore meant to be passed into component function as parameters.

```javascript
function Pizza(props) {}
```

Props can then be used as string interpolations to populate the component.

```html
<p>{props.ingredient}</p>
<h2>{props.brand}</h2>
```

HINT: Customized attribute or props becomes a javascript object which is interpolated using dot-notation.
