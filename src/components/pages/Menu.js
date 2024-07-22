// import React, { useState } from 'react'; 
// import styled from 'styled-components';

// // Sample menu items data
// const foodItems = [
//           {
//             id: 1,
//             FoodName: "Cheese Paratha",
//             foodimg: require('../images/b1.jpg'),
//             price: "RS 250",
//             type: "breakFast",
//             des: "These cheese flatbreads make for a wholesome breakfast or brunch. There are many many varieties of paratha made and this is one such tasty paratha which the kids are going to love."
//           },
//           {
//             id: 2,
//             FoodName: "Aloo Paratha",
//             foodimg: require('../images/b2.jpg'),
//             price: "RS 200",
//             type: "breakFast",
//             des: "Aloo Paratha is a bread dish originating from the Indian subcontinent. It is a breakfast dish originated from the Punjab region."
//           },
//           {
//             id: 3,
//             FoodName: "Egg Paratha",
//             foodimg:require('../images/b3.jpg'),
//             price: "RS 150",
//             type: "breakFast",
//             des: "Egg paratha recipe — easy breakfast, brunch or dinner recipe that is protein rich, healthy and tasty. Egg paratha is a kids' favorite, so i make it often for their after school snack. To make egg paratha, you can use ready paratha, roti or frozen paratha as well."
//           },
//           {
//             id: 4,
//             FoodName: "Daal Chawal",
//             foodimg: require('../images/l1.jpg'),
//             price: "RS 400",
//             type: "Lunch",
//             des: "The most fascinating, fabulously fantastic and simple lightweight Pakistan’s most favorite dish, Daal Chawal Recipe (Daal Rice) is here at Sooperchef.pk. It’s simple, fast and delicious Pakistani Recipe."
//           },
//           {
//             id: 5,
//             FoodName: "Pakal Paneer",
//             foodimg: require('../images/l2.jpg'),
//             price: "RS 400",
//             type: "Lunch",
//             des: "Palak Paneer is a popular Indian dish of Indian cottage cheese cubes in a mild, spiced smooth spinach sauce. This delicious creamy dish is made with fresh spinach leaves, paneer (firm cottage cheese), onions, tomatoes, herbs and spices."
//           },
//           {
//             id: 6,
//             FoodName: "Aloo Ghobi",
//             foodimg: require('../images/l3.jpg'),
//             price: "RS 200",
//             type: "Lunch",
//             des: "Aloo Gobi ki Sabzi is a classic Pakistani dish of Potatoes and Cauliflower cooked in savory spices and garnished with chillies and cilantro."
//           },
//           {
//             id: 7,
//             FoodName: "Aloo Goshat",
//             foodimg: require('../images/l4.jpg'),
//             price: "RS 200",
//             type: "Lunch",
//             des: "Aloo Gosht is a spicy, thick and creamy meat gravy that originates from Pakistani and North Indian cuisine. This gravy has potatoes cooked with lamb or mutton in a thick stew."
//           },
//           {
//             id: 8,
//             FoodName: "Banana Shakes",
//             foodimg:require('../images/s1.jpg'),
//             price: "RS 150",
//             type: "Shakes",
//             des: "You need less than five minutes to make this easy banana smoothie. Use our simple recipe on its own or use it as a base for other smoothies."
//           },
//           {
//             id: 9,
//             FoodName: "Mango Shakes",
//             foodimg: require('../images/s2.jpg'),
//             price: "RS 150",
//             type: "Shakes",
//             des: "Mango shake is a cool and tempting fruit drink prepared by simply blending ripe mango pieces, milk and sugar. To keep things simple and easy, this recipe primarily explains how to make mango shake with milk."
//           },
//           {
//             id: 10,
//             FoodName: "Biryani",
//             foodimg: require('../images/d1.jpg'),
//             price: "RS 600",
//             type: "Dinner",
//             des: "Biryani is a mixed rice dish originating among the Muslims of the Indian subcontinent. It is made with Indian spices, rice, and meat, and sometimes, in addition, eggs and/or vegetables such as potatoes in certain regional varieties."
//           },
//           {
//             id: 11,
//             FoodName: "Korma",
//             foodimg:require('../images/d2.jpg'),
//             price: "RS 250",
//             type: "Dinner",
//             des: "Korma is a gravy dish that is usually made with yogurt, lots of nuts and spices. A Mughal era original, Chicken Korma is the perfect dinner party dish that is easy, quick and a no-fuss recipe."
//           }
//   // Add other food items with adjusted image paths
// ];

