import React from "react";
import Button from "./Button";

const ProjectsSidebar = ({
  onStateAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStateAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {

            let cssClasses= "w-full text-left px-2 py-2 rounded-sm my-1 hover:text-stone-300 hover:bg-stone-600"
            if(project.id===selectedProjectId){
                cssClasses+=" bg-stone-600 text-stone-300"
            }else{
                cssClasses+=' text-stone-400'
            }

          return (
            <li key={project.id}>
              <button
                className={cssClasses}
                onClick={() => onSelectProject(project.id)}
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

export default ProjectsSidebar;
