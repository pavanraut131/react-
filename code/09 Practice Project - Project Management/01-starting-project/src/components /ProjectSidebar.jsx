import React from "react";
import Button from "./Button";

const ProjectSidebar = ({
  setstart,
  projects,
  selectedproject,
  selectedprojectid,
}) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h1 className="mb-8 uppercase font-bold md:text-xl text-stone-200">
        Your Projects
      </h1>
      <div>
        <Button onClick={setstart}> Add Projects</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssclasses =
            "w-full text-left px-2 py-1 rounded-sm my-1  hover:text-stone-200 hover:bg-stone-800";
          if (project.id == selectedprojectid) {
            cssclasses += " bg-stone-800 text-stone-200";
          } else {
            cssclasses += " text - stone - 400";
          }
          return (
            <li key={project.id}>
              <button 
                onClick={() => selectedproject(project.id)}
                className={cssclasses}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default ProjectSidebar;
