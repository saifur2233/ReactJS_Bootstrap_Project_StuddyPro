import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('https://study-pro-backend.vercel.app/category')
        .then(res=> res.json())
        .then(data => setCategories(data));
      },[]);
  return (
    <div>
        <h4 className='text-warning'>All Categories</h4>
                {categories.map(category => <p 
          key={category.id}>
           <Link className='btn btn-primary' to={`/courses/${category.id}`}>{category.name}</Link>
            </p>)}

            <div className='my-3'>
              <h4 className='text-warning'>Complete Order:</h4>
            <Link className='btn btn-success mb-2' to={'/cart'}>View Cart</Link>
            <Link className='btn btn-danger' to={'/checkout'}>CheckOut</Link>
            </div>
    </div>
  )
}

export default LeftSideNav