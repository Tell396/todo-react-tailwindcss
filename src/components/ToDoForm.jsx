import React, { useState } from 'react';

export default function ToDoForm({ addTask }) {
    const [userInput, setUserInput] = useState('');

    const handleChange = (event) => {
        setUserInput(event.currentTarget.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addTask(userInput);
        setUserInput('');
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSubmit(event);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Enter the task..."
                value={userInput}
                type="text"
                onChange={handleChange}
                onKeyDown={handleKeyPress}

                className="border-2 border-pink-300 rounded-md p-2 w-50"
            />

            <button className="bg-indigo-500 p-3 rounded-md text-white ml-2">Add task</button>
        </form>
    );
}
