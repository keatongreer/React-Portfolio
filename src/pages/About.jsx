import "../styles/About.css";

export default function About() {
  return (
    <div className="container">
      <h1>About Me</h1>
      <div className="about-content">
        {/* avatar created with https://avatarmaker.com/ */}
        <img src="/PortfolioAvatar.png" alt="" />
        <div className="about-text">
          <p>
            Hello! My name is Keaton Greer, and I am a full-stack web developer.
            Over the past year, I've honed my skills in HTML, CSS, JavaScript,
            React, Node.js, Express.js and SQL, creating dynamic and responsive
            websites. I’m always excited to take on new challenges and am
            continuously looking for ways to expand my knowledge in web
            development.
          </p>
          <p>
            Outside of web development, I enjoy playing video games that inspire
            my problem-solving skills, watching movies, spending time with
            friends, exercising, and going on walks outdoors. During the winter
            months you can find me watching Indiana Hoosiers football and
            basketball, while in the spring and summer, I enjoy watching college
            and professional lacrosse.
          </p>
        </div>
      </div>
    </div>
  );
}
