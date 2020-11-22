// import React, { useContext } from 'react';
// import { Route, Redirect, RouteProps } from 'react-router-dom';
// import { AuthContext } from '../../lib/api-calls/AuthContext';

// export const AuthenticatedRoute = (children) => {
//     const auth = useContext(AuthContext);
//     return <Route render={() =>
//         (auth.isAuthenticated()
//             ? <>{children}</>
//             : <Redirect to="/Login" />)}></Route>
// }