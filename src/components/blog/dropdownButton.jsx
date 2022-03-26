import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Style = styled.div`
  /* Dropdown Button */
  .dropbtn {
    background-color: #e44331;
    color: white;
    padding: 16px;
    padding-left: 32px;
    padding-right: 32px;
    min-width: 160px;
    font-size: 18px;
    font-weight: 500;
    border: none;
    border-radius: 32px;
    transition: display 1s;
  }

  /* The container <div> - needed to position the dropdown content */
  .dropdown {
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-content: start;
    width: 200px;
  }

  /* Dropdown Content (Hidden by Default) */
  .dropdown-content {
    transition: display 1s;
    display: none;
    position: absolute;
    background-color: #e44331;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    border-radius: 32px;
    /* transform: translateY(-64px); */
    text-align: center;
    font-weight: 500;
  }

  /* Links inside the dropdown */
  .dropdown-content a {
    color: white;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    border-radius: 64px;
  }

  /* Change color of dropdown links on hover */
  .dropdown-content a:hover {
    background-color: none;
    font-size: 20px;
    font-weight: 700;
  }

  /* Show the dropdown menu on hover */
  .dropdown:hover .dropdown-content {
    display: block;
  }

  /* Change the background color of the dropdown button when the dropdown content is shown */
  .dropdown:hover .dropbtn {
    background-color: white;
    transition: backgroundColor 1s;
  }
`

function DropdownButton({ btnText }) {
  return (
    <Style>
      <div class="dropdown">
        <button class="dropbtn">Filter: {btnText}</button>
        <div class="dropdown-content">
          <Link to="/blog/news">News</Link>
          <Link to="/blog/guides">Guides</Link>
          <Link to="/blog/featured">Featured</Link>
          <Link to="/blog/">All blogs</Link>
        </div>
      </div>
    </Style>
  )
}

export default DropdownButton
