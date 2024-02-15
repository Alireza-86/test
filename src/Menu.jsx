import React from 'react';

const Menu = ({items}) => {
    return (
        <div className="section-center">
            {
                items.map((item) =>{
                    const {id, title,price,img,desc} =item;
                    return(
                        <section key={id} className="menu-item">
                            <img src={img} alt={title} className="photo" />
                            <div className="item-info">
                                <header>
                                    <h4>{title}</h4>
                                    <p>{price}</p>
                                </header>
                                <p>{desc}</p>
                                <p>test branch</p>
                                <p>test branch</p>
                                <button>test</button>
                            </div>
                        </section>
                    )
                })
            }
        </div>
    );
}

export default Menu;
