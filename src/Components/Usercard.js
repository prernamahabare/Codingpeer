import React from "react";
import { Link } from "react-router-dom";

export default function Usercard(props) {
  const user = props.user;

  return (
    <div className="card user-card">
      <div className="card-body">
        <div className="change-card-display card-firsthalf">
          <div className="change-card-display">
            <div className="user-profilepic">
              <Link to={"/profile/" + user.UserId + "/"}>
                <img
                  src={user.ProfilePicture}
                  alt={user.FirstName + " " + user.LastName}
                  className="user-profilepic"
                />
              </Link>
            </div>
            <div>
              <div className="change-card-display">
                <Link
                  to={"/profile/" + user.UserId + "/"}
                  className="user-name"
                >
                  {user.FirstName} {user.LastName}
                </Link>
                <div className="user-specialty">
                  <i class="fas fa-tag" />
                  &nbsp;&nbsp;{user.Specialty}
                </div>
              </div>
              {/* <div className="user-email">{user.Email}</div> */}
              {/* <div className="user-collegeyear">{user.YearOfCollege}</div> */}
            </div>
          </div>
          <div className="messagesocial-container">
            <div>
              <button className="btn btn-primary btn-sm message-btn">
                Message
              </button>
            </div>
            <div className="user-socials">
              {user.GitHub ? <i class="fab fa-github" /> : ""}
              {user.StackOverflow ? <i class="fab fa-stack-overflow" /> : ""}
              {user.Website ? <i class="fas fa-link" /> : ""}
              {user.LinkedIn ? <i class="fab fa-linkedin" /> : ""}
              {user.Twitter ? <i class="fab fa-twitter" /> : ""}
              {user.Instagram ? <i class="fab fa-instagram" /> : ""}
            </div>
          </div>
        </div>
        <hr />
        <div className="change-card-display card-secondhalf">
          <div>
            <div className="user-skills-title">
              <i class="fas fa-tools"></i> SKILLS
            </div>
            <div className="user-skills">
              {user.Skills && user.Skills.split(",").map((skill) => (
                <div className="user-skill"> {skill}</div>
              ))}
            </div>
          </div>
          <div>
            <div className="user-intrests-title">
              <i class="far fa-heart"></i> INTRESTS
            </div>
            <div className="user-intrests">
              {user.Intrests && user.Intrests.map((intrest) => (
                <div className="user-intrest"> {intrest}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}