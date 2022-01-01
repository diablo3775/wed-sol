import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
// Redux
import { connect } from "react-redux";
import {
  loadCurrentItem,
  addToCart,
  wishList,
} from "../../../redux/Shopping/shopping-actions";
import HeartOutlined from "@ant-design/icons/HeartOutlined";
import ShoppingCartOutlined from "@ant-design/icons/ShoppingCartOutlined";

const Product = ({ product, addToCart, loadCurrentItem, wishList }) => {
  return (
    <Section>
      <div key={product.id}>
                        <Link to={`/product/${product.id}`} >
                        <img src={product.image} alt="product images" onClick={() => loadCurrentItem(product)} />
                        </Link>
                        <Heading1>
                        <h1>{product.brand}<HeartOutlined style={{marginLeft:3}} onClick={() => wishList(product.id)} /></h1>
                        </Heading1>
                        <Heading2>
                        <h2>{product.title}</h2>
                        </Heading2>
                        <Heading3>
                        <h2>Rs.{product.sellingPrice}
                        <span>Rs.{product.mrp}</span>
                        <span>({product.offer}%off)</span>
                        <span>
                            <button onClick={() => addToCart(product.id)}>
                            <ShoppingCartOutlined />
                            </button>
                          </span>
                        </h2>
                        </Heading3>   
                    </div>
      
     </Section>
  );
};

// CSS STYLES
const Section = styled.div`
 img{
   width:100%;
 }
`
const Heading1 = styled.div`
    font-size: 10px;
    line-height: 1;
    color: #282c3f;

    span {
      margin-left: 5px;
      cursor: pointer;

      &:hover {
        color: #535766;
      }
    }
`

const Heading2 = styled.div`
    color: #535766;
    font-size: 10px;
`


const Heading3 = styled.div`
  span:nth-child(3) {
    font-size: 20px;
  }

  & > h2 {
    font-size: 16px;
    color: #282c3f;
    font-weight: 500;

    & > span {
      text-decoration: line-through;
      color: #7e818c;
      font-weight: 400;
      margin-left: 5px;
      font-size: 12px;
    }

    & > span:nth-child(2) {
      text-decoration: none;
      color: #ff905a;
    }
  }

  button {
    width: 35px;
    height: 35px;
    border: 1px solid var(--secondary-color);
    border-radius: 50%;
    font-size: 20px;
    cursor: pointer;
    outline: none;
    margin-left: 10px;
  }

  button:hover {
    color: #535766;
  }
`;
// CSS STYLES END

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
    wishList: (id) => dispatch(wishList(id)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
