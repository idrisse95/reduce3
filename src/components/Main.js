import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import { deux, quatre, rien, theme, trois, un } from '../Redux';

export const Main = () => {

    const selectTheme = useSelector(state => state.theme.theme)
   

    // const dispatch = useDispatch()





    // if (selectTheme === "bg-blue-300") {
    //     dispatch(un());
    // } else if (selectTheme === "bg-black text-white") {
    //     dispatch(deux());
    // } else if (selectTheme === "bg-red-300") {
    //     dispatch(trois());
    // } else if (selectTheme === "bg-yellow-300") {
    //     dispatch(quatre());
    // } else if (selectTheme === "bg-blue-900 text-white") {
    //     dispatch(rien());
    // }

    return (
        <div className={`px-[50px] py-[70px] h-screen ${selectTheme}`}>
            <div className='flex justify-center'>
                <div className='w-[60%] text-center'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita porro sint voluptatibus dicta quis quae, possimus, rerum modi perferendis recusandae molestias quibusdam labore deleniti odio eligendi nobis a soluta ullam?
                </div>
            </div>
            <div className='flex gap-10 justify-center mt-20'>
                <div className='w-[40%]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita porro sint voluptatibus dicta quis quae, possimus, rerum modi perferendis recusandae molestias quibusdam labore deleniti odio eligendi nobis a soluta ullam?
                </div>
                <div className='w-[40%]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita porro sint voluptatibus dicta quis quae, possimus, rerum modi perferendis recusandae molestias quibusdam labore deleniti odio eligendi nobis a soluta ullam?
                </div>
            </div>
        </div>
    )
}
