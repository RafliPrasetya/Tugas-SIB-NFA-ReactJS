function Footer() {
  return (
    <div className="container">
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
        <div className="col mb-3">
          <a href="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
            <i className="fa-solid fa-book fa-2xl" style={{ color: "#74C0FC" }}></i>
          </a>
          <p className="text-body-secondary">&copy; 2025 Rafli Dev</p>
        </div>

        <div className="col mb-3"></div>

        <div className="col mb-3">
          <h5>Contact</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">08125499795</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">rafliblabla@gmail.com</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">rafli.blog</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
