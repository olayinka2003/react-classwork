import "./App.css";
import { ToDo } from "./component/ToDo";
import { Counter } from "./component/Counter";
// import { Themeprovider } from "./Hooks/Themeprovider";
// import { Themetogglebutton } from "./Hooks/Themetogglebutton";
// import { CurrentTheme } from "./Hooks/CurrentTheme";
// import Home from "./component/Home";
// import Box from "./component/Box";
// import Button from "./component/Button";
// import { Card } from "./component/Card";
// import ParentComponent from "./component/ParentComponent";
// import Form from "./component/Form";
// import { Change } from "./component/Change";

function App() {
  return (
    <div className="App">
      {/* <Change />
      <Home name="olayinka" age="21" />
      <Button details="my-properties" />
      <Box name="yinka" work="front-end developer" />
      <Box name="bolaji" work="Back-end developer" />
      <Card>
        <h1>Card</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
          voluptatibus quaerat quo, quibusdam quidem quasi, quia, exercitationem
          voluptates nihil.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
          voluptatibus quaerat quo, quibusdam quidem quasi, quia, exercitationem
          voluptates nihil.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
          voluptatibus quaerat quo, quibusdam quidem quasi, quia, exercitationem
          voluptates nihil.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa</p>
      </Card>
      <ParentComponent />
      <Form /> */}
      {/* <Themeprovider>
        <h1>Theme Toggle</h1>
        <Themetogglebutton />
        <CurrentTheme />
      </Themeprovider> */}
      <ToDo/>
      <Counter />
    </div>
  );
}

export default App;
