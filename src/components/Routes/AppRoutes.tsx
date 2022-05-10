import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import Login from "../Pages/Login";
import Profile from '../Pages/Profile';
import SignUp from "../Pages/SignUp";
import NotFound404 from "../Pages/NotFound404";
import ForgetPassword from "../Pages/ForgetPassword";
import NewPassword from '../Pages/NewPassword';
import CommonComponents from "../Pages/CommonComponents";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Navigate to={'login'}/>}/>
            <Route path={'login'} element={<Login/>}/>
            <Route path={'signUp'} element={<SignUp/>}/>
            <Route path={'profile'} element={<Profile/>}/>
            <Route path={'forgetPassword'} element={<ForgetPassword/>}/>
            <Route path={'newPassword'} element={<NewPassword/>}/>
            <Route path={'commonComponents'} element={<CommonComponents/>}/>
            <Route path={'*'} element={<NotFound404/>}/>
        </Routes>
    );
};

export default AppRoutes;