import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RouteLink from './Routes';
import { DefaultLayout } from './Components/Layouts';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {RouteLink.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
