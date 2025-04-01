function TextBox() {
    const handleSubmit = () => {
        console.log("Submitted!");
    };

    return (
        <div className="text-box">
            <input type="text" placeholder="Type your guess here..." />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default TextBox;