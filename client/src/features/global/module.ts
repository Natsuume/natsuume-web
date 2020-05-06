import { handle, PageChangeActions } from "./interface";
import { history } from "../../utils/history";

handle.epic()
  .on(PageChangeActions.changePage, (({path}) => {
    history.push(path);
    return null;
  }))

export const usePageChangeModule = handle;