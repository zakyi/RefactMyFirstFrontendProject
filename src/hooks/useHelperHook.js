import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSearchTimeout, getSearchState } from "../store";
import { useEffect } from "react";

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

  let observer;

  let observedTargets = new WeakMap();

  function useIntersection(ref, handle) {
    const handleIntersection = (allDOMs) => {
      //entries是所有DOM元素
      allDOMs.forEach((currentDOM) => {
        const currentDomIsIntersectingViewPort =
          currentDOM.isIntersecting || currentDOM.intersectionRatio > 0;

        const currentDomIsObserved = observedTargets.has(currentDOM.target);

        if (currentDomIsIntersectingViewPort && currentDomIsObserved) {
          const handle = observedTargets.get(currentDOM.target);
          handle();
          observer.unobserve(currentDOM.target);
          observedTargets.delete(currentDOM.target);
        }
      });
    };

    const option = {
      root: null,
      rootMargin: "0%",
      threshold: "0.1",
    };

    //只在第一次渲染页面的时候向所有图片插入观察器
    useEffect(() => {
      const target = ref.current;
      console.log(ref);
      if (!observer) {
        observer = new IntersectionObserver(handleIntersection, option);
      }
      observedTargets.set(target, handle);
      observer.observe(target);
      //下一次渲染的时候清除
      return () => {
        //无论观没观察到target，都清除掉
        observedTargets.delete(target);
        observer.unobserve(target);
      };
    }, []);
  }

  return { debouce, useIntersection };
}

export { useHelperHook };
