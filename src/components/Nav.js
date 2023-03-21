import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import { deux, quatre, rien, theme, trois, un } from '../Redux';

export const Nav = () => {

    const selectTheme = useSelector(state => state.theme.theme)
    const navColor = useSelector(state => state.theme.deux)

    const dispatch = useDispatch()



    const Select = () => {
        const valeur = document.getElementById('oui').value

        if (valeur === "un") {
            dispatch(un());
        } else if (valeur === "deux") {
            dispatch(deux());
        } else if (valeur === "trois") {
            dispatch(trois());
        } else if (valeur === "quatre") {
            dispatch(quatre());
        } else if (valeur === "th") {
            dispatch(rien());
        }
    }

    return (
        <div className={`${navColor} uppercase flex gap-10 justify-center text-white py-4`}>
            <div>Acceuil</div>
            <div>Home</div>
            <div>About</div>
            <div>
                <select onClick={Select} name="" id="oui" className='bg-transparent text-black uppercase'>
                    <option value="th">Theme</option>
                    <option value="un">Blue</option>
                    <option value="deux">Black</option>
                    <option value="trois">Red</option>
                    <option value="quatre">Yellow</option>
                </select>
            </div>
        </div>
    )
}
