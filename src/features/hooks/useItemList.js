import { useSelector } from "react-redux";

export const useItemList = () => {
  const { itemsList, totalQuantity } = useSelector((state) => state.cart);
  return { itemsList, totalQuantity };
};
