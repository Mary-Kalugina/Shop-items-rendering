import React from "react";
import Item from './Item';

interface ListingProps {
  items: Item[];
}

const Listing: React.FC<ListingProps> = ({ items = [] }) => {
  return (
    <div className="item-list">
      {items.map((item) => (
        <div className="item" key={item.listing_id}>
          <div className="item-image">
            <a href={item.url}>
              <img src={item.MainImage?.url_570xN ?? ""} alt={item.title} />
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">{item.title}</p>
            <p className="item-price">
              {item.currency_code}
              {item.price}
            </p>
            <p
              className={
                item.quantity <= 10
                  ? "level-low item-quantity"
                  : item.quantity <= 20
                  ? "level-medium item-quantity"
                  : "level-high item-quantity"
              }
            >
              {item.quantity} left
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Listing;
