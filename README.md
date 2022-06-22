NOTES

ESSENTIALS

MOST IMPORTANT

- normal variable declarations does not re-render the component, useState should be used for updating content
- every component receives its own "state"
- "react" contains features, state management, etc
- "react-dom" uses "react" to bring those logic and features to the web browser
- unmounts from DOM: whenever component is reused
- understand the difference between **primitive** and **reference** values (for React.memo())

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
- when using a state's previous value while updating it to a new one inside the state updater function, **ALWAYS** use the callback function form with the "prevState" parameter, **WHY?** to ensure that you always operate on the latest state snapshot, this is because React **SCHEDULES** state updates, it doesn't perform them instantly.
- state changes are the only way to make a component re-render, regardless if it comes from context, or arrives to a prop in the lowest level component
- if a state changes in a component, all child components will be re-rendered, regardless if that child component receives the state value via props / context, as long as it is within the top level component where state is declared

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


    - one code in one place which reruns whenever one of dependencies change
    - one main job: handle side effects
    - side effects often are: http requests, keystroke listening

113. What to add & Not to add as Dependencies


    - refer to udemy link https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25871518#content

114. Using the useEffect Cleanup Function


    - debouncing: ie add delay to every user input to only send hypothetical http requests when necessary and not every keystroke
    - returning a cleanup function from a useEffect
    - cleanup function runs before every new side effect function execution and before component is removed
    - does not run before the first side effect function execution

115. useEffect Summary


    - useEffect runs after every component render cycle
    - useEffect with [] dependency runs once
    - useEffect with [dependencySample] reruns whenever component is reevaluated and dependencySample state/prop changes
    - useEffect cleanup function runs before useEffect function as a whole runs, but not the first time useEffect function runs, and when component is removed

116. Introducing useReducer & Reducers In General


    - built in hook
    - helps with state management
    - like useState but with more capabilities
    - for more complex state
    - sample: multiple states, multiple ways of changing it, dependencies to other states
    - replacement for useState if you need "more powerful state management"
    - rule: avoid depending on a previous state of a different state when updating a separate state
    - if you update a state which depends on another state

117. Using the useReducer() Hook


    - const [state, dispatchFn] = useReducer(reducerFn, initialState, initFn);

118. useReducer & useEffect


    - extract object properties from reducer state objects
    - to specify which action you want useEffect to track in the reducer object

119. Adding Nested Properties As Dependencies To useEffect


    - key thing is NOT that we use destructuring but that we pass specific properties instead of the entire object as a dependency.

120. useReducer vs useState for State Management


    - note: useReducer for when using useState is cumbersome or gets lot of bugs / unintended behaviors
    - note: don't overuse useReducer
    - useState for main state management tool
    - useState for independent pieces of state/data
    - useState if state updates are easy and limited to few updates
    - useReducer if you need more power
    - useReducer if related state data
    - useReducer if more complex state updates

121. Introducing React Context (Context API)


    - avoiding prop chains
    - useContext: "behind-the-scenes" state storage

122. Using the React Context API


    - manage state behind the scenes
    - React.createContext() -- takes a default context (component-wide state), can be just a string, can be an object (often-used)
    - ^ returns an object that also contains components
    - ^ to use context:
    - 1. provide it: tells react "hey, here's my context, all components that are wrapped by it should have access to it"
    - 2. consume it: hook into it / listen to it
    - providing: wrap in jsx code all the components that should be able to tap/listen into that context
    - ^ components that aren't wrapped in it won't be able to listen
    - listening in two ways:
    - 1. auth context consumer
    - 2. react hook (typically used)
    - note: provider only used for changing states, the #1 auth context consumer way is for displaying data only

123. Tapping Into Context with the useContext Hook


    - for more elegant use, useContext

124. Making Context Dynamic


    - you don't need to put anything inside the React.createContext() function invocation anymore if you are using Context.Provider approach
    - props for passing data to components, mechanism for configuring components and reusable
    - only if you're forwarding it to a lot of other components, use context api

