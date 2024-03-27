const ConditionalWrapper = ({ condition, wrapper, children }) =>
    condition ? children : wrapper(children);

export default ConditionalWrapper;