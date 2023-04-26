import React from 'react'
function Header() {
  return (
    <>
    <nav class="navbar">
  <div class="container-fluid">
    <a href='/' class="navbar-brand text-light animate__animated animate__zoomIn"><h3 id='watch'>Online Watch!</h3></a>
    <form class="d-flex" role="search">
      <input class="form-control me-2 animate__animated animate__zoomIn" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success animate__animated animate__zoomIn" type="submit">Search</button>
    </form>
  </div>
</nav>
    </>
  )
}

export default Header;