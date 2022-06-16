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

- value in component is passed to parent component through props, and received from parent component through props as well (\*\* logic resides in parent component)
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
- _ONE STATE_ is possible, not as common as multiple useStates
- - when using a state's previous value while updating it to a new one inside the state updater function, **ALWAYS** use the callback function form with the "prevState" parameter, **WHY?** to ensure that you always operate on the latest state snapshot, this is because React **SCHEDULES** state updates, it doesn't perform them instantly.

<---> ! <---> <---> ! <---> <---> ! <---> <---> ! <---> <---> ! <--->

**SECTION 5** - Rendering lists and conditional content

- features to be added
  - outputting dynamic lists of content
  - rendering content under certain conditions

64. Rendering lists of data

    - pass items to be rendered via props
    - {} single curly braces: for executing dynamic expression in jsx
    - - jsx auto renders array of jsx elements for display inside {}

65. Using stateful lists

    - always use cb form in updater function when updating using a previous state

66. Understanding keys
    - without keys, all items in the list is updated whenever it re-renders
    - leads to performance issues
    - state changes will be lost if components are stateful
    - - avoid index counters

XX. ASSIGNMENT 3 - make filter work - hint1: filter arrays with filter method - hint2: dont change overall expenses array

67. Outputting conditional content

    - keep in mind state re-renders
    - store jsx content in variables
    - "abuse" && logic

68. Adding conditional return statements
    - can return jsx from if inside component function

XX. ASSIGNMENT 4 - add new expense button instead of form - when btn clicked, btn disappears and form appears - when form btn clicked, btn without form appears - *learned: add cancel btn - *learned: && logic usage (very handy)

69. Demo app: adding chart
    - set style dynamically (style prop)

**SECTION 6** Styling react components

74. Intro

    - will learn:
    - conditional & dynamic styles
    - styled components
    - css modules
    - new project, downloaded source code

75. Setting dynamic inline styles

    - ternary in inline style object
    - inline styles aren't preferred

76. Setting CSS classes dynamically

    - adding dynamic styling using backticks and utilizing css selectors
    - - declare dynamic style variable outside return statement

77. Intro styled components

    - avoid spilling styles to other components
    - approach1: use package "styled components"

78. Styled components and dynamic props

    - check CourseInput.js
    - styled component behavior: forwards all props in the underlying component
    - you can put functions in styled components backticks to include conditional stylings (WOW)

79. Styled components and media queries

    - can use media queries as normally in backticks styled components

80. Using CSS modules

    - import styles from "./stylesheetname.css"
    - check Button.js

81. Dynamic styles with CSS modules

    - use brackets for dashed classnames, backticks in className prop needed

**SECTION 7** Debugging react apps

83. Module intro

    - to learn:
    - find & fix errors
    - debug & analyze react apps
    - using react dev tools

84. Understanding React Error Messages

    - analyzing errors in terminal

85. Analyzing code flow and warnings

    - analyze flow of logic in error and investigate per component

86. Working with breakpoints *

    - use "debugger" reserved word in VSC to where you want the devtools sources to have a breakpoint *

87. Using react devtools (amazing)

    - search for component
    - see props content
    - tree structure is seen 