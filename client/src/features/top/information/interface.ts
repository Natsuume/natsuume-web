import { createModule } from 'typeless';
import { InformationSymbol } from './symbol';


export const [handle, InformationActions, getInformationState] = createModule(InformationSymbol)
  .withActions({
    $mounted: null,
    fetchInformationFulfilled: (info: InformationItem[]) => ({ payload: { info }})
  })
  .withState<InformationState>();

export interface InformationState {
  information: InformationItem[]
}

export interface InformationItem {
  content: string,
  date: Date,
  thumbnailUrl: string | null
}