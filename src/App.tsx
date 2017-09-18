import * as React from "react";
import { ReactElement, ReactHTML } from "react";

import InteractionTest from "./interaction-test/InteractionTest";

import "./App.css";

class App extends React.Component<IAppProps> {
    public render(): ReactElement<ReactHTML> {
        return (
            <div className="app">
                <h1>ePub test</h1>
                <InteractionTest/>
            </div>
        );
    }
}

interface IAppProps {
}

export default App;
