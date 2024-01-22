import {Routes, Route} from 'react-router-dom';

import {Home} from '../pages/Home';
import { CreatePlate } from '../pages/CreatePlate';
import { EditPlate } from '../pages/EditPlate';
import { PlateDetails } from '../pages/PlateDetails';
import { SignUp } from '../pages/SignUp/SignUp';
import { SignIn } from '../pages/SignIn/SignIn';


export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/createPlate" element={<CreatePlate/>}/>
            <Route path="/signIn" element={<SignIn/>}/>
            <Route path="/register" element={<SignUp/>}/>
            <Route path="/editPlate" element={<EditPlate/>}/>
            <Route path="/plateDetails" element={<PlateDetails/>}/>
        </Routes>
    )
}

