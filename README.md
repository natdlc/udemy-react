NOTES

ESSENTIALS

MOST IMPORTANT

- normal variable declarations does not re-render the component, useState should be used for updating content
- every component receives its own "state"
- "react" contains features, state management, etc
- "react-dom" uses "react" to bring those logic and features to the web browser

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

86. Working with breakpoints \*

    - use "debugger" reserved word in VSC to where you want the devtools sources to have a breakpoint \*

87. Using react devtools (amazing)

    - search for component
    - see props content
    - tree structure is seen
    - edit state content \*wtf

**SECTION 8** Time to practice: a complete practice project _NICE_

89. Module intro

    - check user-project react app

90. Adding user component

    - downloaded user project

91. Adding "card" component

    - combining css modules, className prop from custom component
    - className in custom components does not work like expected, since they are our own components, not react's built in jsx elements

92. Adding "button" component

    - add fallback to type props from Button component itself

93. Managing user input state

94. Adding validation and resetting logic

    - self work success
    - string.trim().length validates whitespaces
    - split fetching and outputting

95. Adding a Users List Component

96. Managing a List Of Users via State

97. Adding The "ErrorModal" Component

    - adding separate div for the modal backdrop i think is preferred

98. managing error state

    - backdrop is preferred so that if it is clicked rather than the content of the modal, the modal closes

**SECTION 9** Fragments, portals, refs

100. module intro


    - will learn
    - jsx limitations and fragments
    - get a cleaner dom with portals
    - refs and why its needed

101. jsx limitations and workarounds


    - can't have adjacent root elements (only one root jsx element)
    - * can enclose in an array instead of a root element
    - note: it returns a key warning
    - wrapping in divs not ideal as it breaks styling

102. creating a wrapper component


    - * helpers component can return just props.children

103. react fragments


    - <></> auto wrapper component (shorter)

104. react portals


    - nested modals/side-drawers/dialogues aren't ideal
    - like making a <div> function like a <button>
    - don't include the modal code in section where it is activated from, instead put it outside that section so it don't interfere with the flow of the code

105. working with portals (SUPER IMPORTANT REACT CONCEPT IN HERE)


    - "react" contains features, state management, etc
    - "react-dom" uses "react" to bring those logic and features to the web browser
    - portal can be used anywhere jsx can be declared

106. working with refs


    - sets up connection between html element being rendered and other js code
    - ref prop
    - built in
    - connect any html element to references
    - often done in inputs
    - benefit
    - AVOID: manipulating dom directly
    - exception for lesson context: current value is reset

107. controlled vs uncontrolled components


    - think of it as controlled vs uncontrolled "by react"
    - accessing values with ref is called uncontrolled components
    - why? because internal state (current.value) is not controlled by react

**SECTION 10** advanced: handling side effects, using reducers, and using context api - LET'S GO DUDE

109. module intro

    - will learn
    - effects, reducers, and context
    - working with (side) effects
    - managing more complex state with reducers
    - managing app-wide or component-wide state with context

110. What are "Side Effects" & Introducing useEffect

    - what is "effect" or "side effect"
    - >> react's main job is render UI & react to user input
    - >> evaluate and render jsx
    - >> manage state and props
    - >> react to user events and inputs
    - >> re evaluate component upon state and prop changes
    - >> prop changes
    - "baked into" React via "tools" and features covered in the course (ie useState, hook, props, etc)
    - "side effects"
    - >> anything else
    - >> samples:
    - >> store data in browser storage
    - >> send http requests to backend
    - >> set & manage timers
    - >> these tasks must happen outside of normal component evaluation and render cycle, especially since they might block / delay rendering (async http requests)

111. Using the useEffect() Hook
    
    - calling state updater function in component-level inside any code blocks that changes the state of the state variable will cause infinite loop
    - useEffect() controls this action
    - runs after the component loads

112. useEffect & Dependencies
113. What to add & Not to add as Dependencies
114. Using the useEffect Cleanup Function
115. useEffect Summary
116. Introducing useReducer & Reducers In General
     9 min

117. Using the useReducer() Hook
     14min

118. useReducer & useEffect
     10min
     Start
119. Adding Nested Properties As Dependencies To useEffect
     1min

120. useReducer vs useState for State Management
     4min

121. Introducing React Context (Context API)
     7min

122. Using the React Context API
     11min

123. Tapping Into Context with the useContext Hook
     2min

124. Making Context Dynamic
     5min

125. Building & Using a Custom Context Provider Component
     9min

126. React Context Limitations
     3min

127. Learning the "Rules of Hooks"
     7min

128. Refactoring an Input Component
     6min

129. Diving into "Forward Refs"
     14min
     Start
130. Module Resources
     1min
