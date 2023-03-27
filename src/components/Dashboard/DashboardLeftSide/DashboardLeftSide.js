import React from 'react';
import DashboardRoutes from './DashboardRoutes/DashboardRoutes';

const DashboardLeftSide = () => {
    return (
        <div className='md:h-screen  md:sticky top-0 text-gray-700 hidden lg:block lg:col-span-1 p-5'>
           <DashboardRoutes></DashboardRoutes> 
        </div>
    );
};

export default DashboardLeftSide;