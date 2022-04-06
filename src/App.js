import React from 'react';
import logo from './logo.svg';
import Component from './components/Component'
import Properties from './components/Properties';
import State from './components/State';
import RenderConditional from './components/RenderConditional';
import RenderElements from './components/RenderElements';
import { EventsES6, EventsES7, MoreEvents } from './components/Events';
import Father from './components/ComponentsCommunication';
import './App.css';
import LifeCycle from './components/LifeCycle';
import AjaxApis from './components/AjaxApi';
import TimerHook from './components/TimerHooks';
import ScrollHooks from './components/ScrollHooks';
import ClockHooks from './components/ClockHooks';
import AjaxApiHooks from './components/AjaxApiHooks';
import HooksCustoms from './components/HooksCustoms';
import References from './components/References';
import Forms from './components/Forms';
import Styles from './components/Styles';
import StyledComponents from './components/StyledComponents';
import Bootstrap from './components/Bootstrap';
import Bulma from './components/Bulma';
import ReactBootstrap from './components/ReactBootstrap';
import MaterialUI from './components/MaterialUI';

function App() {
  return (
    <div className="App">
      {/* <Bootstrap /> */}
      {/* <ReactBootstrap /> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <section>
          {/* <Bulma /> */}
          <MaterialUI />
          <hr />
          <Component msg="Hola soy un componente funcional expresada desde una prop" />
          <hr />
          <Properties 
            string="Esto es una cedena de texto"
            number={19}
            bool={true}
            array={[1,2,3,4]}
            object={{name:"Jon",email:'Jon@test.com'}}
            function={num => num*num }
            elementReact={<i>Esto es un element React</i>}
            componentReact={<Component msg="Soy un componente pasado como prop" />}
          />
          <hr />
          <State />
          <hr />
          <RenderConditional />
          <hr />
          <RenderElements />
          <hr />
          <EventsES6 />
          <hr/>
          <EventsES7 />
          <hr />
          <MoreEvents />
          <hr />
          <Father />
          <hr />
          <LifeCycle />
          <hr />
          <AjaxApis />
          <hr />
          <TimerHook />
          <hr />
          <ScrollHooks />
          <hr />
          <ClockHooks />
          <hr />
          <AjaxApiHooks />
          <hr />
          <HooksCustoms />
          <hr />
          <References />
          <hr />
          <Forms />
          <hr />
          <Styles />
          <hr />
          <StyledComponents />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </section>
      </header>
    </div>
  );
}

export default App;
