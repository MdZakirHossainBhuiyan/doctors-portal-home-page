import React from "react";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light pt-5">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link ms-5 active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ms-5" href="/patient">Patient</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ms-5" href="/dashboard">Dashboard</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ms-5 text-white" href="/admin">Admin</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ms-5 text-white" href="/blog">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ms-5 text-white" href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
