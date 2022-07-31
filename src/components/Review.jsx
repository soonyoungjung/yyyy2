import styled from "styled-components" ;

const Review = ({ profileImage, username, score, createData,reviewText}) => {
    return (
        <ReviewStyled>
            <RowLayout>
                <ProfileImg
                styled={{ backgroundImage:
                `url(${profileImage})`}}
                ></ProfileImg>
                <div>
                    <Score>{score}</Score>
                    <RowLayout>
                        <UserInfo>
                            {username} |
                            {createData}
                        </UserInfo>
                    </RowLayout>
                </div>
            </RowLayout>
            <ReviewText>{reviewText}
            </ReviewText>
        </ReviewStyled>
    );
};

const ReviewStyled = styled.div`
    padding: 16px;
    background-color: #fafafa;
    margin: 10px 0px;
`;
const RowLayout = styled.div`
    display:flex;
    gap: 20px;
`;
const ProfileImg = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 25px;
    background-size: cover;
    background-position: center;
`;

const Score = styled.div`
    color: #ffb100;
`;

const UserInfo = styled.div`
    color: darkgray;
    font-size: 12px;
`;
const ReviewText = styled.div`
    padding-top: 10px;
`;

export default Review;
