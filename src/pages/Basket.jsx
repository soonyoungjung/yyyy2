import { useEffect } from "react";
import { useState} from "react";
import styled from "styled-components";
import Navigation from "../components/Navigation";
import * as webStorage from "../utills/webStorage";
import BasketItem from "../components/BasketItem";

const Basket = () => {
    const [basketItems, setBasketItems] = useState();
    const [basketItemCount, setBasketItemCount] = useState();
// 장바구니 가져오기
    useEffect(() => {
        const items = webStorage.getBasketItems();
        setBasketItems(items);
        // eslint-disable-next-line no-restricted-globals
        setBasketItemCount(items,length);
    }, [] );

    useEffect(()=> {
        const items = webStorage.getBasketItems();
        setBasketItems(items);
    },[basketItemCount]);




// 2. UI 구현

const onClickRemoveButton = (productId) => {
    webStorage.removeBasketItem(productId);
    setBasketItemCount(basketItems.length - 1);
};

    return (
        <BasketStyled>
            <Navigation name="장바구니" hasBack={true} />
            {/* TODO: 장바구니 아이템 UI 추가 */}

           { basketItems &&  
            basketItems.map((product) => (
            <BasketItem
            key={product.id} 
            id={product.id}
            thumbnail = {product.thumbnail}
            name ={product.name}
            price ={product.price}
            onRemoveItem={()=>onClickRemoveButton(product.id)}
            />
    ))}

    <div>상품 {basketItemCount}개</div>
        </BasketStyled>
    );
};

const BasketStyled = styled.div``;

export default Basket; 