import {DemoItemModel} from "./demo-list.model";


export enum DemoRoutesPath {
  onPushDemo = 'onPushDemo',
  reactiveForm = 'reactiveForm',
  ngrxRedux = 'ngrxRedux',
  ngForms = 'ngForms',
  ngRxPattern = 'ngRxPattern',
  tmp = 'tmp'
}
export const demoPathList : DemoItemModel[] = [
  {
    routePath: DemoRoutesPath.onPushDemo,
    title: 'OnPush Strategy Demo'
  },

  {
    routePath: DemoRoutesPath.reactiveForm,
    title: 'Reactive form demo'
  },

  {
    routePath: DemoRoutesPath.ngrxRedux,
    title: 'NgRx Redux'
  },
  {
    routePath: DemoRoutesPath.ngForms,
    title: 'Angular Forms'
  },
  {
    routePath: DemoRoutesPath.ngRxPattern,
    title: 'Ng Rx Architecture'
  },
  {
    routePath: DemoRoutesPath.tmp,
    title: 'Tmp'
  }

]
