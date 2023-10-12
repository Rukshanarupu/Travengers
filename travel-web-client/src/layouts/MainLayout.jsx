import Header from '../Pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Footer from '../Pages/Shared/Footer';

const MainLayout = () => {
    return (
        <div 
        // className='min-h-screen relative bg-cover bg-center flex justify-center items-center'
        >
            {/* <div className='bg-red-100 opacity-40 min-h-full w-full absolute object-contain '>  </div> */}
            <Header/>
            <Outlet></Outlet>
            <Footer/>
            <Toaster></Toaster>
        </div>
    );
};

export default MainLayout;