import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({handleModeChange ,state}) => {
  return (
    <>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">Dawnload</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/books">books</Link>
        </li>
       
       
      
      </ul>
      <button className='btnDark' onClick={handleModeChange}>{!state ? <i class="fas fa-moon"></i> :   <i class="fas fa-sun"></i>
}</button>
    </div>
  </div>
</nav>


</>
  )
}

export default Nav