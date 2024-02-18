import React from 'react';

const Category = ({ filterItems, categorys }) => {
    return (
        <div className="btn-container">
            {
                categorys.map((category , index) => {
                    return (
                        <button key={index} onClick={() => filterItems(category)} >{category}</button>
                    )
                })
            }
        </div>
    );
}

export default Category;
