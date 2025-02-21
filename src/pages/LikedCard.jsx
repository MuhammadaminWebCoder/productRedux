import React from 'react'
import { getRequest } from '../services/getRequest'
import { Button, Card } from 'antd'
import Meta from 'antd/es/card/Meta'
import { ArrowLeftOutlined, DeleteOutlined, LikeOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { removeLikeList, saveLikeList } from '../store/LikeSlice'
import Navbar from '../components/Navbar'
import { Link, useNavigate } from 'react-router-dom'

const Products = () => {
  const likeList = useSelector(state => state.likeList)
  const navigate = useNavigate()
  const dispatch = useDispatch()
    return (
      <>
        <Navbar/>
        {likeList.length?
        <div className=' w-[1100px] mx-auto'>
        <Button onClick={() => navigate('/')} className='!border-hidden my-3'><ArrowLeftOutlined className='text-2xl '/></Button>
        <ul className='flex flex-wrap justify-between'>
          {likeList?.map(item => (
            <Card
              key={item.id}
              hoverable
              className={'!my-5'}
              style={{
                width: 240,
              }}
              cover={<img className={'h-[200px] object-contain'} alt="example" src={item.images[0]} />}
            >
              <Meta title={item.title} description={item.description} />
              <Button onClick={() => dispatch(removeLikeList(item))} className='mt-5'><DeleteOutlined/></Button>
            </Card>
            ))}
        </ul>
        </div>
        :
        <div className='w-[1100px] mx-auto'>
          <Button onClick={() => navigate('/')} className='!border-hidden my-3'><ArrowLeftOutlined className='text-2xl '/></Button>
          <h1 className='text-2xl text-center'>Like list is undefined or empty <Link className='text-blue-500' to={'/'}>Home page clicked to like</Link> </h1>
        </div>
        }
      </>
  )
}

export default Products
