import { useApp } from "../AppProvider";
import { useAuth0 } from "@auth0/auth0-react";

/**
 * Hook for calling a service
 *
 * @returns {function([serviceMethod, [p1, p2]], *=, *=): Promise<*|undefined>}
 * @example
 * import { serviceMethod } from "./path/to/service.js"
 * const service = useService();
 * const data = await service(
 *     [serviceMethod, [param1, param2]],
 *     "Success Message",
 *     "Failure Message",
 *   );
 */
const useService = ({ toast = true } = {}) => {
  const { doToast } = useApp();
  const { getAccessTokenSilently } = useAuth0();

  return async (
    callback,
    successMessage = "Operation completed successfully.",
    failureMessage = "Something went wrong."
  ) => {
    try {
      const token = await getAccessTokenSilently();
      const result = await callback[0].apply(
        this,
        [...callback[1], token] || []
      );
      toast && doToast("success", successMessage);
      return result;
    } catch (error) {
      const message = error?.message ?? failureMessage;
      const type = error?.type ?? "error";
      console.error(error);
      toast && doToast(type, message);
    }
  };
};

export default useService;
