function useHook(params, mutationFn, callbacks = {}) {
  const { onError, onSuccess, onSettled } = callbacks;

  const hookOneResult = useHookOne(params);
  const hookTwoResult = useHookTwo(params);

  const mutation = useMutation({
    mutationFn: () => {
      if (!params.userId) throw new Error("userId is required");

      return mutationFn({
        ...hookOneResult,
        ...hookTwoResult,
      });
    },
    onError,
    onSuccess,
    onSettled,
  });

  return {
    ...mutation,
    ...hookOneResult,
    ...hookTwoResult,
  };
}
Usage: