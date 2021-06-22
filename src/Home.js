const Home = () => {

    const handleClick = () => {
        console.log('Hello idiots');
    }

    const handleClickAgain = (name) => {
        console.log('hello ' + name);
    }
    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick = {handleClick}>CLick me</button>
            <button onClick = {() => {
                handleClickAgain('mario')
            }}></button>
        </div>
    );
}
 
export default Home;