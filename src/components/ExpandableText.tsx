import React, { useState } from "react";

const ExpandableText: React.FC<{ text: string; maxLength: number }> = ({
  text,
  maxLength,
}) => {
  const [expanded, setExpanded] = useState(false);
  const truncatedText = text.slice(0, maxLength);
  const remainingText = text.slice(maxLength);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      {expanded ? (
        <>
          {text}
          {/* <t /> */}
          <span style={{ color: "blue" }} onClick={handleToggle}>
            Hide
          </span>
        </>
      ) : (
        <>
          {truncatedText}
          {remainingText.length > 0 && (
            <>
              {/* <br /> */}
              <span style={{ color: "blue" }} onClick={handleToggle}>
                Read more...
              </span>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ExpandableText;
