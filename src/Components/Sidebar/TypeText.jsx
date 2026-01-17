import Typewriter from "typewriter-effect";
const TypeText = () => {
  return (
    <>
      <div className="type-text">
        <h3 className="fs-5 fw-bold">
          HELLO, I'M <br />
        </h3>
        <span className="highlight">
          <Typewriter
            options={{
              strings: [
                "Backend Developer",
                "Frontend Developer",
                "Full Stack Developer",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </div>
      <p>
        Junior backend developer with hands-on experience in,
        <span className="para-color">
          Node.js, ExpressJs, ReactJs, MongoDB, Mongoose, Rest APIs, Git
        </span>
        ,and <span className="para-color">Postman</span>. Completed 3-month
        backend and frontend developer internships, contributing to real project
        tasks and improvements. Focused on backend architecture, clean code
        practices, and continuous learning.
      </p>
    </>
  );
};

export default TypeText;
