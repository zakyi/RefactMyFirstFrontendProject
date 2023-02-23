import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSearchTimeout, getSearchState } from "../store";

function useHelperHook() {
  const { searchTimeout } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  function debouce(func, delay) {
    return function (args) {
      const context = this;
      searchTimeout && clearTimeout(searchTimeout);
      dispatch(
        setSearchTimeout(
          setTimeout(function () {
            func.call(context, args);
          }, delay)
        )
      );
    };
  }

  return { debouce };
}

export { useHelperHook };
