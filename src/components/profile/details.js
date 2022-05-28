import React from "react";
import "./desktopProfile.css";
export default function Details() {
  return (
    <div>
      <table class="table table-striped">
        {/* <thead>
    <tr>

      <th scope="col">First</th>
      <th scope="col">Last</th>
     
    </tr>
  </thead> */}
        <tbody>
          <tr>
            <th scope="row">User ID</th>
            <td>abcd@23</td>
          </tr>
          <tr>
            <th scope="row">Name</th>
            <td>Jacob</td>
          </tr>
          <tr>
            <th scope="row">Email ID</th>
            <td>jacob@fbai.com</td>
          </tr>
          <tr>
            <th scope="row">Phone No.</th>
            <td>1234567890</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
