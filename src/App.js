function App() {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center", // ✅ fix alignment
    padding: "20px",
    backgroundColor: "#f8f8f8",
  };

  const ulStyle = {
    display: "flex",
    gap: "20px",
    listStyle: "none",
    margin: 0,          // ✅ remove default spacing
    padding: 0,
  };

  const heroStyle = {
    textAlign: "center",
    marginTop: "60px",
  };

  const imgStyle = {
    width: "300px",
    height: "auto",
    marginTop: "20px",
    borderRadius: "10px",
  };

  const btnStyle = {
    padding: "10px 20px",
    backgroundColor: "black",
    color: "white",
    border: "none",
    cursor: "pointer",
    marginTop: "20px",
  };

  const footerStyle = {
    textAlign: "center",
    marginTop: "80px",
    padding: "20px",
    backgroundColor: "#f1f1f1",
  };

  return (
    <div>
      {/* Navbar */}
      <nav style={navStyle}>
        <h2>SareeSphere</h2>
        <ul style={ulStyle}>
          <li>Home</li>
          <li>Category</li>
          <li>Services</li>
          <li>Cart</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div style={heroStyle}>
        <h1>Welcome to SareeSphere</h1>
        <p>Explore elegant and traditional saree collections</p>

        {/* ✅ Image Added */}
        <img
          src="https://images.unsplash.com/photo-1610030469983-98e550d6193c"
          alt="Saree Collection"
          style={imgStyle}
        />

        <br />

        <button style={btnStyle}>Shop Now</button>
      </div>

      {/* Footer */}
      <footer style={footerStyle}>
        <p>© 2026 SareeSphere. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;