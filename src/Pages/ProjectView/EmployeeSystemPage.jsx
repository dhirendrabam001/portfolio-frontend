import HireButton from "../../Components/Sidebar/HireBotton";
import { FaArrowRight } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import AnimationPath from "../../Animated/AnimationPath";

const EmployeeSystemPage = () => {
  return (
    <>
      <section className="dashboardpage-main">
        <AnimationPath direction="left" delay={0.2}>
          <div className="mb-2 text-center">
            <h2 className="fw-bold fs-1">
              Case Study: MERN Stack Employee Management System
            </h2>

            <p>
              A full-stack Employee Management System built using the MERN Stack
              to simplify employee administration, attendance management, and
              organizational workflows through a secure, responsive, and modern
              web application.
            </p>

            <HireButton />
          </div>
        </AnimationPath>

        <div className="dashboard-content">
          <div className="row">
            {/* Left Side */}
            <div className="col-12 col-md-4 col-lg-4">
              <AnimationPath direction="bottom" delay={0.2}>
                <div className="dashboard-info">
                  <div className="dashboard-client mb-3">
                    <h5>Project:</h5>
                    <h4>Employee Management System</h4>
                  </div>

                  <div className="dashboard-client mb-3">
                    <h5>Category:</h5>
                    <h4>Full Stack Web Application</h4>
                  </div>

                  <div className="dashboard-client mb-3">
                    <h5>Technologies:</h5>
                    <h4>
                      React.js, Bootstrap 5, Node.js, Express.js, MongoDB, Redux
                      Toolkit & JWT
                    </h4>
                  </div>

                  <div className="dashboard-client mb-3">
                    <h5>Key Features:</h5>
                    <h4>
                      Authentication, Employee CRUD, Attendance, Dashboard,
                      Role-Based Access
                    </h4>
                  </div>

                  <div className="dashboard-client">
                    <h5>Live Website:</h5>
                    <h4>
                      <a
                        href="https://myems-app.vercel.app"
                        target="_blank"
                        rel="noreferrer"
                        className="text-decoration-none"
                      >
                        Visit Project <FaArrowRight />
                      </a>
                    </h4>
                  </div>
                </div>
              </AnimationPath>
            </div>

            {/* Right Side */}
            <div className="col-12 col-md-8 col-lg-8">
              <AnimationPath direction="left" delay={0.2}>
                <div className="dashboard-container">
                  <div className="dashboard-img">
                    <img
                      src="/ems-img.webp"
                      className="img-fluid"
                      alt="Employee Management System"
                    />
                  </div>

                  <div className="dashboard-para">
                    <p>
                      The Employee Management System is a modern MERN Stack web
                      application developed to streamline employee records,
                      attendance tracking, authentication, and administrative
                      operations. It provides a secure and intuitive interface
                      for administrators and employees while ensuring
                      scalability, responsiveness, and high performance across
                      all devices.
                    </p>
                  </div>

                  {/* Project Requirements */}

                  <div className="project-req">
                    <h2 className="fw-bold">Project Requirements</h2>

                    <p>
                      <GoDotFill />
                      Secure authentication using JWT and protected routes.
                    </p>

                    <p>
                      <GoDotFill />
                      Employee profile management with complete CRUD
                      functionality.
                    </p>

                    <p>
                      <GoDotFill />
                      Attendance management and employee status tracking.
                    </p>

                    <p>
                      <GoDotFill />
                      Role-based access control for administrators and
                      employees.
                    </p>

                    <p>
                      <GoDotFill />
                      Responsive dashboard optimized for desktop, tablet, and
                      mobile devices.
                    </p>

                    <p>
                      <GoDotFill />
                      RESTful API integration between frontend and backend.
                    </p>

                    <p>
                      <GoDotFill />
                      Clean UI with reusable React components and Redux Toolkit
                      for state management.
                    </p>
                  </div>

                  {/* Project Overview */}

                  <div className="Project-overview">
                    <h2 className="fw-bold">Project Overview</h2>

                    <p>
                      The Employee Management System is a comprehensive business
                      application designed to digitize and simplify daily HR
                      operations. Built with React.js, Node.js, Express.js, and
                      MongoDB, the system enables administrators to manage
                      employees, monitor attendance, maintain employee records,
                      and control user access through a secure authentication
                      system. The application follows a scalable component-based
                      architecture and RESTful API design, ensuring maintainable
                      code and efficient performance for real-world business
                      environments.
                    </p>
                  </div>

                  {/* Challenges */}

                  <div className="project-challenge">
                    <h2 className="fw-bold">The Challenges</h2>

                    <p>
                      Developing a secure and scalable employee management
                      platform required careful implementation of user
                      authentication, role-based authorization, and protected
                      routes. Managing application state across multiple modules
                      while keeping the interface responsive and user-friendly
                      was another key challenge. Ensuring seamless communication
                      between the React frontend and Express backend, along with
                      efficient MongoDB data management, demanded a structured
                      architecture and optimized API design.
                    </p>
                  </div>

                  {/* Solution */}

                  <div className="project-solution">
                    <h2 className="fw-bold">The Approach & Solution</h2>

                    <p>
                      A modern MERN Stack architecture was adopted to build a
                      secure, maintainable, and scalable application. React.js
                      with Redux Toolkit was used to create reusable UI
                      components and manage application state efficiently.
                      Express.js and Node.js powered RESTful APIs, while MongoDB
                      provided flexible data storage. JWT authentication and
                      protected routes enhanced security, and Bootstrap 5
                      ensured a responsive, mobile-friendly interface. The final
                      solution delivers a fast, reliable, and professional
                      employee management platform suitable for organizations of
                      different sizes.
                    </p>
                  </div>
                </div>
              </AnimationPath>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EmployeeSystemPage;
