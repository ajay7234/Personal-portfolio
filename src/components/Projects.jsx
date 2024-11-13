import Project_prop from "./Project_prop";
import {
  GPT4,
  Portfolio,
  Rocket,
  WellBeing,
  Game,
} from "../constants/Constant";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  SiReact,
  SiTailwindcss,
  SiVite,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNestjs,
  SiMongodb,
  SiRsocket,
  SiSocketdotio,
  SiTsnode,
  SiAmazonaws,
  SiAmazons3,
  SiAmazondynamodb,
  SiNextdotjs,
  SiRedux,
  SiBackbonedotjs,
  SiFirebase,
  SiNodedotjs,
} from "react-icons/si";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const baggageTaxi = {
    title:
      "Baggage Taxi - Comprehensive Luggage Storage and Management Solutions",
    link: "https://www.baggagetaxi.com/",
    description: `I played a key role in the development of Baggage Taxi, a cutting-edge platform providing comprehensive luggage storage and management services designed for travelers, both local and international. The platform simplifies travel logistics by offering flexible storage options with convenient pick-up and delivery services, including airport luggage handling, high-value item storage, and car storage solutions. Travelers can also access premium porter and butler services for an enhanced travel experience.`,
    subListDisc: `The project involved the development of several critical modules, and I was responsible for designing, developing, and implementing both backend and frontend functionality across the following areas:`,
    role: [
      {
        subproject: "Admin Panel",
        desc: `I developed the Admin Panel, which serves as the core control center for managing the Baggage Taxi operations. Key functionalities I implemented include:
        - Task Assignment to Drivers: Admins can efficiently assign baggage collection and delivery tasks to available drivers.
        - Vehicle Management: This feature allows the admin to manage driver vehicle details, ensuring the correct vehicle is assigned to the appropriate driver for each task.
        - Driver-Vehicle Assignment: I created a system where admins can assign vehicles to drivers based on the operational requirements of each booking.
        - Booking and Payment Management: I developed a dashboard that allows admins to manage booking details and track payment statuses, providing full visibility into ongoing and completed transactions.
        - Real-time Driver Location Tracking: By integrating live GPS tracking, the admin panel enables admins to monitor driver locations in real-time, ensuring the smooth execution of baggage pickup and drop-off services.`,
      },
      {
        subproject: "Driver Application",
        desc: `I led the development of the backend for the Driver Application, using NestJS (a Node.js framework), where I handled multiple aspects from scratch:
        - Role-based Authentication: I implemented a secure role-based access control (RBAC) system, ensuring only authorized drivers could access and perform assigned tasks.
        - Task Management: Drivers receive assigned tasks, including baggage pickup and drop-off locations, with the ability to view task details and update the status of their tasks in real-time.
        - Baggage Pickup/Drop-off Workflow: I developed a streamlined process where drivers can check-in and check-out baggage for customers, ensuring precise handovers.
        - Image Capture for Baggage: To ensure accountability, I implemented a feature where drivers can capture images of the baggage upon pickup and delivery, providing a visual record.
        - Driver Location Updates: I integrated real-time driver location tracking, which helps both customers and admins track the movement of drivers throughout the service process.
        - Hub Storage Management: Drivers can also store baggage at designated hub locations, which I integrated with the system to ensure proper handling and storage of customer baggage.`,
      },
      {
        subproject: "Partner Application",
        desc: `I worked extensively on both the backend and frontend (React Native) for the Partner Application, used by hotels and resorts to manage customer bookings for luggage storage and related services. Key functionalities I developed include:
        - Backend Development (NestJS): Built the backend from the ground up, ensuring efficient handling of partner requests and secure data management.
        - Partner Bookings: Partners such as hotels and resorts can create bookings on behalf of their guests for services like luggage pickup, storage, and drop-off.
        - VIP Services: I implemented additional features to provide VIP customers with exclusive benefits, enhancing their travel experience through premium services.
        - Baggage Check-in and Checkout: Developed an easy-to-use interface for partners to check-in and check-out customer baggage, ensuring smooth logistics and customer satisfaction.
        - Frontend Development (React Native): In addition to the backend, I worked on the mobile user interface to ensure that partners could easily navigate the booking and baggage management processes.`,
      },
      {
        subproject: "Customer Application",
        desc: `For the Customer Application, I focused on creating a seamless and user-friendly experience to simplify customer interactions with Baggage Taxi:
        - Booking Creation and Confirmation: Customers can easily create bookings for luggage storage and delivery, receiving real-time confirmation of their orders.
        - Baggage Pickup and Drop-off Management: I implemented features that allow customers to track the status of their luggage, from pickup by the driver to delivery at their chosen destination.
        - Payment Management: I developed a system for customers to securely manage payments, including viewing payment history and receiving notifications upon successful transactions.
        - Live Driver Location Tracking: Using real-time GPS integration, I enabled customers to track the live location of their assigned driver, enhancing the transparency and reliability of the service.
        - Notification Management: I added notification functionality to alert customers about key events such as baggage pickup, drop-off, payment confirmations, and any status updates related to their booking.`,
      },
    ],
  };
  const cayuseProject = {
    title: "Cayuse - Cloud-Based Research Platform",
    description: `I contributed as a front-end developer to the Cayuse project, a comprehensive cloud-based research platform designed to empower organizations in managing globally connected research. This platform enhances researcher collaboration, simplifies research administration, and supports a wide range of applications across the research lifecycle.`,
    link: "https://cayuse.com/",
    role: [
      {
        subproject: "Cayuse Admin",
        desc: `I worked on several key functionalities within the Cayuse Admin system:
        - **Ad-hoc Task Assignment**: Developed features that allow administrators to assign tasks to researchers and other platform users on an ad-hoc basis, facilitating smooth workflow management.
        - **Company and Resource Creation**: Created systems for managing company profiles and resources, allowing administrators to create and allocate necessary resources for researchers.
        - **UI Development (React)**: Implemented multiple user interface pages using React, focusing on responsive design and a seamless user experience for both administrators and end-users.`,
      },
      {
        subproject: "Cayuse Platform",
        desc: `The Cayuse Platform serves as the backbone for the research management process:
        - **Researcher Collaboration**: Facilitated the development of features that enable researchers to collaborate globally, managing projects across multiple locations.
        - **Lifecycle Support**: Built components that simplify tasks throughout the research lifecycle, from proposal creation to submission and tracking of research activities.`,
      },
    ],
  };
  const dynamicBusinessProject = {
    title: "Dynamic Business - User-Driven News and Content Platform",
    link: "https://dynamicbusiness.com",
    description: `Dynamic Business is an interactive platform where users can create, read, and engage with news and articles across various domains such as startups, technology, entrepreneurship, and business news. It serves as a hub for professionals to share knowledge, connect with peers, and stay updated with the latest industry trends. The platform empowers users to contribute content and connect with others in the business ecosystem.`,
    role: [
      {
        subproject: "Full Stack Development",
        desc: `I worked as a full stack developer on the Dynamic Business project, contributing to both frontend and backend aspects:
        - **Frontend UI (React)**: I built user-friendly interfaces to display posts across multiple domains like startups, tech, and entrepreneurship, ensuring a seamless reading experience for users. The post data is dynamically rendered using slugs received from the backend, and the UI adapts to different content types.
        - **Backend (PHP)**: I collaborated with the backend team, which is powered by PHP, to ensure smooth data integration between the frontend and backend, handling dynamic content efficiently using slugs.
        - **Wisepops Integration**: I implemented **Wisepops** to display interactive popups that track user activity, helping improve user engagement and guiding them through the platform. This includes user tracking, behavioral popups, and targeted messages based on user interactions.
        - **API Integration (Frontend)**: I integrated APIs on the frontend side to handle **user authentication** and ensure secure access to the platform. Additionally, I worked on displaying posts dynamically by fetching data from the backend via APIs.
        - **Deployment on Vercel**: I handled the deployment of the project on **Vercel**, ensuring smooth integration with the client’s domain, optimizing performance, and managing DNS configurations to ensure uptime and scalability.`,
      },
    ],
  };
  const ddsSharedProject = {
    title: "DDSHARED - HIPAA-Compliant Data Sharing Platform for Healthcare",
    link: "https://ddshared.com/",
    description: `
DDSHARED is a secure, HIPAA-compliant platform tailored for exchanging sensitive medical information between healthcare providers, patients, and authorized parties. Built to meet stringent data protection standards, DDSHARED ensures safe and efficient sharing of critical health data with robust encryption and advanced security measures.

In addition to secure data exchange, DDSHARED offers a subscription-based file storage system that allows users to upload, store, and manage files, with options to share files selectively with designated members. Leveraging AI, the platform enables seamless data handling and collaboration, enhancing workflow efficiency and supporting healthcare organizations in maintaining compliance and data integrity.`,
    role: [
      {
        subproject: "File Management & Secure Sharing",
        desc: `I worked as a backend developer, implementing core functionality to manage file uploads, updates, retrievals, and sharing with password protection and link expiration, ensuring enhanced security for all shared data.`,
      },
      {
        subproject: "Role-based Authentication",
        desc: `I built a role-based authentication system allowing admins to manage users and their access levels, ensuring data privacy and security are maintained according to user roles.`,
      },
      {
        subproject: "Subscription-based Storage",
        desc: `Developed subscription-based storage allocation to provide users with access to specific storage capacities based on their subscription, making the platform flexible for various needs.`,
      },
      {
        subproject: "Landing Page & Demo Functionality",
        desc: `I created a user-friendly landing page using React, enabling potential customers to request product demos and explore the platform, increasing engagement and reach.`,
      },
      {
        subproject: "AWS Deployment & Security",
        desc: `I deployed DDSHARED on AWS, ensuring a scalable and secure infrastructure. I managed resources and used S3 buckets for secure data storage, fully protecting the platform under HIPAA compliance.`,
      },
    ],
  };
  const dental3DServicesProject = {
    title:
      "Dental 3D Services - Comprehensive Online Case Sharing Platform for Healthcare",
    link: "http://dental3dservices.us",
    description: `Dental 3D Services is a U.S.-based healthcare project focused on simplifying the sharing of medical cases between doctors and patients online. It provides an intuitive platform where admins can manage doctors and patients, and seamlessly share case files, reports, and DICOM files across a secure, cloud-based system.`,
    role: [
      {
        subproject: "Full-Stack Development (Next.js)",
        desc: `I developed the entire platform from scratch using Next.js, building both the frontend user interface and the backend APIs within the same application. This allowed for a smooth integration between the data and user interactions.`,
      },
      {
        subproject: "Database Management (AWS DynamoDB)",
        desc: `Implemented AWS DynamoDB to manage all case-related data, including patient records, shared files, and reports, ensuring fast and secure access to medical information.`,
      },
      {
        subproject: "File Management and Sharing",
        desc: `Created a robust system for listing and uploading files, with all documents securely stored in AWS S3 buckets. Doctors can share case files and reports with other doctors or patients, facilitating real-time collaboration and updates.`,
      },
      {
        subproject: "DICOM Viewer",
        desc: `Developed a DICOM file viewer, allowing doctors to open, view, edit, and share .dcm files directly within the platform.`,
      },
      {
        subproject: "Role-Based Authentication",
        desc: `Implemented role-based access control to ensure secure sharing between admins, doctors, and patients, safeguarding sensitive healthcare data.`,
      },
      {
        subproject: "Firebase Notifications",
        desc: `Integrated real-time notifications using Firebase, alerting users when a file or case is shared or updated, enhancing communication and collaboration.`,
      },
      {
        subproject: "Hosting on AWS EC2",
        desc: `Deployed and hosted the entire project on AWS EC2, ensuring scalability, security, and optimized performance for the platform.`,
      },
    ],
  };
  const aqrableekProject = {
    title: "Aqrableek - Political Social Media Platform",
    link: "https://aqrableek.com",
    description: `Aqrableek is a political social media platform designed for users to share their messages (Kalima) with the world. It allows users to engage in political discourse by posting their thoughts and messages, which are visible to a global audience. The platform empowers people to make their voices heard in a public, digital space.`,
    role: [
      {
        subproject: "Full Stack Development (React.js and Firebase)",
        desc: `I developed the platform from scratch, working on both the frontend using **React.js** and the backend/database using **Firebase**. The integration between the frontend and backend allows for real-time updates and seamless user interactions.`,
      },
      {
        subproject: "Dashboard Functionality",
        desc: `I implemented a feature to showcase the best posts on the dashboard, prioritizing high-quality content and ensuring the most impactful messages are prominently displayed to the user.`,
      },
      {
        subproject: "Real-time Updates",
        desc: `Utilized Firebase's real-time capabilities to ensure that user posts and interactions are updated instantly across the platform, enabling a dynamic and responsive user experience.`,
      },
      {
        subproject: "File Upload and Media Support",
        desc: `Enabled users to attach files and media to their posts, enriching the content shared on the platform.`,
      },
    ],
  };
  const ludoGameProject = {
    title: "LUDO - Game Development",
    description: `LUDO is an interactive board game developed to simulate the traditional gameplay experience in a digital format. The game allows players to compete by rolling dice, moving tokens, and tracking scores, all while maintaining the core mechanics of the classic LUDO game.`,
    role: [
      {
        subproject: "Frontend Development",
        desc: `I worked as a frontend developer for the LUDO game, creating the interactive **Ludo playboard** and **scoreboard** to manage and display game data to users. The playboard dynamically updates in real-time, reflecting all player actions such as token movements, kills, and round completions.`,
      },
      {
        subproject: "Node.js Integration and Socket Communication",
        desc: `The game leverages **Node.js** to manage communication between players using **sockets**. I integrated the frontend with Node.js to receive and display data about each player's turn and moves. This included updates for:
        - **Token Movement**: Handling token movement across the board based on dice rolls.
        - **Token Kill**: Reflecting kills when a player captures another's token.
        - **Round Details**: Displaying real-time round data to keep players informed about ongoing rounds.
        `,
      },
      {
        subproject: "Vanilla JavaScript Implementation",
        desc: `I implemented the Ludo game logic using pure **Vanilla JavaScript**, ensuring that the game runs efficiently in browsers without external libraries, and handles token interactions, dice rolls, and game events dynamically.`,
      },
    ],
  };

  return (
    <section
      id="projects"
      className="EXPERIENCE p-5 min-h-screen font-['Poppins']  max-sm:p-2 container mx-auto"
    >
      <div className="WRAPPER mt-10" data-aos="fade-down">
        <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-5  max-sm:text-4xl  ">
          Projects
        </h1>

        <div
          className="PROJECTS mt-16 grid gap-10 grid-cols-1 max-sm:grid-cols-1"
          data-aos="zoom-out-down"
        >
          <Project_prop
            title={baggageTaxi.title}
            link={baggageTaxi.link}
            para={baggageTaxi.description}
            role={baggageTaxi.role}
            subListDisc={baggageTaxi.subListDisc}
            img={Portfolio}
            github_link=""
            react={
              <Tooltip title="React" arrow>
                <IconButton>
                  <SiReact className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            tailwindcss={
              <Tooltip title="TailWind CSS" arrow>
                <IconButton>
                  <SiTailwindcss className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            vite={
              <Tooltip title="Nestjs" arrow>
                <IconButton>
                  <SiNestjs className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            mongo={
              <Tooltip title="Mongodb" arrow>
                <IconButton>
                  <SiMongodb className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            socket ={
              <Tooltip title="socket" arrow>
                <IconButton>
                  <SiSocketdotio className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />

          <Project_prop
            title={ddsSharedProject.title}
            link={ddsSharedProject.link}
            para={ddsSharedProject.description}
            role={ddsSharedProject.role}
            subListDisc={ddsSharedProject.subListDisc}
            img={Portfolio}
            github_link=""
            node={
              <Tooltip title="NodeJS" arrow>
                <IconButton>
                  <SiTsnode className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            mongo={
              <Tooltip title="Mongodb" arrow>
                <IconButton>
                  <SiMongodb className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            aws={
              <Tooltip title="Aws" arrow>
              <IconButton>
                <SiAmazonaws className="dark:text-slate-200 text-black" />
              </IconButton>
            </Tooltip>
            }
            s3={
              <Tooltip title="s3" arrow>
              <IconButton>
                <SiAmazons3 className="dark:text-slate-200 text-black" />
              </IconButton>
            </Tooltip>
            }
            
          />

          <Project_prop
            title={dental3DServicesProject.title}
            link={dental3DServicesProject.link}
            para={dental3DServicesProject.description}
            role={dental3DServicesProject.role}
            subListDisc={dental3DServicesProject.subListDisc}
            img={Portfolio}
            github_link=""

            nextjs ={
              <Tooltip title="NextJS" arrow>
                <IconButton>
                  <SiNextdotjs className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }

            node={
              <Tooltip title="NodeJS" arrow>
                <IconButton>
                  <SiTsnode className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            dynamodb={
              <Tooltip title="Dynamodb" arrow>
                <IconButton>
                  <SiAmazondynamodb className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            aws={
              <Tooltip title="Aws" arrow>
              <IconButton>
                <SiAmazonaws className="dark:text-slate-200 text-black" />
              </IconButton>
            </Tooltip>
            }
            s3={
              <Tooltip title="s3" arrow>
              <IconButton>
                <SiAmazons3 className="dark:text-slate-200 text-black" />
              </IconButton>
            </Tooltip>
            }
          />

          <Project_prop
            title={cayuseProject.title}
            link={cayuseProject.link}
            para={cayuseProject.description}
            role={cayuseProject.role}
            subListDisc={cayuseProject.subListDisc}
            img={Portfolio}
            github_link=""
            react={
              <Tooltip title="React" arrow>
                <IconButton>
                  <SiReact className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            redux={
              <Tooltip title="Redux" arrow>
                <IconButton>
                  <SiRedux className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            backbonejs={
              <Tooltip title="Backbonejs" arrow>
                <IconButton>
                  <SiBackbonedotjs className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />

          <Project_prop
            title={aqrableekProject.title}
            link={aqrableekProject.link}
            para={aqrableekProject.description}
            role={aqrableekProject.role}
            subListDisc={aqrableekProject.subListDisc}
            img={Portfolio}
            github_link=""
            react={
              <Tooltip title="React" arrow>
                <IconButton>
                  <SiReact className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            tailwindcss={
              <Tooltip title="TailWind CSS" arrow>
                <IconButton>
                  <SiTailwindcss className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            vite={
              <Tooltip title="Firebase" arrow>
                <IconButton>
                  <SiFirebase className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />

          <Project_prop
            title={dynamicBusinessProject.title}
            link={dynamicBusinessProject.link}
            para={dynamicBusinessProject.description}
            role={dynamicBusinessProject.role}
            subListDisc={dynamicBusinessProject.subListDisc}
            img={Portfolio}
            github_link=""
            react={
              <Tooltip title="React" arrow>
                <IconButton>
                  <SiReact className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            tailwindcss={
              <Tooltip title="TailWind CSS" arrow>
                <IconButton>
                  <SiTailwindcss className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            vite={
              <Tooltip title="Vite" arrow>
                <IconButton>
                  <SiVite className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />

          <Project_prop
            title={ludoGameProject.title}
            link={ludoGameProject.link}
            para={ludoGameProject.description}
            role={ludoGameProject.role}
            subListDisc={ludoGameProject.subListDisc}
            img={Portfolio}
            github_link=""
            react={
              <Tooltip title="Javascript" arrow>
                <IconButton>
                  <SiJavascript className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            tailwindcss={
              <Tooltip title="HTML/CSS" arrow>
                <IconButton>
                  <SiHtml5 className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            vite={
              <Tooltip title="NodeJS" arrow>
                <IconButton>
                  <SiNodedotjs className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            socket ={
              <Tooltip title="socket" arrow>
                <IconButton>
                  <SiSocketdotio className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />

          {/* <Project_prop
            title="Thrive"
            para="Thrive is a website which primarily focuses on improving life-style and well-being"
            img={WellBeing}
            link="https://dhairyamajmudar.github.io/Thrive/"
            github_link="https://github.com/DhairyaMajmudar/Thrive"
            html5={
              <Tooltip title="HTML 5" arrow>
                <IconButton>
                  <SiHtml5 className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            javascript={
              <Tooltip title="JavaScript" arrow>
                <IconButton>
                  <SiJavascript className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            css3={
              <Tooltip title="CSS 3" arrow>
                <IconButton>
                  <SiCss3 className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />
          <Project_prop
            title="GPT-4 Website"
            para="GPT 4 is a website which focuses on introduction of AI to the world "
            img={GPT4}
            link="https://dhairya-majmudar-gpt-4.netlify.app/"
            github_link="https://github.com/DhairyaMajmudar/GPT-4-Website"
            react={
              <Tooltip title="React" arrow>
                <IconButton>
                  <SiReact className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            javascript={
              <Tooltip title="JavaScript" arrow>
                <IconButton>
                  <SiJavascript className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            css3={
              <Tooltip title="CSS 3" arrow>
                <IconButton>
                  <SiCss3 className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />
          <Project_prop
            title="Stone-Paper-Scissors Game"
            para="A Stone Paper Scissors game created  to remember childhood memories"
            img={Game}
            link=""
            github_link="https://github.com/DhairyaMajmudar/Stone-Paper-Scissors"
            html5={
              <Tooltip title="HTML 5" arrow>
                <IconButton>
                  <SiHtml5 className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            javascript={
              <Tooltip title="JavaScript" arrow>
                <IconButton>
                  <SiJavascript className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            css3={
              <Tooltip title="CSS 3" arrow>
                <IconButton>
                  <SiCss3 className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />  */}
        </div>
      </div>
    </section>
  );
};
export default Projects;
