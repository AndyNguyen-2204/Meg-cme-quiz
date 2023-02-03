import React, {
  useState,
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
} from "react";
import { Data } from "./data.config";
import { useNavigate, useLocation } from "react-router-dom";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [choiceStore, setChoiceStore] = useState();
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState();
  const [data, setData] = useState(Data[index]);
  let navigate = useNavigate();
  const path = useLocation();
  const handleNext = () => {
    if (index + 1 < Data.length) {
      setIndex(index + 1);
      navigate("/first-screen");
    } else {
      navigate("/final-screen");
    }
  };
  const handlePrev = () => {
    if (index > 0) {
      setPrevIndex(index);
      setIndex(index - 1);
    } else {
      navigate("/splash");
    }
  };
  const handlePlayAgain = () => {
    setIndex(0);
    navigate("/first-screen");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);
  useEffect(() => {
    setData(Data[index]);
    if (prevIndex > index) {
      navigate(-1);
    }
  }, [index]);
  return (
    <AppContext.Provider
      value={{
        choiceStore,
        setChoiceStore,
        data,
        index,
        setIndex,
        setData,
        handleNext,
        handlePrev,
        handlePlayAgain,
      }}>
      {children}
    </AppContext.Provider>
  );
};
export const useAppContext = () => {
  return useContext(AppContext);
};
