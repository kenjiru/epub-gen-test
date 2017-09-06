import * as React from "react";
import { ReactElement, ReactHTML } from "react";

import "./App.css";

class App extends React.Component<IAppProps, IAppState> {
    public state: IAppState = {
        clickCount: 0
    };

    public render(): ReactElement<ReactHTML> {
        return (
            <div className="app">
                <h1>ePub test</h1>
                <h2>Testing events</h2>
                {this.renderClickMessage()}
                <div>
                    Click on the button
                    <button onClick={this.handleClick}>Click me</button>
                </div>
            </div>
        );
    }

    private renderClickMessage(): ReactElement<ReactHTML> | undefined {
        if (this.state.clickCount === 0) {
            return;
        }

        return <div>The button was clicked: {this.state.clickCount} times!</div>;
    }

    private handleClick = () => {
        this.setState({
            clickCount: this.state.clickCount + 1
        });
    }
}

interface IAppState {
    clickCount: number;
}

interface IAppProps {
}

export default App;
