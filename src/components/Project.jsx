import '../styles/Project.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Project(props) {

  return (
    <div className="col-md-4 col-lg-3 item">
      <div className="box" style={{ backgroundImage: `url(${props.image})` }}>
      {/* <div className="box"> */}
        <div className="cover">
          <h3 className="name"><a href={props.deployedLink}>{props.title}</a></h3>
          {props.subtitle && <p className="title">{props.subtitle}</p>}
          <div className="social">
            <a href={props.repoLink}><i className="bi bi-github"></i></a>
          </div>
        </div>
      </div>
    </div>               
  );
}