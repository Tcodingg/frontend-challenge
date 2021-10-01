import React, { useState } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { expandBtn } from "../../redux/actions/callToActions";

interface props {
  id: string;
}

const ExpandBtn: React.FC<props> = ({ id }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const dispatch = useDispatch();
  const handleBtn = (id: string) => {
    setIsExpanded((preVal) => !preVal);

    dispatch(expandBtn(id, isExpanded));
  };
  // keep track the clicked buttons in state and toggle them
  return (
    <button onClick={() => handleBtn(id)} className="expand-btn">
      {!isExpanded ? <BiMinus /> : <BiPlus />}
    </button>
  );
};

export default ExpandBtn;
