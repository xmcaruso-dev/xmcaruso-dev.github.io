export function WixLeftover() {
  return (
    <div className="wix" aria-label="Reconstruction of a leftover Wix homepage">
      <p className="wix-url">mysite.com</p>
      <div className="wix-top">
        <span className="wix-logo">My Site</span>
        <nav className="wix-nav" aria-hidden="true">
          <span>Home</span>
          <span>About Us</span>
          <span>Services</span>
          <span>Blog</span>
          <span>Contact</span>
        </nav>
      </div>
      <div className="wix-slider">
        <p>Welcome to our website!</p>
        <p className="wix-dots">« · ● · »</p>
      </div>
      <div className="wix-body">
        <h2>Beautiful Title</h2>
        <p>
          We are a professional company dedicated to serving our customers.
          Click here to learn more about our services.
        </p>
        <p>
          Email:{" "}
          <a href="mailto:info@mysite.com">info@mysite.com</a>
        </p>
        <button type="button" tabIndex={-1}>
          Click Here
        </button>
        <h3>Latest News</h3>
        <p>
          <strong>December 12, 2014.</strong> We have moved into our new office!
          More updates coming soon.
        </p>
      </div>
    </div>
  );
}
