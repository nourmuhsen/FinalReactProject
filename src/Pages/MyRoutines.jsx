import { NavLink } from "react-router-dom";

const MyRoutines = () => {
  // Mock data for display
  const savedRoutines = [
    { id: 1, name: "Legion Back Day", exercises: 8 },
    { id: 2, name: "Full Body Burn", exercises: 12 },
    { id: 3, name: "Push Day A", exercises: 6 }
  ];

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>My Library</h2>
        <NavLink to="/create-routine"><button className="btn btn-primary">New Routine</button></NavLink>
      </div>

      <div className="list-group shadow-sm">
        {savedRoutines.map(routine => (
          <div key={routine.id} className="list-group-item list-group-item-action d-flex justify-content-between align-items-center p-3">
            <div>
              <h5 className="mb-1">{routine.name}</h5>
              <small className="text-muted">{routine.exercises} Exercises</small>
            </div>
            <div>
              <button className="btn btn-sm btn-outline-primary me-2">Edit</button>
              <button className="btn btn-sm btn-outline-success">Start</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyRoutines;