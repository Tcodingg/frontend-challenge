import React, { useState, useEffect } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { expandBtn } from "../../redux/actions/callToActions";
import "./Button.css";
import { RootState } from "../../redux/rootReducer";

interface props {
  id: string;
}

const ExpandBtn: React.FC<props> = ({ id }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const { isExpand, id: btnId } = useSelector(
    (state: RootState) => state.expandBtnReducer
  );

  useEffect(() => {
    function expandBtn() {
      if (id === btnId) {
        setIsExpanded((preVal) => !preVal);
      }
    }
    expandBtn();
  }, [btnId, id, isExpand]);

  const dispatch = useDispatch();
  const handleBtn = (id: string) => {
    dispatch(expandBtn(id, isExpanded));
  };

  return (
    <button onClick={() => handleBtn(id)} className="expand-btn">
      {isExpanded ? <BiMinus /> : <BiPlus />}
    </button>
  );
};

export default ExpandBtn;
