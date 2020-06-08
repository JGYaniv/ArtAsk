import React, {useEffect, useState} from 'react'
export default ({
    openModal,
    currentUser,
    taskForm,
    taskType,
    errors,
    postTask,
    setError,
    clearError,
    setFormStep,
    users,
    history
}) => {
    const [details, setDetails] = useState(taskForm.describe.details)

    useEffect(()=>{
        if(Boolean(currentUser) === false){
            openModal("signup")
        }
    })
    const selectedArtist = users[taskForm.select_artist.artist_id] || {first_name: "", last_name: "", photo_url: ""}

    const handleSubmit = (e) => {
        e.preventDefault()
        if (details === "") {
            setError("details")
        } else {
            clearError("details")
            postTask({
                user_id: currentUser.id,
                title: taskType.title,
                artist_id: taskForm.select_artist.artist_id,
                task_type_id: taskForm.task_type_id,
                completed: false,
                details: details,
                start_date: `${taskForm.select_time.start_time}`,
            }).then(history.push('/'))
        }
    }

    return (
        <div className="form-page confirm">
            <div className="confirm-content">
                <div className="form-section" >
                    <form className="options-form confirm-details">
                        <p>Please review your project description</p><br />

                        <textarea
                            onChange={e => setDetails(e.target.value)}
                            defaultValue={details} >
                        </textarea>

                        <div>
                            <p className="inline-error">
                                {errors.includes("details") ? "Cannot leave blank!" : ""}
                            </p>
                        </div>
                    </form>
                </div>

                <div className="confirm-button-section">
                    <button 
                        className="confirm-button"
                        onClick={handleSubmit}>
                            Confirm
                    </button>
                </div>
            </div>

            <div className="confirm-sidebar">
                <div className="form-section">
                    <div className="artist-details">
                        <h1>{Boolean(taskType) ? taskType.title : ""}</h1>
                        <h3>{selectedArtist.first_name} {selectedArtist.last_name}</h3>
                        <img 
                            src={selectedArtist.photo_url} 
                            alt={selectedArtist.first_name} />
                    </div>

                    <div className="task-details">
                        <ul>
                            <li>{`${taskForm.select_time.start_date}`}</li>
                            <li>
                                {taskForm.describe.street_address}
                                {taskForm.describe.apartment_number}
                            </li>
                            <li>{taskForm.describe.size}</li>
                            <li>{taskForm.describe.revisions}</li>
                            <li className="edit-link" 
                                onClick={() => setFormStep(1)}>
                                    Edit Project
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}