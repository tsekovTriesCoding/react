import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onNameChange }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        // best practice with function not !isEditing or others
        setIsEditing((editing) => !editing);

        if (isEditing) {
            onNameChange(symbol, playerName);
        }
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-initialName">{playerName}</span>;
    // let btnCaption = 'Edit';

    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />
        // btnCaption = 'Save';
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}