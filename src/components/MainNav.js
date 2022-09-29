import React from 'react';
import { Link } from 'react-router-dom';

const MainNav = ({ shopList }) => {
    // 중복이 제거된 배열 category

    const ncate = shopList.filter((itm, idx, it) => idx === it.findIndex(t => t.cate === itm.cate))
    const n2cate = [...new Set(ncate)]
    return (
        <ul>
            <li><Link to='/'>BRAND</Link></li>
            <li><Link to='/shopList'>SHOPPING</Link></li>
            {
                ncate.map(ca => {
                    return ca.cate && <li className='list'><Link to={'/shopList/' + ca.cate}>{ca.cate}</Link></li>
                })
            }
            <li><Link to='/'>CS CENTER</Link></li>
        </ul>
    )
}

export default MainNav;