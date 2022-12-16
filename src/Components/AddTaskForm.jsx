const AddTaskForm = ({ newTask, setNewTask, addTask }) => {
  return (
    <>
      {/* Add Task */}
      <div className="row">
        <div className="d-flex ">
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="form-control form-control-lg"
            placeholder="Add a new item to the list"
          />
          <div className="col-auto">
            <button
              type="button"
              onClick={addTask}
              className="btn btn-lg btn-primary"
            >
              Add Task
            </button>
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default AddTaskForm;
