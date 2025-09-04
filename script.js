<!DOCTYPE html>
<html lang="en">
<head>
  <title>My Portfolio</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      background: #f4f7fa;
      color: #333;
    }
    header {
      background: #2c3e50;
      color: white;
      padding: 20px;
      text-align: center;
    }
    nav ul {
      list-style: none;
      display: flex;
      justify-content: center;
      margin-top: 10px;
    }
    nav ul li {
      margin: 0 15px;
    }
    nav ul li a {
      color: white;
      text-decoration: none;
      font-weight: bold;
    }
    section {
      padding: 40px 20px;
      max-width: 1000px;
      margin: auto;
    }
    h2 {
      text-align: center;
      margin-bottom: 20px;
      color: #2c3e50;
    }
    .about, .skills, .projects, .contact {
      background: white;
      margin-bottom: 20px;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
    .skills ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    .skills ul li {
      list-style: none;
      margin: 10px;
      background: #3498db;
      color: white;
      padding: 10px 15px;
      border-radius: 5px;
    }
    .projects .card {
      background: #ecf0f1;
      padding: 15px;
      margin: 10px;
      border-radius: 8px;
      box-shadow: 0 0 5px rgba(0,0,0,0.1);
    }
    .contact form {
      display: flex;
      flex-direction: column;
    }
    .contact input, .contact textarea {
      padding: 10px;
      margin: 8px 0;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    .contact button {
      background: #3498db;
      color: white;
      padding: 10px;
      border: none;
      cursor: pointer;
      border-radius: 5px;
    }
    .contact button:hover {
      background: #2980b9;
    }
    footer {
      text-align: center;
      padding: 15px;
      background: #2c3e50;
      color: white;
    }
  </style>
</head>
<body>

  <header>
    <h1>My Portfolio</h1>
    <p>Welcome to my personal website</p>
    <nav>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <section id="about" class="about">
    <h2>About Me</h2>
    <p>Hello! I'm Varshini.M, a passionate web developer and computer science student. 
       I love creating websites, learning new technologies, and building projects that make an impact.
         I enjoy designing responsive, user-friendly, and visually appealing layouts.

I like solving problems with clean and efficient code.

I stay updated with the latest web technologies and trends.

I find satisfaction in turning ideas into functional, interactive websites.

I am motivated to keep learning and improving in frontend and backend development.</p>
  </section>

  <section id="skills" class="skills">
    <h2>My Skills</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Python</li>
      <li>Java</li>
    </ul>
  </section>

  <section id="projects" class="projects">
    <h2>My Projects</h2>
    <div class="card">
      <h3>Portfolio Website</h3>
      <p>A personal website to showcase my work and skills.</p>
    </div>
    <div class="card">
      <h3>College Project</h3>
      <p>A simple web application built for my college assignment.</p>
<h3>Product Showcase Website</h3>
      <p>Like an e-commerce landing page with product cards and hover effects.
</p>
      <h3> Weather App</h3><p>Fetch real-time data using an API.</p>
      <h3>Interactive Landing Page</h3><p> With smooth animations (GSAP/Framer Motion).
</p>
    </div>
    <div class="card">
      <h3>Mini Game</h3>
      <p>A fun game created using HTML, CSS, and JavaScript.</p>
     </div>
  </section>
  <section id="contact">
    <h2>Contact</h2>
    <P>Name: Varshini.M<p>
    <p>Email: varshinimoorthy75@gmail.com</p>
    <p>Phone: +918610339753</p>
    <p>LinkedIn: <a href="#" target="_blank">linkedin.com/in Varshini.M</a></p>
</section>

<footer>
    <p>&copy; 2025 Varshini | All Rights Reserved</p>
</footer>

</body>
</html>