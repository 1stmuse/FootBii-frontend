import React, { Component } from 'react';
import nike from '../../assets/sampNike.jpg'
import extra1 from '../../assets/extra1.jpg'
import extra2 from '../../assets/extra2.jpg'
import other from '../../assets/other.jpg'

class index extends Component {
    render() {
        return (
          <div className="shoe_info_wrapper">
            <div className="shoe_flex_wrapper">
              <div className="shoe_info">
                <div className="back">
                  <i className="fa fa-long-arrow-left"></i>
                  <p>Back</p>
                </div>
                <div className="shoe_img">
                  <img src={nike} alt="more on shoo" />
                </div>
                <div className="shoe_details">
                  <h1>Air Max 90</h1>
                  <h3>$450</h3>
                  <div className="show_number">
                    <div>
                      <i class="fa fa-minus" aria-hidden="true"></i>
                    </div>
                    <div>1</div>
                    <div>
                      <i class="fa fa-plus" aria-hidden="true"></i>
                    </div>
                  </div>
                  <div className="add_to_cart">
                    <div>
                      <i className="fa fa-heart-o fa-2x"></i>
                    </div>
                    <div>
                      <p>Add to Cart</p>
                      <i className="fa fa-shopping-cart"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="show_extras">
                <div className='show-x-top'>
                  <div className='x-photos'>
                    <h2>Photos</h2>
                    <div className='x-photo-flex'>
                      <div>
                        <img alt="extra shoes" src={extra2} />
                      </div>
                      <div>
                        <img alt="extra shoes" src={extra1} />
                      </div>
                    </div>
                  </div>
                  <div className='x-colors'>
                    <h2>Colors</h2>
                    <div className='x-colors-flex'>
                      <div><p style={{backgroundColor:'yellow'}}></p></div>
                      <div ><p style={{backgroundColor:'blue'}}></p></div>
                      <div> <p style={{backgroundColor:'red'}} ></p></div>
                    </div>
                  </div>
                  <div className='x-sizes'>
                    <h2>Sizes</h2>
                    <div className='x-sizes-flex'>
                      <div>sm</div>
                      <div>md</div>
                      <div>lg</div>
                      <div>xl</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <h2>Similar Products</h2>
                    <div className='simi-sh'>
                      <div><img src={other}/> </div>
                      <div><img src={other}/> </div>
                      <div><img src={other}/> </div>
                    </div>
                  </div>
                </div>
                <div>
                    <div className="">
                      <div className="hm-prev-nxt">
                        <div>
                            <i class="fa fa-angle-left" aria-hidden="true"></i>
                            <p>Prev</p>
                        </div>
                        <div>
                            <p>Prev</p>
                            <i
                                class="fa fa-angle-right"
                                aria-hidden="true"
                            ></i>{" "}
                        </div>
                      </div>
                      <div className="hm-footer-social">
                          <i className="fa fa-twitter"></i>
                          <i className="fa fa-instagram "></i>
                          <i className="fa fa-linkedin f"></i>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default index;