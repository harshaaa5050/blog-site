import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './components/Blog';
import Create from './components/Create';
import Content from './components/Content';

export const Context = React.createContext();

const App = () => {
  const [blogItems, setBlogItems] = useState([]);

  return (
    <Context.Provider value={{ blogItems, setBlogItems }}>
      <Router>
        <Routes>
          <Route path="/blogs" element={<Blog />} />
          <Route path="/createblog" element={<Create />} />
          <Route path="/blogs/:id" element={<Content />} />
        </Routes>
      </Router>
    </Context.Provider>
  );
};

export default App;
