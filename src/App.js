import React from 'react'
import Book from './components/Book'
import Nav from './components/Nav'
import { Outlet } from 'react-router-dom';
const App = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(true);
  const handleModeChange = () => {
    setIsDarkMode(!isDarkMode);
  }
  console.log( isDarkMode , 'type')

  React.useEffect(() => {
    const preferredMode = localStorage.getItem('preferredMode');
    setIsDarkMode(preferredMode === 'dark');
  }, []);
  
  React.useEffect(() => {
    localStorage.setItem('preferredMode', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);
  return (
    <div  className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <Nav state={isDarkMode} handleModeChange={handleModeChange} />
      <div className='main'>
{/* Outlet this chage page by route dom   */}
<Outlet />
</div>
    </div>
    
  )
}


export default App

