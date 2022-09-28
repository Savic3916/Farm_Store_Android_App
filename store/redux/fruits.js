import { createSlice } from "@reduxjs/toolkit";

const fruitsSlice = createSlice({
    name: 'fruits',
    initialState: {
        furitsDetails: 
        [
            {
                id: 'f1',
                tab: ['popular'],
                name: 'Pineapple',
                price: 25,
                link: 'https://www.dole.com/-/media/project/dole/produce-images/fruit/pineapple_cut_web.png?rev=77f42516c642431eac65057385324af7&hash=144F30EB89D58879E70528F52E169238',
                cardColor: '#EEF7F7',
                bottomCardColor: '#89D7CF',
                category: 'Single',
                description: "Pineapple is an incredibly delicious, healthy tropical fruit. It\'s packed with nutrients, antioxidants, and other helpful compounds, such as enzymes that can protect against inflammation and disease.",
              },
              {
                id: 'f2',
                tab: ['popular'],
                name: 'Blackberry',
                price: 15.55,
                link: 'https://freepngimg.com/thumb/blackberry/4-2-blackberry-fruit-png-image.png',
                cardColor: '#C3B3EA',
                bottomCardColor: '#9D7EED',
                category: 'Single',
                description: "Blackberry is a versatile low-carbohydrate fruit. Blackberries are contemplated as a superfood with the most nutritional punch like high in fiber, full of vitamins & minerals",
              },
              {
                id: 'f3',
                tab: ['popular'],
                name: 'Oranges',
                price: 20.15,
                link: 'https://www.dole.com/-/media/project/dole/produce-images/fruit/oranges_cut_web.png?rev=5e260d0d7c624319b64d7667c3242e04&hash=C5E4CCE756DC43E7017E2DCAE6114B64',
                cardColor: '#F8DE7E',
                bottomCardColor: '#F7BD01',
                category: 'Single',
                description: "Oranges are a type of low calorie, highly nutritious citrus fruit. As part of a healthful and varied diet, oranges contribute to strong, clear skin and can help lower a person\'s risk of many conditions.",
              },
              {
                id: 'f4',
                tab: ['discount'],
                name: 'Coconut',
                price: 12.99,
                link: 'https://img.freepik.com/premium-photo/coconut-isolated-white-background_252965-356.jpg?w=2000',
                cardColor: 'white',
                bottomCardColor: '#654321',
                category: 'Single',
                description: 'Coconut is the fruit of the coconut palm which is commonly used for its water, milk, oil, and tasty meat.\nCoconut is generally regarded as a source of healthy fat. The meat contains protein and fiber, as well as some essential minerals.',
              },
              {
                id: 'f5',
                tab: ['discount'],
                name: 'Strawberry',
                price: 7.99,
                link: 'https://cdn3d.iconscout.com/3d/premium/thumb/strawberry-5532430-4725754.png',
                cardColor: '#FF7F7F',
                bottomCardColor: '#8b0000',
                category: 'Single',
                description: "They\'re an excellent source of vitamin C and manganese and also contain decent amounts of folate (vitamin B9) and potassium.\nStrawberries are very rich in antioxidants and plant compounds, which may have benefits for heart health and blood sugar control.",
              },
              {
                id: 'f6',
                tab: ['popular'],
                name: 'Strawberry',
                price: 7.99,
                link: 'https://cdn3d.iconscout.com/3d/premium/thumb/strawberry-5532430-4725754.png',
                cardColor: '#FF7F7F',
                bottomCardColor: '#8b0000',
                category: 'Single',
                description: "They\'re an excellent source of vitamin C and manganese and also contain decent amounts of folate (vitamin B9) and potassium.\nStrawberries are very rich in antioxidants and plant compounds, which may have benefits for heart health and blood sugar control.",
              },
              {
                id: 'f7',
                tab: ['pre-order'],
                name: 'Fresh Apples',
                price: 25,
                link: 'https://i.pinimg.com/originals/ee/99/02/ee9902ca79be8b2009f60afa1d06fad3.png',
                cardColor: 'white',
                bottomCardColor: null,
                category: 'Mixes',
                description: "Apples are a popular fruit, containing antioxidants, vitamins, dietary fiber, and a range of other nutrients. Due to their varied nutrient content, they may help prevent several health conditions.",
              },
              {
                id: 'f8',
                tab: ['pre-order'],
                name: 'Bahama Bucks',
                price: 22,
                link: 'https://bahamabucks.com/wp-content/uploads/2021/02/Bahama-Bucks-Frostalatte-2-1.png',
                cardColor: 'white',
                bottomCardColor: null,
                category: 'Mixes',
                description: "For children, milk is a key source of calcium and vitamin D. Bahama Bucks is a good alternative source of calcium and vitamin D for those who prefer not to drink\'s cow\'s milk.",
              },
              {
                id: 'f9',
                tab: ['pre-order'],
                name: 'Orange Juice',
                price: 8.35,
                link: 'https://i.pinimg.com/originals/ad/e8/51/ade851fb1092bcd23577cd52d17f1c2c.png',
                cardColor: 'white',
                bottomCardColor: null,
                category: 'Single',
                description: "Orange juice is an excellent source of Vitamin C — one cup contains twice the daily recommended value. Vitamin C supports your immune system and may be effective in fighting against the common cold.",
              },
        ],
        favouriteFruits: [],
        cartFruits: [],
      },
    reducers: {
        deleteFruits: (state, action) => {
            state.furitsDetails = action.payload;
        },
        addFavourite: (state, action) => {
          state.favouriteFruits = action.payload;
        },
        removeFavourite: (state, action) => {
          state.favouriteFruits = action.payload;
        },
        addToCart: (state, action) => {
          state.cartFruits = action.payload;
        },
        updateQuantity: (state, action) => {
          state.cartFruits = action.payload;
        }
    }
})

export const { deleteFruits, addFavourite, removeFavourite, addToCart, updateQuantity } = fruitsSlice.actions;
export default fruitsSlice.reducer;
