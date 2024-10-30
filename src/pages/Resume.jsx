import '../styles/Resume.css';

export default function Resume() {

    return (
      <div className='container'>
        <h1>Resume</h1>

        <p>You can <a href="/Keaton_Greer_Resume.pdf" download>download</a> a PDF file of my resume.</p>

        <h2>Front-end Proficiencies</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>

        <h2>Back-end Proficiencies</h2>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>PostgreSQL</li>
        </ul>
      </div>
    );
  }