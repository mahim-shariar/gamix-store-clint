import React from 'react';
import './Company.css'

const Company = () => {
    return (
        <div className='container bg-img '>
            <div className="py-4 row ">
                <div className='mb-4 col-lg-3 flex-div col-md-6' >
                    <div className='ui-card'>
                        <img src="https://cdn.shopify.com/s/files/1/0355/9135/6553/files/colection-1.png?v=1585650020)" width='228px' alt="" />
                        <div className='description'>
                            <h5> Xbox One </h5>
                            <button className='btn-style btn ' > Explor </button>
                        </div>
                    </div>
                </div>
                <div className='mb-4 col-lg-3 flex-div col-md-6' >
                    <div className='ui-card'>
                        <img src="	https://cdn.shopify.com/s/files/1/0355/9135/6553/files/colection-2.png?v=1585650034)" width='228px' alt="" />
                        <div className='description'>
                              <h5> PlayStation </h5>
                              <button className='btn-style btn ' > Explor </button>
                        </div>
                    </div>
                </div>
                <div className='mb-4 col-lg-3 flex-div col-md-6' >
                    <div className='ui-card'>
                        <img src="	https://cdn.shopify.com/s/files/1/0355/9135/6553/files/colection-v3.png?v=1586229269)" width='228px'  alt="" />
                        <div className='description'>
                        <h5> PC Game </h5>
                              <button className='btn-style btn ' > Explor </button>
                        </div>
                    </div>
                </div>
                <div className='mb-4 col-lg-3 flex-div col-md-6' >
                    <div className='ui-card'>
                        <img src="	https://cdn.shopify.com/s/files/1/0355/9135/6553/files/colection-v4.png?v=1586229282)" width='228px' alt="" />
                        <div className='description'>
                        <h5> Android </h5>
                              <button className='btn-style btn ' > Explor </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Company;