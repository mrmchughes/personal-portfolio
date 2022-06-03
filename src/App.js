function App() {
  return (
    <div className="App">
      <section className="flex flex-row">
        <img src={require("./imgs/profile image.png")} alt="Michael Hughes" />
        <div>
          <h2>About</h2>
          <p>
            lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit
            amet
          </p>
        </div>
      </section>

      <section>
        <h2>My work</h2>
      </section>
    </div>
  );
}

export default App;

/* Want to get this working for increased responsiveness 
<picture>
  <source srcSet={require("./imgs/profile image.webp")} />    
</picture>
*/