// const Menu = () => {
//   const [filteredItems, setFilteredItems] = useState(foodItems);

//   const handleFilter = (type) => {
//     if (type === 'All') {
//       setFilteredItems(foodItems);
//     } else {
//       setFilteredItems(foodItems.filter(item => item.type === type));
//     }
//   };

//   return (
//     <div className="container" style={{ maxWidth: '1200px', backgroundImage:'../images/5.jpg',fontFamily:"cursive"}}>
//       <MenuTitle>Our Menu</MenuTitle>
//       <Categories>
//         <ul>
//           {['All', 'breakFast', 'Lunch', 'Shakes', 'Dinner'].map(category => (
//             <li key={category} onClick={() => handleFilter(category)}>
//               {category}
//             </li>
//           ))}
//         </ul>
//       </Categories>
//       <div className="row food-container g-4">
//         {filteredItems.map(item => (
//           <div className="col-md-6 foodbox" key={item.id}>
//             <Content className="content b my-2">
//               <div className="c-image">
//                 <img src={item.foodimg} alt={item.FoodName} />
//               </div>
//               <TNP className="t-n-p my-2">
//                 <div className="header">
//                   <span className="title">{item.FoodName}</span>
//                   <span className="price">{item.price}</span>
//                 </div>
//                 <div className="des my-3">
//                   <p>{item.des}</p>
//                 </div>
//               </TNP>
//             </Content>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const MenuTitle = styled.div`
//   margin-Top:20px;
//   text-align: center; 
//   font-size: 3rem;
//   font-weight: 1000;
//   color: #182433; 
//   background-color:aqua;
//   border-radius:40px;
//   span {
//     font-size: 2rem;
//     font-weight: 700;
//     width: 10%;
//     color: #182433;
//     border-bottom: 5px solid var(--golden);
//   }
// `;

// const Categories = styled.div`
//   text-align: center;
//   color: white;
//   ul {
//     display: flex;
//     list-style: none;
//     justify-content: center;
//     margin-top: 10px;
//   }
//   li {
//     margin: 10px;
//     padding: 5px 10px;
//     font-size: 1rem;
//     border: 2px solid var(--golden);
//     border-radius: 20px;
//     color: var(--golden);
//     cursor: pointer;
//   }
//   li:hover {
//     background-color: aqua;
//     color: black;
//   }
// `;

// const Content = styled.div`
//   display: flex;
//   color:white;
//   justify-content: center;
//   align-items: center;
//   background-color: #353739; /* Added background color */
//   border-radius: 10px; /* Added border radius */
//   padding: 20px; /* Added padding */
//   box-shadow: 0 0 20px aqua; /* Added box shadow */
//   transition: transform 0.3s ease; /* Added transition effect */
//   &:hover {
//     transform: translateY(-5px); /* Added hover effect */
//   }
//   .c-image {
//     width: 700px;
//     height: 160px;
//     border: 3px solid var(--golden);
//     border-radius: 5px;
//     overflow: hidden; /* Added to hide image overflow */
//   }
//   .c-image img {
//     width: 100%;
//     height: 100%;
//     border-radius: 5px; /* Added border radius */
//     object-fit: cover; /* Added to maintain aspect ratio */
//   }
// `;

// const TNP = styled.div`

//   margin-left: 20px;
//   width: 1000px;
//   .header {
//     display: flex;
//     justify-content: space-between;
//     border-bottom: 1px dotted #182433;
//     padding: 0px 5px;
//   }
//   .title {
//     font-size: 1.2rem;
//     font-weight: 600;
//     letter-spacing: 2px;
//   }
//   .price {
//     font-size: 1rem;
//     font-weight: 800;
//     color: var(--golden);
//     word-spacing: 2px;
//   }
//   .des p {
//     font-size: 1rem;
//   }
// `;

