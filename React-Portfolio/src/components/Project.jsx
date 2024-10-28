import '../styles/Project.css'

export default function Project(props) {

  return (
    <div className="col-md-4 col-lg-3 item">
      <div className="box" style={{ backgroundImage: `url(${props.image})` }}>
      {/* <div className="box"> */}
        <div className="cover">
          <h3 className="name">Tim Cook</h3>
          <p className="title">Android Developer</p>
          <div className="social">
            <a href="#"><i className="fa fa-facebook-official"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>               
  );
}