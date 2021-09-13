// 🚧 Break Out Activity 1: Using <Switch> and <Route>, build out separate pages for <ProjectForm>, <ProjectList>, and <Home> in App.js.
  // ❗ Navigate to the appropriate URLs to check your work!   
  // 💡 Extra Credit: Consider using self-closing Route syntax via "component" attribute (component={?})

// 🚧 Break Out Activity 2: Add a <Link> for each <ProjectItem> that will take the User to the corresponding <ProjectDetail> page.
  // 💡 Extra Credit: Using useHistory(), add a <Link> for each <ProjectDetail> page that will take the User back to “/projects”

// react-router-dom Imports
import { Route, Switch } from 'react-router-dom';

import React, { useEffect, useState } from "react";
import Header from "./Header";
import Home from "./Home";
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";
import ProjectDetail from "./ProjectDetail";

function App() {
  const [projects, setProjects] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then((r) => r.json())
      .then(setProjects);
  }, []);

  function handleDarkModeClick() {
    setIsDarkMode(!isDarkMode);
  }

  function handleAddProject(newProject) {
    const newProjectArray = [newProject, ...projects];
    setProjects(newProjectArray);
  }

  // function someFunction() {
      // return (
      //   <ProjectForm onAddProject={handleAddProject} />
      // )
  // }

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      {/* This component should appear the same across our applications. */}
      <Header
        title="Science Fair"
        isDarkMode={isDarkMode}
        onDarkModeClick={handleDarkModeClick}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />

      <Switch>
        {/* /projects/:id */}
        <Route path="/projects/:id">
          <ProjectDetail /> 
        </Route>
        
        {/* /projects/new */}
        <Route path="/projects/new">
          <ProjectForm onAddProject={handleAddProject} />
        </Route>

        {/* Self-Closing Syntax => 
        
        <Route path="/projects/new" component={someFunction} />

        */}

        {/* /projects */}
        <Route path="/projects">
          <ProjectList projects={projects} />
        </Route>

        {/* / */}
        <Route path="/">
          <Home />
        </Route>

        {/* <Route to="/" component={Home} /> */}
        {/* Self-Closing Syntax => <Route component={} /> */}
      </Switch>
    </div>
  );
}

export default App;
