import Comment from './comment';
import Confirm from "./Confirm";
import Class from './Class';

function getText() {
    window.navigator.geolocation.getCurrentPosition(
        position => console.log(position),
        (err) => console.log(err)
    );
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

          <Comment author="pankajan"/>
          <Confirm>
              <Comment author="Sabinaya"/>
          </Confirm>
          <div style={{paddingTop: 50}}>
          </div>
          <Confirm>
              This is blank
          </Confirm>

          <div style={{paddingTop: 50}}>
          </div>

          <Class/>
      </div>
  );
}

export default App;
