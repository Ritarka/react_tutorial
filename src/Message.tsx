
// PascalCasing convention of name
function Message() {
    // JSX: Javascript XML

    // can put any javascript expression inside curly braces
    const name = 'John Doe'
    if (name)
        return <h1>Hello {name}!</h1>;
        
    return <h1>Hello World!</h1>;
}

export default Message;