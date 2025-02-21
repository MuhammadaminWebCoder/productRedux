import { LikeFilled, SaveOutlined } from '@ant-design/icons'
import { Badge, Button, Input } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
    const likeList = useSelector(state => state.likeList)
  return (
    <div className='w-full bg-blue-500 py-2'>
        <div className="w-[1100px] mx-auto flex items-center justify-between ">
            <p className='text-2xl text-white'>Product</p>
            <div className='flex items-center gap-4'>
                <Button size={'large'}><SaveOutlined className='text-xl'/></Button>
                <Badge onClick={() => navigate('/likedCard')} size="default" count={likeList.length}><Button size={'large'}><LikeFilled className='text-xl'/></Button></Badge>
                <Input size={'large'} placeholder={'Search...'}  />
            </div>
        </div>
    </div>
  )
}

export default Navbar
