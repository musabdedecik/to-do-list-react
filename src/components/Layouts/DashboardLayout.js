import { Route, Switch } from "react-router-dom";
import { Routes } from "../../config/routes";
import NotFound from "../Pages/NotFound";
import NavigationBar from "../Views/NavigationBar/NavigationBar";

const DashboardLayout = () => {
    return (
        <>
            <NavigationBar />
            <div style={{paddingLeft:"26px", paddingRight:"26px"}}>
                <Switch>
                    {Routes.map((route) => {
                        return (
                            <Route path={route.path} key={route.name} exact render={(props) => (
                                <route.component {...props} {...route.props} />
                            )} />
                        )
                    })}
                    <Route component={NotFound} />
                </Switch>
            </div>
        </>
    )
}

export default DashboardLayout;