import React from 'react';
import { Link } from 'react-router-dom';

const DashboardRoutes = () => {
    return (
        <div className='grid space-y-4'>
            <Link className="p-2 hover:bg-gray-500 hover:text-white bg-slate-200" to="/dashboard/users">
                        All User
                    </Link>
        </div>
    );
};

export default DashboardRoutes;