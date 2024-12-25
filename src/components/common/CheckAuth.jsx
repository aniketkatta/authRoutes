import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const CheckAuth = ({token,userRole,children}) => {
    const location=useLocation();
console.log(userRole);
console.log(location.pathname);

    if(location.pathname==='/'){
        if(!token){
            return <Navigate to='/auth/login' />
        }else{
            if(userRole==='productManager'){
                return <Navigate to='/productManager/dashboard' />
            }
            else if(userRole==='platformUser'){
                return <Navigate to='/platformUser/dashboard' />
            }
            else{
                return <Navigate to='/companyUser' />
            }
        }
    }


    if(!token && !(location.pathname.includes('/login') || location.pathname.includes('/register'))){
        return <Navigate to='/auth/login' />
    }

    if(token && (location.pathname.includes('/login') || location.pathname.includes('/register'))){
        if(userRole==='productManager'){
            return <Navigate to='/productManager/dashboard' />
        }
        else if(userRole==='platformUser'){
            return <Navigate to='/platformUser/dashboard' />
        }
        else{
            return <Navigate to='/companyUser' />
        }
    }


    // if(token && (
    //     // (userRole!=='productManager' && location.pathname.includes('productManager')) ||
    //     (userRole!=='platformUser' && location.pathname.includes('platformUser')) ||
    //     (userRole!=='companyUser' && location.pathname.includes('companyUser'))
    // )){
    //     return <Navigate to='/unauth' />
    // }
    if (token && (
        (userRole === 'platformUser' && location.pathname.includes('/productManager')) ||
        (userRole === 'companyUser' && location.pathname.includes('/productManager')) ||
        (userRole === 'productManager' && location.pathname.includes('/platformUser'))
    )) {
        return <Navigate to="/unauth" />;
    }

    // if(token && userRole==='productManager') return <Navigate to='/productManager/dashboard' />
    // if(token && userRole==='platformUSer') return <Navigate to='/platformUSer/dashboard' />
  return (
    <>
      {children}
    </>
  )
}

export default CheckAuth
