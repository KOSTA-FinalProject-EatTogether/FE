import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuEditableListComponent from './MenuEditableListComponent';

const MenuManagementComponent = () => {
   const [menu, setMenu] = useState([
    {
        id: "menu001",
        name: "김치찌개",
        price: 10000,
        description: "직접 담근 김치로 만든 김치찌개",
    },
    {
        id: "menu002",
        name: "불고기",
        price: 15000,
        description: "특제 양념 불고기",
    },
    {
        id: "menu003",
        name: "파스타 카르보나라",
        price: 18000,
        description: "크리미한 카르보나라 파스타",
    },
    {
        id: "menu004",
        name: "스테이크",
        price: 25000,
        description: "앵거스 등심 스테이크",
    },
    {
        id: "menu101",
        name: "공기밥",
        price: 1000,
        description: "따뜻한 밥",
    },{
        id: "menu111",
        name: "김치찌개",
        price: 10000,
        description: "직접 담근 김치로 만든 김치찌개",
    },
    {
        id: "menu012",
        name: "불고기",
        price: 15000,
        description: "특제 양념 불고기",
    },
    {
        id: "menu013",
        name: "파스타 카르보나라",
        price: 18000,
        description: "크리미한 카르보나라 파스타",
    },
    {
        id: "menu014",
        name: "스테이크",
        price: 25000,
        description: "앵거스 등심 스테이크",
    },
    {
        id: "menu015",
        name: "공기밥",
        price: 1000,
        description: "따뜻한 밥",
    },
   ]);

   const [newMenu, setNewMenu] = useState({
       id: '',
       name: '',
       price: '',
       description: ''
   });

   const [isEditing, setIsEditing] = useState(false);

    // 첫 번째 input을 위한 ref 생성
    const nameInputRef = useRef(null);

    // isEditing이 true로 변경될 때 focus 설정
    useEffect(() => {
        if (isEditing && nameInputRef.current) {
            nameInputRef.current.focus();
        }
    }, [isEditing]);

   const handleInputChange = (e) => {
       const { name, value } = e.target;
       setNewMenu(prev => ({
           ...prev,
           [name]: value
       }));
   };

   const handleAddMenu = (e) => {
       e.preventDefault();

       if (!newMenu.name || !newMenu.price || !newMenu.description) {
           alert('모든 항목을 입력해주세요.');
           return;
       }

       if (isEditing) {
           setMenu(prev => prev.map(item => 
               item.id === newMenu.id 
               ? { ...item, ...newMenu, price: parseInt(newMenu.price) } 
               : item
           ));
           setIsEditing(false);
       } else {
           const newMenuItem = {
               id: `menu${menu.length + 1}`.padStart(6, '0'),
               name: newMenu.name,
               price: parseInt(newMenu.price),
               description: newMenu.description
           };

           setMenu(prev => [...prev, newMenuItem]);
       }

       setNewMenu({
           id: '',
           name: '',
           price: '',
           description: ''
       });
   };

   const handleEditMenu = (item) => {
       setNewMenu({
           id: item.id,
           name: item.name,
           price: item.price.toString(),
           description: item.description
       });
       setIsEditing(true);
   };

   const handleDeleteMenu = (id) => {
       setMenu(prev => prev.filter(item => item.id !== id));
   };

   return (
       <div className="container mt-4">
           <h2 className="mb-4">{isEditing ? '메뉴 수정' : '메뉴 등록'}</h2>
           <form onSubmit={handleAddMenu} className="mb-5">
               <div className="mb-3">
                   <label className="form-label">메뉴 이름</label>
                   <input
                        ref={nameInputRef}
                       type="text"
                       className="form-control"
                       name="name"
                       value={newMenu.name}
                       onChange={handleInputChange}
                       placeholder="메뉴 이름을 입력하세요"
                   />
               </div>
               <div className="mb-3">
                   <label className="form-label">가격</label>
                   <input
                       type="number"
                       className="form-control"
                       name="price"
                       value={newMenu.price}
                       onChange={handleInputChange}
                       placeholder="가격을 입력하세요"
                   />
               </div>
               <div className="mb-3">
                   <label className="form-label">메뉴 설명</label>
                   <textarea
                       className="form-control"
                       name="description"
                       value={newMenu.description}
                       onChange={handleInputChange}
                       placeholder="메뉴 설명을 입력하세요"
                       rows={3}
                   />
               </div>
               <button type="submit" className="btn btn-primary me-2">
                   {isEditing ? '수정 완료' : '메뉴 추가'}
               </button>
               {isEditing && (
                   <button 
                       type="button" 
                       className="btn btn-secondary" 
                       onClick={() => {
                           setIsEditing(false);
                           setNewMenu({
                               id: '',
                               name: '',
                               price: '',
                               description: ''
                           });
                       }}
                   >
                       취소
                   </button>
               )}
           </form>

           <MenuEditableListComponent 
                menu={menu}
                onEdit={handleEditMenu}
                onDelete={handleDeleteMenu}
            />
       </div>
   );
}

export default MenuManagementComponent;