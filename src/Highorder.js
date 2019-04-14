import react from 'react';

const reverse = (PassedComponent) =>
  ({ children, ...props }) =>
    <PassedComponent {...props}>
      {children.split("").reverse().join("")}
    </PassedComponent>

const name = (props) => <span>{props.children}</span>
const reversedName = reverse(name)
<reversedName>Hello</reversedName>
