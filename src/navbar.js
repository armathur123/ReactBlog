const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Arjun Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                {/*inline css example*/}
                <a href="/create" style={{ 
                    color: "white",
                    backgroundColor: '#f1356d', 
                    borderRadius: '8px'
                }}>New Blog</a>
            </div>
        </nav>
    );
}
 
export default Navbar;