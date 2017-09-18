import * as React from "react";
import { ReactElement, ReactHTML } from "react";

class InteractionTest extends React.Component<IInteractionTestProps, IInteractionTestState> {
    public state: IInteractionTestState = {
        clickCount: 0
    };

    public render(): React.ReactElement<HTMLElement> {
        return (
            <div className="interaction-test">
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

interface IInteractionTestState {
    clickCount: number;
}

interface IInteractionTestProps {
}

export default InteractionTest;
