import styles from '../../../css/RestaurantManageCss/ModifyButton.css';

const RestaurantManageModifyButton = () => {

    return (
        <div className="restaurant_details_container">
            <div className="restaurant_details_button">
                <button className={styles.editButton}>수정하기</button>
            </div>
        </div>
    );
};

export default RestaurantManageModifyButton;