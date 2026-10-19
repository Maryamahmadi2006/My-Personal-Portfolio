import { useRef } from "react";
import Reveal from "./Reveal.jsx";

/**
 * FAQ accordion built on native <details>/<summary> for keyboard support.
 * Same behavior as the original site: only one answer stays open at a time.
 */
export default function Faq({ items }) {
  const itemsRef = useRef([]);

  const handleToggle = (index, element) => {
    if (!element.open) return;
    itemsRef.current.forEach((other, otherIndex) => {
      if (other && otherIndex !== index) other.open = false;
    });
  };

  return (
    <div className="faq-list">
      {items.map((item, index) => (
        <Reveal
          as="details"
          key={item.q}
          className="faq"
          ref={(element) => {
            itemsRef.current[index] = element;
          }}
          onToggle={(event) => handleToggle(index, event.currentTarget)}
        >
          <summary>
            {item.q}
            <span> + </span>
          </summary>
          <p>{item.a}</p>
        </Reveal>
      ))}
    </div>
  );
}
