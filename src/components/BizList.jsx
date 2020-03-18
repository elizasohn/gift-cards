import React from 'react';
import Biz from './Biz';

const bizList = [
  {
    name: "Nostrana",
    url: "https://nostrana.com/store/gift-cards/",
  },
  {
    name: "Stella Taco",
    url: "https://squareup.com/gift/BX4747N96DXV9/order",
  },
  {
    name: "Toro Bravo",
    url: "https://www.tastyndaughters.com/gift-certificates",
  },
  {
    name: "Tasty N Alder",
    url: "https://www.tastyndaughters.com/gift-certificates",
  },
  {
    name: "Tasty N Daughters",
    url: "https://www.tastyndaughters.com/gift-certificates",
  },
  {
    name: "Bless Your Heart Burgers",
    url: "https://www.tastyndaughters.com/gift-certificates",
  },
  {
    name: "Shalom Y'all",
    url: "https://www.tastyndaughters.com/gift-certificates",
  },
  {
    name: "Eritzo",
    url: "https://squareup.com/gift/HC1Y52R6P7MKA/order",
  },
];
function BizList(){
  return (
    <div className = "row-lg-4">
    {bizList.map((biz, index) =>
      <Biz
      name={biz.name}
      url={biz.url}
      index={index}/>
      )}
      </div>
    );
  }

  export default BizList;
