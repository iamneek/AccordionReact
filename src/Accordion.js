import { useState } from "react";
import "./styles.css";
import faqs from "./faqs";
import AccItems from "./AccItems";

export default function Accordion({ faq }) {
  const [cur, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {faqs.map((faq, i) => {
        return (
          <AccItems
            key={faq.title}
            faq={faq}
            curOpen={cur}
            onOpen={setCurOpen}
            num={i}
          />
        );
      })}
    </div>
  );
}
