import '../styles/Project.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Project(props) {

  return (
    <div className="col-md-4 col-lg-3 item">
      <div className="box" style={{ backgroundImage: `url(${props.image})` }}>
      {/* <div className="box"> */}
        <div className="cover">
          <h3 className="name">Tim Cook</h3>
          <p className="title">Android Developer</p>
          <div className="social">
            <a href="#"><i className="bi bi-github"></i></a>
          </div>
        </div>
      </div>
    </div>               
  );
}