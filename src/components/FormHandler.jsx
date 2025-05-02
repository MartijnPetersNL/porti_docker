import { useActionState } from "react";

const useFormHandler = (callback, initialState = null, permalink = null) => {
  const formState = useActionState(
    async (previousState, formData) => {
      let result;
      try {
        const response = await callback(formData);
        result = {
          previousState,
          data: response ? response : "OK",
        };
      } catch (error) {
        result = {
          previousState,
          error,
        };
      }
      return result;
    },
    initialState,
    permalink && permalink
  );
  return {
    formState,
  };
};

export default useFormHandler;
