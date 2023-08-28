import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import ViewBudget from "./viewBudget";
import EditBudget from "./EditBudget";
const Budget = () => {
    const { budget, dispatch } = useContext(AppContext)
    const [Editing, setEditing] = useState(false);

    const handleEditClick = () => {
        setEditing(true);
    };
    const handleSaveClick = (value) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: value,
        });
        setEditing(false);
    };


    return (
        <div className="alert alert-secondary p-3 d-flex align-items-center justify-content-between">
            {Editing ? (
                <EditBudget handleSaveClick={handleSaveClick} budget={budget} />
            ) : (
                // For part 1 render component inline rather than create a seperate one
                <ViewBudget handleEditClick={handleEditClick} budget={budget} />
            )}
        </div>



    )

}


export default Budget;