import { createModule } from "typeless"
import { PageChangeSymbol } from "./symbol"


export const [handle, PageChangeActions] = createModule(PageChangeSymbol)
  .withActions({
    changePage: (path: string) => ({payload: {path}})
  });

