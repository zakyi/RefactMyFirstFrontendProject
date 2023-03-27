// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { setSearchTimeout, getSearchState } from "../store";
import { useEffect, useState } from "react";
import { DEBOUNCE_DELAY } from "../static/config";

function useHelperHook() {
  // const { searchTimeout } = useSelector((state) => state.search);
  // const dispatch = useDispatch();
  const [timeout, setSearchTimeout] = useState(null);

  // function debouce(callback, delay) {
  //   return function (...args) {
  //     searchTimeout && clearTimeout(searchTimeout);
  //     dispatch(
  //       setSearchTimeout(
  //         setTimeout(function () {
  //           callback(...args);
  //         }, delay)
  //       )
  //     );
  //   };
  // }

  /*
   * 正确做法，每次输入新字符，SearchBar重新渲染的时候，timeout不会更新
   * 只有setSearchTimeout才会更新timeout
   * @param {any} callback
   * @param {any} delay
   * @returns
   * */
  function debouce(callback, delay) {
    return function (...args) {
      timeout && clearTimeout(timeout);
      setSearchTimeout(
        setTimeout(function () {
          callback(...args);
        }, delay)
      );
    };
  }

  /**
   * 错误做法，每次输入一个新的字符，SearchBar都会重新渲染，然后清除timeout
   * 所以每次不会清除timeout
   * @param {any} callback
   * @param {any} delay
   * @returns
   */
  // function debouce(callback, delay) {
  //   let timeout;
  //   return function (...args) {
  //     timeout && clearTimeout(timeout);
  //     timeout = setTimeout(function () {
  //       callback(...args);
  //     }, delay);
  //   };
  // }

  // let observer;

  // let observedTargets = new WeakMap();

  // function useIntersection(ref, handle) {
  //   const handleIntersection = (entries) => {
  //     //entries是所有DOM元素
  //     entries.forEach((currentDOM) => {
  //       const currentDomIsIntersectingViewPort =
  //         currentDOM.isIntersecting || currentDOM.intersectionRatio > 0;

  //       const currentDomIsObserved = observedTargets.has(currentDOM.target);

  //       if (currentDomIsIntersectingViewPort && currentDomIsObserved) {
  //         const handle = observedTargets.get(currentDOM.target);
  //         handle();
  //         observer.unobserve(currentDOM.target);
  //         observedTargets.delete(currentDOM.target);
  //       }
  //     });
  //   };

  //   const option = {
  //     root: null,
  //     rootMargin: "0%",
  //     threshold: "0.1",
  //   };

  //   //只在第一次渲染页面的时候向所有图片插入观察器
  //   useEffect(() => {
  //     const target = ref.current;
  //     if (!observer) {
  //       observer = new IntersectionObserver(handleIntersection, option);
  //     }
  //     observedTargets.set(target, handle);
  //     observer.observe(target);
  //     //下一次渲染的时候清除
  //     return () => {
  //       //无论观没观察到target，都清除掉
  //       observedTargets.delete(target);
  //       observer.unobserve(target);
  //     };
  //   }, []);

  function useIntersection(ref, handle) {
    const handleIntersection = (entries, observer) => {
      //entries是所有DOM元素
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
