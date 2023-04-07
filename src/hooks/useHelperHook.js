// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { setSearchTimeout, getSearchState } from "../store";
import { useEffect, useState } from "react";
import { DEBOUNCE_DELAY } from "../static/config";

function useHelperHook() {
  // /*
  //  * 正确做法，每次输入新字符，SearchBar重新渲染的时候，timeout不会更新
  //  * 只有setSearchTimeout才会更新timeout
  //  * @param {any} callback
  //  * @param {any} delay
  //  * @returns
  //  * */
  // const [timeout, setSearchTimeout] = useState(null);
  // function debouce(callback, delay) {
  //   return function (...args) {
  //     timeout && clearTimeout(timeout);
  //     setSearchTimeout(
  //       setTimeout(function () {
  //         callback(...args);
  //       }, delay)
  //     );
  //   };
  // }

  //调用的时候用useCallback封装一层，使得返回的函数在组件更新后也不会改变
  function debouce(callback, delay) {
    let timeout = null;
    return function (...args) {
      timeout && clearTimeout(timeout);
      timeout = setTimeout(function () {
        callback(...args);
      }, delay);
    };
  }

  function useIntersection(ref, handle) {
    const handleIntersection = (entries, observer) => {
      //entries就是obser
      entries.forEach((entry) => {
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          handle();
          observer.unobserve(entry.target);
        }
      });
    };

    const option = {
      root: null,
      rootMargin: "0%",
      threshold: "0.1",
    };

    useEffect(() => {
      const target = ref.current;
      let observer = new IntersectionObserver(handleIntersection, option);
      observer.observe(target);
      return () => {
        //新组件装载的时候（或者旧组件从页面中离开时
        //例如animal页面切换成culture页面，把旧组件的Observer给清除掉
        observer.unobserve(target);
      };
    }, []);
  }

  const throttle = function (callback, delay = DEBOUNCE_DELAY) {
    let shouldWait = false;
    let middleArgs;
    const middleFunc = () => {
      if (middleArgs != undefined) {
        callback(...middleArgs);
        middleArgs = null;
        middleFunc();
      } else {
        shouldWait = false;
      }
    };
    return function (...args) {
      if (shouldWait) {
        middleArgs = args;
        return;
      }
      callback(...args);
      shouldWait = true;
      setTimeout(middleFunc, delay);
    };
  };

  return { debouce, useIntersection, throttle };
}

export { useHelperHook };
