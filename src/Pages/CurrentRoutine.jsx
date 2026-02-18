import { useState } from 'react';

const CurrentRoutine = () => {
  // Mock data representing a routine selected from "My Routines"
  const [activeRoutine] = useState({
    name: "Legion Back Day",
    exercises: [
      { id: 101, name: "Pullups", sets: 3, reps: 10 },
      { id: 102, name: "Dumbbell Rows", sets: 4, reps: 12 },
      { id: 103, name: "Lat Pulldowns", sets: 3, reps: 15 }
    ]
  });

  // Track completed sets: { exerciseId_setNumber: boolean }
  const [completed, setCompleted] = useState({});

  const toggleSet = (exerciseId, setNum) => {
    const key = `${exerciseId}_${setNum}`;
    setCompleted(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="container my-5 mb-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="display-5 fw-bold">{activeRoutine.name}</h1>
        <button className="btn btn-success btn-lg">Finish Workout</button>
      </div>

      {activeRoutine.exercises.map((ex) => (
        <div key={ex.id} className="card shadow-sm mb-4 border-0">
          <div className="card-header bg-dark text-white p-3">
            <h4 className="m-0">{ex.name}</h4>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-hover align-middle">
                <thead>
                  <tr>
                    <th>Set</th>
                    <th>Goal</th>
                    <th className="text-center">Done</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Create an array based on number of sets */}
                  {Array.from({ length: ex.sets }).map((_, i) => {
                    const isDone = completed[`${ex.id}_${i+1}`];
                    return (
                      <tr key={i} className={isDone ? "table-success" : ""}>
                        <td>{i + 1}</td>
                        <td>{ex.reps} Reps</td>
                        <td className="text-center">
                          <input 
                            type="checkbox" 
                            className="form-check-input"
                            style={{ width: '25px', height: '25px' }}
                            checked={!!isDone}
                            onChange={() => toggleSet(ex.id, i + 1)}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CurrentRoutine;