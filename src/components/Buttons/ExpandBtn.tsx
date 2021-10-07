import React, { useState } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { expandBtn } from "../../redux/actions/callToActions";

interface props {
  id: string;
}

const ExpandBtn: React.FC<props> = ({ id }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // const expand = useSelector((state: RootState) => state.expandBtnReducer);
  const dispatch = useDispatch();
  const handleBtn = (id: string) => {
    setIsExpanded(!isExpanded);
    dispatch(expandBtn(id, isExpanded));
  };

  return (
    <button onClick={() => handleBtn(id)} className="expand-btn">
      {isExpanded ? <BiMinus /> : <BiPlus />}
    </button>
  );
};

export default ExpandBtn;
