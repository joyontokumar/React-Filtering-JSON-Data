import React from 'react';
const NewList = (props) => {
    const items = props.news.map((item) => {
        return (
            <div className="col-md-6" key={item.id}>
                <div className="single-item pt-3 pb-3">
                    <h4>{item.title}</h4>
                    <p>{item.body}</p>
                </div>
            </div>
        )
    });
    return (
        <div className="container">
            <div className="row">
                {items}
            </div>
        </div>
    )

}
export default NewList; 