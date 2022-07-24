import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Navigation from "../components/Navigation";
import { getProductDetail } from "../data/mockData";


const ProductDetail = () => {
  
    let { productId } = useParams();
    const [product, setProduct] = useState();

    useEffect(() => {
        const result = getProductDetail(productId);
        setProduct(result);
    }, [ ]);

    if (product && product.type === "여름") {
        return <>여름용품</>;
    } else if (product.type === "여름") {
        return <>여름용품</>;
    }


    return(
       <ProductDetailStyled>
        <Navigation />
        {product && (
            <>
        <div>상품 ID : {product.id}</div>
        <img src={product.thumbnail} width="200" />
        <div>{product.name} </div>
        <div>{product.desciption}</div>
        </>
        )}
       </ProductDetailStyled>
    );
    
};

const ProductDetailStyled = styled.div``;
export default ProductDetail;