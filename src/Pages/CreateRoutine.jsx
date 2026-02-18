import { useState } from 'react';

const CreateRoutine = () => {
  const [routineName, setRoutineName] = useState('');
  const [exercises, setExercises] = useState([{ name: '', sets: '', reps: '' }]);

  const addExercise = () => {
    setExercises([...exercises, { name: '', sets: '', reps: '' }]);
  };

  const handleInputChange = (index, event) => {
    const values = [...exercises];
    values[index][event.target.name] = event.target.value;
    setExercises(values);
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4">Build Your Routine</h2>
      <div className="card shadow-sm p-4">
        <div className="mb-4">
          <label className="form-label fw-bold">Routine Name</label>
          <input 
            type="text" 
            className="form-control" 
            placeholder="e.g. Upper Body Power" 
            value={routineName}
            onChange={(e) => setRoutineName(e.target.value)}
          />
        </div>

        <h5 className="mb-3">Exercises</h5>
        {exercises.map((exercise, index) => (
          <div key={index} className="row g-2 mb-3 align-items-end">
            <div className="col-md-6">
              <label className="form-label small">Exercise Name</label>
              <input 
                name="name"
                type="text" 
                className="form-control" 
                placeholder="Squat, Bench Press..." 
                onChange={e => handleInputChange(index, e)}
              />
            </div>
            <div className="col-md-2">
              <label className="form-label small">Sets</label>
              <input name="sets" type="number" className="form-control" onChange={e => handleInputChange(index, e)} />
            </div>
            <div className="col-md-2">
              <label className="form-label small">Reps</label>
              <input name="reps" type="number" className="form-control" onChange={e => handleInputChange(index, e)} />
            </div>
          </div>
        ))}

        <div className="d-flex gap-2 mt-3">
          <button className="btn btn-outline-secondary" onClick={addExercise}>+ Add Exercise</button>
          <button className="btn btn-primary">Save Routine</button>
        </div>
      </div>
    </div>
  );
};

export default CreateRoutine;
