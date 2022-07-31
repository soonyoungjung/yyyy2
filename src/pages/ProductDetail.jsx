import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Navigation from "../components/Navigation";
import Review from "../components/Review";
import { getProductDetail,mockReviews } from "../data/mockData";
import * as webStorage from "../utills/webStorage";
//import { getBasketItems,addBasket  } from "../utills/storage";

const ProductDetail = () => {
  
    let { productId } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState();
    const [activeMenuTab,setActiveMenuTab] = useState("description");


    useEffect(() => {
        const response = getProductDetail(productId);
        setProduct(response);
    }, []);

    const onClickMenuTab = (menuTabName) => {
        setActiveMenuTab(menuTabName);
    };

    const onClickAddBasketButton = 
    (product)=> {
        webStorage.addBasket(product);
        navigate("/basket");
    };



    return(
       <Container>
        <Navigation  name="코멘토 쇼핑" hasBack={true}/>
        {product && (

            <main>
                <MainImage
                   style={{
                       backgroundImage:
                       `url(${product.thumbnail})`,
                   }}
                   />
                   <ProductName>{product.name}
                   </ProductName>
                           <ProductDescription>{product.price}원
                           </ProductDescription>

                                <MenuTabs>
                                    <MenuTab
         active={activeMenuTab === "description"}
         onClick={() => onClickMenuTab("description")}>
         상품 설명
       </MenuTab>
      <MenuTab
        active={activeMenuTab === "review"}
     onClick={() => onClickMenuTab("review")}>
          상품 후기
      </MenuTab>
      </MenuTabs>
        {activeMenuTab === "description" && (
       <ProductDetailImage src= {product.mainImage} alt="사진 설명"/>
        )}
       {activeMenuTab === "review" && (
        <div>

            {mockReviews.map((review) => (
                <Review
                key={review.id}
                profileImage= {review.profileImage}
                username={review.username}
                score={review.score}
                createData={review.createdDate}
                reviewText={review.reviewText}
                />
            ))}
        </div>   
        )}
                                    
                             
            </main>
        )}
        <AddBasketButton onClick={()=>onClickAddBasketButton(product)}>
        장바구니 담기
        </AddBasketButton>
        </Container>
    );
};

export default ProductDetail;

const Container = styled.div`
padding-bottom: 100px;
`;
const MainImage = styled.div`
    width: 100%;
    height: 420px;
    background-size: cover;
    background-position: center;
    margin-bottom: 24px;
    `;

    const ProductName = styled.div`
        font-weight:  700;
        font-size: 20px;
        line-height: 26px;
        letter-spacing: -0.01em;
        padding-bottom: 8px;
    `;

    const ProductDescription = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    letter-spacing: -0.01em;
    color: rgba(0, 0, 0, 0.86);
    padding-bottom:24px;
    `;

    const MenuTabs = styled.div`
        display: flex;
    `;

    const MenuTab = styled.div`
        flex: 1;
        padding: 14px;
        border: solid 1px #eeeeee;
        text-align: center;
        background-color: ${(props) =>
        props.active && "#eeeeee"};
    `;

    const ProductDetailImage =
    styled.img`
        width: 100%;
    `;

   const AddBasketButton = styled.div`
   position: fixed;
   bottom: 0px;
   width: 100%;
   max-width: 390px;
   height: 70px;
   background: #24dbaf;

   font-weight: 700;
   font-size: 16px;
   line-height: 21px;
   letter-spacing: -0.01em;

   display: flex;
   justify-content: center;
   align-items: center;
   text-align: center;


   cursor: pointer;
`;