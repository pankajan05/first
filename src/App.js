import Comment from './comment';

function getText() {
  return "Enter your Name";
}

function getTime() {
  return new Date().toLocaleTimeString();
}

function App() {
  const buttonText = 'Click me!';
  const jsObj = { text: "This is a sample"};
  return (
      <div>
        <div className="java">
          <div>Hi there , {jsObj.text} </div>
          <div> {getTime()}</div>
          <label className="Name" htmlFor="name">{getText()}</label>
          <input type="text" id="name"/>
          <button style={{backgroundColor: 'red'}}>{buttonText}</button>
        </div>
          <div>
              <Comment author="pankajan"/>
          </div>
      </div>
  );
}

export default App;