125. Building & Using a Custom Context Provider Component


    - for better ide autocompletion, add necessary properties in the context js file's React.createContext() argument
    - create a separate custom context provider component
    - follow udemy link for steps refresher

126. React Context Limitations


    - not a replacement for component configuration, props only
    - not optimized for high frequency changes
    - for app-wide state changes, use redux
    - not used to replace all comms and props

127. Learning the "Rules of Hooks"


    - check pdf in natdev folder
    - always add everything you refer to inside of useEffect as a dependency

128. Refactoring an Input Component


    - utilization of props into new components for <Input/>

129. Diving into "Forward Refs"


    - interact with the input component imperatively
    - check bookmarks forwardRef for more info
    - you can expose functions / other data types

130. Module Resources

**SECTION 11** Practice project: Food Order App

131. Module intro

132. Starting Setup


    - folder management: cart, layout, meals, ui

133. Adding a "Header" Component


    - Header.jsx, Header.module.css
    - img adding in react

134. Adding the "Cart" Button Component


    - render svg component (cartIcon)

135. Adding a "Meals" Component


    - helper constant variable = mealsList

136. Adding Individual Meal Items & Displaying Them


    - added card component
    - wrapped ul meals list with Card

137. Adding a Form (IMPORTANT INFO PRESENT)


    - spread operator in jsx element attribute

138. Fixing Form Input IDs


    - prop drilled in meal item form for unique id values per input

139. Working on the "Shopping Cart" Component


    - modal structure
    - can include jsx in helper const (<ul></ul>)

140. Adding a Modal via a React Portal


    - creating portal

141. Managing Cart & Modal State


    - self completion of step success!
    - can do this with context, but optional
    - added to backdrop modal close handler

142. Adding a Cart Context


    - cart items length made shown on headercartbutton (success self complete!)

143. Using the Context


    - reduced cart context items array to reflect # of amount instead of # of food category in cart

144. Adding a Cart Reducer


    - reducer naming must be internalized

145. Working with Refs & Forward Refs


    - self complete add to cart logic

146. Outputting Cart Items


    - self complete updating cart

147. Working on a More Complex Reducer Logic


    - refactored self completed logic to shorter code, room for improvement found
    - technique to leaner ife block

148. Making Items Removable


    - self activity work: SUCCESS
    - added add cart item from cart modal capability

149. Using the useEffect Hook


    - self activity work: FAILED
    - must use setTimeout

150. Module Resources

**SECTION 12** A look behind the scenes of React and optimization techniques

151. Module Introduction


    - how react works?

152. How React Really Works


    - re-evaluating components !== re-rendering dom
    - virtual dom diffing

153. Component Updates In Action


    - explained how state changes look in Real DOM

154. A Closer Look At Child Component Re-Evaluation


    - state changes are the only way to make a component re-render, regardless if it comes from context, or arrives to a prop in the lowest level component
    - if a state changes in a component, all child components will be re-rendered, regardless if that child component receives the state value via props / context, as long as it is within the top level component where state is declared

155. Preventing Unnecessary Re-Evaluations with React.memo()


    - tells react that for component in argument:
        - react will look at props this component has
        - check new value for all those props
        - compare new values to their previous values.
        - if one of the values of prop changes, the component is re-executed / re-evaluated
        - if none of the values change, component execution is skipped
        - note: *does not assure performance enhancement, as it uses an algo that cross checks previous prop values to new ones*
        - note: *useful for **components with multiple children** that will prevent the unnecessary re-evaluation of these other components*
        - note: *reference vs primitive values have an impact to how memo() behaves*

156. Preventing Function Re-Creation with useCallback()


    -

157. useCallback() and its Dependencies
     7min
     Play
158. A First Summary
     4min
     Play
159. A Closer Look At State & Components
     4min
     Play
160. Understanding State Scheduling & Batching
     9min
     Play
161. Optimizing with useMemo()
     9min
     Start
162. Module Resources
     1min
