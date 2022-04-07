import React from "react";

const data = [
  {
    title: "Get to Know Us",
    list: [
      "Careers",
      "Blog",
      "About Amazon",
      "Investor Relations",
      "Amazon Devices",
      "Amazon Science",
    ],
  },
  {
    title: "Make Money with Us",
    list: [
      "Sell products on Amazon",
      "Sell on Amazon Business",
      "Sells apps on Amazon",
      "Become an Affilate",
      "Advertise Your Products",
      "Self-Publish with Us",
      "Host an Amazon Hub",
      "See More Make Money with Us",
    ],
  },
  {
    title: "Amazon Payment Products",
    list: [
        'Amazon Business Card',
        'Shop with Points',
        'Reload Your Balance',
        'Amazon Currency Converter'
    ],
  },
  {
    title: "Let Us Help You",
    list: [
        "Amazon and COVID-19",
        'Your Account',
        'Your Orders',
        'Shipping Rates & Polices',
        'Returns & Replacements',
        'Manage Your Content and Devices',
        'Amazon Assistant',
        'Help'
    ],
  },
];
const Footer = () => {
  return (
    <div>
      <div>
        {data.map((item) => (
          <div>
            <h3>{item.title}</h3>
            <ul>
              <li>{item.list}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
