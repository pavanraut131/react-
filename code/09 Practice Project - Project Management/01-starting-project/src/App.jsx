import { useState } from "react";
import NewProject from "./components /NewProject";
import NoprojectSelected from "./components /NoprojectSelected";
import ProjectSidebar from "./components /ProjectSidebar";
import Slectedproject from "./components /Slectedproject";

function App() {
  const [Projectstate, setProjectstate] = useState({
    selectedprojectid: undefined,
    projects: [],
    tasks: [],
  });
  const handleaddtask = (task) => {
    setProjectstate((prev) => {
      const taskid = Math.random();  
      const newtask = {
        task: task,
        projectId: prev.selectedprojectid,
        id: taskid,
      };
      return {
        ...prev,
        tasks: [newtask, ...prev.tasks],
      };
    });
  };
  const handledeltetask = () => {};
  const handleselectproject = (id) => {
    setProjectstate((prev) => {
      return {
        ...prev,
        selectedprojectid: id,
      };
    });
  };
  const handleStart = () => {
    setProjectstate((prev) => {
      return {
        ...prev,
        selectedprojectid: null,
      };
    });
  };
  const handlecancel = () => {
    setProjectstate((prev) => {
      return {
        ...prev,
        selectedprojectid: undefined,
      };
    });
  };

  const handleaddproject = (projectdata) => {
    const newproject = {
      ...projectdata,
      id: Math.random(),
    };
    setProjectstate((prev) => {
      return {
        ...prev,
        projects: [...prev.projects, newproject],
      };
    });
  };
  const handledelete = () => {
    setProjectstate((prev) => {
      return {
        ...prev,
        selectedprojectid: undefined,
        projects: prev.projects.filter(
          (project) => project.id !== prev.selectedprojectid
        ),
      };
    });
  };
  const selectedproject = Projectstate.projects.find(
    (project) => project.id === Projectstate.selectedprojectid
  );
  let content = (
    <Slectedproject
      tasks={Projectstate.tasks}
      setdelete={handledelete}
      project={selectedproject}
      onaddtask={handleaddtask}
      ondeletetask={handledeltetask}
    />
  );
  if (Projectstate.selectedprojectid === null) {
    content = (
      <NewProject setaddproject={handleaddproject} setcancel={handlecancel} />
    );
  } else if (Projectstate.selectedprojectid === undefined) {
    content = <NoprojectSelected setstart={handleStart} />;
  }
  console.log(Projectstate);

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        setstart={handleStart}
        projects={Projectstate.projects}
        selectedproject={handleselectproject}
      />
      {content}
    </main>
  );
}

export default App;
