import { useLayoutEffect } from "react";

export function useResizing(ref, callback) {
  useLayoutEffect(() => {
    const targetEl = ref.current;
    if (!targetEl) 
      return;
    const observer = new ResizeObserver(() => {
      callback(targetEl);
    });

    observer.observe(targetEl);

    return () => { observer.disconnect(); }
  }, [ref, callback]);
}
