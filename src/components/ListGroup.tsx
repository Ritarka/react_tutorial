import { MouseEvent } from "react";
import { useState } from "react";

// class reserved keyword for JS use className

// Only one element can be returned from a component - can wrap in div (extra element!),
// use React.Fragment, or implicit fragment <>

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // state is done on a component level two <App/> components will have different states
  //arr[0] = var arr[1] = updater

  const handleClick = (event: MouseEvent) => console.log(event);

  // const message = items.length === 0 ? <p>There are no items!</p> : null;
  // const getMessage = () => {
  //   return items.length === 0 ? <p>There are no items!</p> : null;
  // }

  // not for loop in jsx
  // javascript expression. For each item convert to li element
  // key is required for each element in a list for react to keep track of of DOM elements

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>There are no items!</p>}{" "}
      {/* true && 1 = true; false && <anything> = false */}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              "list-group-item" + (index === selectedIndex ? " active" : "")
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
