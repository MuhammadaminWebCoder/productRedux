import React from 'react'
import { getRequest } from '../services/getRequest'
import { Button, Card } from 'antd'
import Meta from 'antd/es/card/Meta'
import { LikeOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import { saveLikeList } from '../store/LikeSlice'

const Products = () => {
    const dispatch = useDispatch()
    const request = getRequest(`/products`)
    return (
    <ul className='flex flex-wrap justify-between w-[1100px] mx-auto'>
        {request?.map(item => (
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
            <Button onClick={() => dispatch(saveLikeList(item))} className='mt-5'><LikeOutlined/></Button>
          </Card>
        ))}
      </ul>
  )
}

export default Products
