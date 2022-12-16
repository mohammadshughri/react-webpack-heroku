import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const ToDo = ({ toDo, markDone, setUpdateData, deleteTask }) => {
  return (
    <>
      {/* Sorting the array of objects by id.  */}
      {toDo &&
        toDo
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((task, index) => {
            return (
              <React.Fragment key={task.id}>
                {/* /* Importing the css files for the checkbox and the icons. */}
                <link
                  rel="stylesheet"
                  type="text/css"
                  href="https://netdna.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"
                />
                <link
                  rel="stylesheet"
                  type="text/css"
                  href="https://flatlogic.github.io/awesome-bootstrap-checkbox/demo/build.css"
                />
                {/*  checkbox design and functionality.  */}
                <div className="col taskBg d-flex">
                  <div class="checkbox checkbox-success checkbox-circle">
                    <input
                      id="chkSuccess"
                      type="checkbox"
                      onClick={(e) => markDone(task.id)}
                      title="Completed / Not Completed"
                    />
                    <label for="chkSuccess"></label>
                  </div>
                  {/*  Task text design and functionality.  */}
                  <div className="taskText">
                    <div className={task.status ? "done" : ""}>
                      <span className="taskText">{task.title}</span>
                    </div>
                  </div>
                  {/*  Icons design and functionality.  */}
                  <div className="iconsWrap">
                    {task.status ? null : (
                      <span title="Edit" onClick={() => setUpdateData(task)}>
                        <FontAwesomeIcon icon={faPen} />
                      </span>
                    )}

                    <span title="Delete" onClick={() => deleteTask(task.id)}>
                      <FontAwesomeIcon icon={faTrashCan} />
                    </span>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
    </>
  );
};

export default ToDo;
