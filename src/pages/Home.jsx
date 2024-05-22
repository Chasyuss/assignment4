import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div>
            <h1> HOME </h1>
            <Link to="/detail/1"> Detail ID 1로 가기 </Link>
            <Link to="/detail/2"> Detail ID 2로 가기</Link>
        </div>
    );
};

export default Home;