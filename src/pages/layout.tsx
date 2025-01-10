import Header from '../components/Header';
import SideHeader from '../components/SideHeader';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    return(
        <>
            <Header/>
            <SideHeader/>
            <Outlet/> {/*Allows for child route to be rendered*/}
        </>
    )
}
