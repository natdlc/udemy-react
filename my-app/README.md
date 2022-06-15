NOTES

Essentials

- normal variable declarations does not re-render the component, useState should be used for updating content
- every component receives its own "state"

useState

- if variable value changes, use this hook
- gives react the responsibility to manage the variable's state
- re-renders component when updater function is called
- updater does not change value immediately
- any references to the state variable will return prev value
- an instance of a component
- component renders n times, n instances of useState generates
- why const? we don't redeclare and change value of variable, react does it for us
- *ONE STATE* is possible, to be discussed