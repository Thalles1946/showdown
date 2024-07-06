import axios from "axios";
import { useEffect, useState } from "react";
import "./Pages.css";

function Experience() {
  const [repos, setRepos] = useState([]);

  async function GetRepos() {
    try {
      const response = await axios.get(
        "https://api.github.com/users/Thalles1946/repos"
      );
      console.log(response.status);

      setRepos(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    GetRepos();
  }, []);

  return (
    <body>
      <h2 className="Body-subtitle">My projects</h2>

      <div className="Experience-body">
        {repos.map((data) => {
          return (
            <a href={data.html_url} target="_blank" className="Experience-item">
              <p>{data.name}</p>
            </a>
          );
        })}
      </div>
    </body>
  );
}
export default Experience;
