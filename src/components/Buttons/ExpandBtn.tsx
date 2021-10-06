import React, { useState } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { expandBtn } from "../../redux/actions/callToActions";
import { RootState } from "../../redux/rootReducer";

interface props {
  id: string;
}

const ExpandBtn: React.FC<props> = ({ id }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const expand = useSelector((state: RootState) => state.expandBtnReducer);
  const dispatch = useDispatch();
  const handleBtn = (id: string) => {
    // setIsExpanded((preVal) => !preVal);
    setIsExpanded(expand);
    // dispatch(expandBtn(id, isExpanded));
    dispatch(expandBtn(expand));
  };

  // console.log(isExpanded);
  // setIsExpanded(expand);
  // keep track the clicked buttons in state and toggle them
  return (
    <button onClick={() => handleBtn(id)} className="expand-btn">
      {isExpanded ? <BiMinus /> : <BiPlus />}
    </button>
  );
};

export default ExpandBtn;
