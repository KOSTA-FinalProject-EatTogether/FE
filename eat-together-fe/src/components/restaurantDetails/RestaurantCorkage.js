import '../../css/restaurantDetailsCss/RestaurantCorkage.css';

const RestaurantCorkage = () => {
    const displayPost = () => {
        const input = document.getElementById('postInput').value;
        document.getElementById('postDisplay').innerHTML = input.replace(/\n/g, '<br>'); // 줄바꿈을 <br>로 변환
    }



    return (
        <div className="restaurant_details_container">
            <div className="restaurant_corkage_layout">
                <div className="restaurant_corkage_title"><h2>주류 및 콜키지</h2></div>
                <div className="restaurant_corkage_content">주류 및 콜키지 주류및 콜키지???주류및 콜키지???주류및 콜키지???
                    아니 내 술 가져와서 먹는건데 왜 돈 내야함?
                </div>
            </div>
        </div>
    )
}
export default RestaurantCorkage;