// export default Menu;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import b1 from '../images/b1.jpg';
import b2 from '../images/b2.jpg';
import b3 from '../images/b3.jpg';
import l1 from '../images/l1.jpg';
import l2 from '../images/l2.jpg';
import l3 from '../images/l3.jpg';
import l4 from '../images/l4.jpg';
import s1 from '../images/s1.jpg';
import s2 from '../images/s2.jpg';
import d1 from '../images/d1.jpg';
import d2 from '../images/d2.jpg';
import g from '../images/g.jpg'; 
import g3 from '../images/g3.jpg'; 

const foodItems = [
  {
    id: 1,
    FoodName: "Cheese Paratha",
    foodimg: b1,
    price: "250",
    type: "breakFast",
    des: "These cheese flatbreads make for a wholesome breakfast or brunch. There are many many varieties of paratha made and this is one such tasty paratha which the kids are going to love."
  },
  {
    id: 2,
    FoodName: "Aloo Paratha",
    foodimg: b2,
    price: "200",
    type: "breakFast",
    des: "Aloo Paratha is a bread dish originating from the Indian subcontinent. It is a breakfast dish originated from the Punjab region."
  },
  {
    id: 3,
    FoodName: "Egg Paratha",
    foodimg: b3,
    price: "150",
    type: "breakFast",
    des: "Egg paratha recipe — easy breakfast, brunch or dinner recipe that is protein rich, healthy and tasty. Egg paratha is a kids' favorite, so i make it often for their after school snack. To make egg paratha, you can use ready paratha, roti or frozen paratha as well."
  },
  {
    id: 4,
    FoodName: "Daal Chawal",
    foodimg: l1,
    price: "400",
    type: "Lunch",
    des: "The most fascinating, fabulously fantastic and simple lightweight Pakistan’s most favorite dish, Daal Chawal Recipe (Daal Rice) is here at Sooperchef.pk. It’s simple, fast and delicious Pakistani Recipe."
  },
  {
    id: 5,
    FoodName: "Pakal Paneer",
    foodimg: l2,
    price: "400",
    type: "Lunch",
    des: "Palak Paneer is a popular Indian dish of Indian cottage cheese cubes in a mild, spiced smooth spinach sauce. This delicious creamy dish is made with fresh spinach leaves, paneer (firm cottage cheese), onions, tomatoes, herbs and spices."
  },
  {
    id: 6,
    FoodName: "Aloo Ghobi",
    foodimg: l3,
    price: "200",
    type: "Lunch",
    des: "Aloo Gobi ki Sabzi is a classic Pakistani dish of Potatoes and Cauliflower cooked in savory spices and garnished with chillies and cilantro."
  },
  {
    id: 7,
    FoodName: "Aloo Goshat",
    foodimg: l4,
    price: "200",
    type: "Lunch",
    des: "Aloo Gosht is a spicy, thick and creamy meat gravy that originates from Pakistani and North Indian cuisine. This gravy has potatoes cooked with lamb or mutton in a thick stew."
  },
  {
    id: 8,
    FoodName: "Banana Shakes",
    foodimg: s1,
    price: "150",
    type: "Shakes",
    des: "You need less than five minutes to make this easy banana smoothie. Use our simple recipe on its own or use it as a base for other smoothies."
  },
  {
    id: 9,
    FoodName: "Mango Shakes",
    foodimg: s2,
    price: "150",
    type: "Shakes",
    des: "Mango shake is a cool and tempting fruit drink prepared by simply blending ripe mango pieces, milk and sugar. To keep things simple and easy, this recipe primarily explains how to make mango shake with milk."
  },
  {
    id: 10,
    FoodName: "Biryani",
    foodimg: d1,
    price: "600",
    type: "Dinner",
    des: "Biryani is a mixed rice dish originating among the Muslims of the Indian subcontinent. It is made with Indian spices, rice, and meat, and sometimes, in addition, eggs and/or vegetables such as potatoes in certain regional varieties."
  },
  {
    id: 11,
    FoodName: "Korma",
    foodimg: d2,
    price: "250",
    type: "Dinner",
    des: "Korma is a gravy dish that is usually made with yogurt, lots of nuts and spices. A Mughal era original, Chicken Korma is the perfect dinner party dish that is easy, quick and a no-fuss recipe."
  },
  {
    id: 12,
    FoodName: "Grilled Salmon",
    foodimg: g,
    price: "250",
    type: "Dinner",
    des: " A succulent, smoky delight with a perfect blend of seasoning, bringing out the rich, buttery flavors of the fish."
  },
  {
    id: 13,
    FoodName: "Beef Wellington",
    foodimg: g3,
    price: "350",
    type: "Dinner",
    des: " A luxurious English classic featuring a tender fillet steak coated with rich pâté and duxelles, all encased in a golden, flaky puff pastry."
  }
];

