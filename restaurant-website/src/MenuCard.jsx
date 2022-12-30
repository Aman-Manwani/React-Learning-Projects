import React from 'react'

const MenuCard = ({image,category,description,price,id,name}) => {
    return (
        <>
            {/* <div className='card-cont'> */}
                <div className='card'>
                    <div className='card-body'>
                        <span className='card-number card-circle subtle'>{id}</span>
                        <span className='card-author subtle'>{category}</span>
                        <h2 className='card-title'>{name}</h2>
                        <span className='card-description subtle'>{description}</span>
                        <div className='card-read'>Read</div>
                    </div>
                    <img src={image} alt="food image" className='card-media' />
                    <span className='card-tag subtle'>Order Now {price}</span>
                </div>
            {/* </div> */}
        </>
    )
}

export default MenuCard
