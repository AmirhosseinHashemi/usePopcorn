import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(
    function () {
      function callBack(ev) {
        if (ev.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }
      document.addEventListener("keydown", callBack);

      return function () {
        document.removeEventListener("keydown", callBack);
      };
    },
    [action, key]
  );
}