const Menu = () => {
    const [filteredItems, setFilteredItems] = useState(foodItems);
    const navigate = useNavigate();

    const handleFilter = (type) => {
        if (type === 'All') {
            setFilteredItems(foodItems);
        } else {
            setFilteredItems(foodItems.filter(item => item.type === type));
        }
    };

    const navigateToOrder = (foodName, price) => {
        navigate(`/order/${foodName}/${price}`);
    };

    return (
        <div className="container" style={{ maxWidth: '1200px', fontFamily: "cursive" }}>
            <MenuTitle>Our Menu</MenuTitle>
            <Categories>
                <ul>
                    {['All', 'breakFast', 'Lunch', 'Shakes', 'Dinner'].map(category => (
                        <li key={category} onClick={() => handleFilter(category)}>
                            {category}
                        </li>
                    ))}
                </ul>
            </Categories>
            <div className="row food-container g-4">
                {filteredItems.map(item => (
                    <div className="col-md-6 foodbox" key={item.id} onClick={() => navigateToOrder(item.FoodName, item.price)}>
                        <Content className="content b my-2">
                            <div className="c-image">
                                <img src={item.foodimg} alt={item.FoodName} />
                            </div>
                            <TNP className="t-n-p my-2">
                                <div className="header">
                                    <span className="title">{item.FoodName}</span>
                                    <span className="price">Rs {item.price}</span>
                                </div>
                                <div className="des my-3">
                                    <p>{item.des}</p>
                                </div>
                            </TNP>
                        </Content>
                    </div>
                ))}
            </div>
        </div>
    );
};


const MenuTitle = styled.div`
  margin-Top:20px;
  text-align: center; 
  font-size: 3rem;
  font-weight: 1000;
  color: #182433; 
  background-color:aqua;
  border-radius:40px;
  span {
    font-size: 2rem;
    font-weight: 700;
    width: 10%;
    color: #182433;
    border-bottom: 5px solid var(--golden);
  }
`;

const Categories = styled.div`
  text-align: center;
  color: white;
  ul {
    display: flex;
    list-style: none;
    justify-content: center;
    margin-top: 10px;
  }
  li {
    margin: 10px;
    padding: 5px 10px;
    font-size: 1rem;
    border: 2px solid var(--golden);
    border-radius: 20px;
    color: var(--golden);
    cursor: pointer;
  }
  li:hover {
    background-color: aqua;
    color: black;
  }
`;

const Content = styled.div`
  display: flex;
  color:white;
  justify-content: center;
  align-items: center;
  background-color: #353739; /* Added background color */
  border-radius: 10px; /* Added border radius */
  padding: 20px; /* Added padding */
  box-shadow: 0 0 20px aqua; /* Added box shadow */
  transition: transform 0.3s ease; /* Added transition effect */
  &:hover {
    transform: translateY(-5px); /* Added hover effect */
  }
  .c-image {
    width: 700px;
    height: 160px;
    border: 3px solid var(--golden);
    border-radius: 5px;
    overflow: hidden; /* Added to hide image overflow */
  }
  .c-image img {
    width: 100%;
    height: 100%;
    border-radius: 5px; /* Added border radius */
    object-fit: cover; /* Added to maintain aspect ratio */
  }
`;

const TNP = styled.div`

  margin-left: 20px;
  width: 1000px;
  .header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px dotted #182433;
    padding: 0px 5px;
  }
  .title {
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: 2px;
  }
  .price {
    font-size: 1rem;
    font-weight: 800;
    color: var(--golden);
    word-spacing: 2px;
  }
  .des p {
    font-size: 1rem;
  }
`;

export default Menu;