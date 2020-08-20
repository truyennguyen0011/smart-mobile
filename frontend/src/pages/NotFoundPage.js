import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = (props) => {
  return <div id="notfound">
    <div class="notfound">
      <div class="notfound-404">
        <h1>Oops!</h1>
        <h2>404 - The Page can't be found</h2>
      </div>
      <Link to={props.to}>Go TO {props.label}</Link>
    </div>
  </div>;
}
export default NotFoundPage;
