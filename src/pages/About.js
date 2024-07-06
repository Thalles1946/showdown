import "./Pages.css";

function About() {
  return (
    <body className="App-body">
      <h2 className="Body-subtitle">Who I am?</h2>
      <div className="About-Content">
        <p className="Body-description" style={{ width: "50%" }}>
          <p>
            As a FullStack Developer, I possess a passion for programming that
            goes beyond the simple task of writing code. I value the opportunity
            to be part of a team where I can contribute my knowledge while
            continuously learning.
          </p>
          <p>
            With two years of experience in web and API development, I have
            worked with technologies such as React, GraphQL, JavaScript,
            TypeScript, Java, C#, and Material UI. My focus has been on
            developing responsive applications, adhering to UI/UX principles.
            Recently, I completed my first FullStack project, creating an API in
            Python using Flask and GraphQL, and using React for the frontend.
            Currently, I am involved in developing a React Native application
            with a NodeJS API.
          </p>
          <p>
            I am quick to learn new languages and computing concepts, having
            self-taught React, among other skills. Additionally, I possess
            advanced English language skills, allowing me to read code
            documentation and communicate with ease.
          </p>
          <p>
            My main programming languages include JavaScript, TypeScript, C#,
            and Java. I am always seeking opportunities to enhance my skills and
            contribute significantly to challenging and innovative projects.
          </p>
        </p>
        <img
          src="https://media.licdn.com/dms/image/D4D03AQHZGQgr7OGqyg/profile-displayphoto-shrink_200_200/0/1705429312643?e=1725494400&v=beta&t=tkiKP118itr2UW5wuBpCSisjO4OtXjFf0jsPnw_vdYc"
          alt="HappyFace"
          width="300"
          height="300"
          style={{
            borderRadius: "1000px",
            marginRight: "10%",
            alignSelf: "center",
            marginBottom: "5%",
          }}
        />
      </div>
    </body>
  );
}
export default About;
