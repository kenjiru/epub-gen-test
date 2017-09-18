import * as React from "react";
import { HashRouter, Route, Link } from "react-router-dom";
import { ReactElement } from "react";

class RouterTest extends React.Component<IRouterTestProps> {
    public render(): React.ReactElement<HTMLElement> {
        return (
            <div>
                <h2>Testing react router</h2>
                <HashRouter>
                    <div>
                        <Route path="/" component={Root}/>
                        <Route path="/first" component={First}/>
                        <Route path="/second" component={Second}/>

                        <div className="navigation">
                            <Link to="/first">First</Link> |&nbsp;
                            <Link to="/second">Second</Link>
                        </div>

                        <div>{window.location.href}</div>
                    </div>
                </HashRouter>
            </div>
        );
    }
}

let Root: (props: any) => ReactElement<HTMLElement> = (props: any) => (
    <div>
        <div>Root component</div>
        <div>location: {props.location.pathname}</div>
        <div>{props.children}</div>
    </div>
);

let First: () => ReactElement<HTMLElement> = () => <div>First component</div>;
let Second: () => ReactElement<HTMLElement> = () => <div>Second component</div>;

interface IRouterTestProps {
}

export default RouterTest;
