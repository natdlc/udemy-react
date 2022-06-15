NOTES

ESSENTIALS

basics
- normal variable declarations does not re-render the component, useState should be used for updating content
- every component receives its own "state"

eventprops (custom)
- functions as values
- pass function from parent to child
- call function from child
- pass parameter to function

controlled vs uncontrolled components / 
presentational / 
stateful vs stateless components / 
dumb vs smart components
- value in component is passed to parent component through props, and received from parent component through props as well (** logic resides in parent component)
- called dumb / stateless / presentational if component does not have logic

conventions
- react components must (as much as possible) have only one purpose / output
- most of the time, stateful components are compartmentalized in single components that does only one thing at a time
- manage state in a few components, pass it around through props

useState
- if variable value changes, use this hook
- gives react the responsibility to manage the variable's state
- re-renders component when updater function is called
- updater does not change value immediately
- any references to the state variable will return prev value
- an instance of a component
- component renders n times, n instances of useState generates
- why const? we don't redeclare and change value of variable, react does it for us
- *ONE STATE* is possible, not as common as multiple useStates


<---> ! <---> <---> ! <---> <---> ! <---> <---> ! <---> <---> ! <---> 

SECTION 5 - Rendering lists and conditional content

  - features to be added
    - outputting dynamic lists of content
    - rendering content under certain conditions
  
  64. Rendering lists of data
    - pass items to be rendered via props
    - {} single curly braces: for executing dynamic expression in jsx
    - * jsx auto renders array of jsx elements for display inside {}

  65. Using stateful lists