import {DemoItemModel} from "./demo-list.model";


export enum DemoRoutesPath {
  tmp = 'tmp',
  onPushDemo = 'onPushDemo',
  reactiveForm = 'reactiveForm',
  ngrxRedux = 'ngrxRedux',
  ngForms = 'ngForms',
  customReduxImpl = 'customReduxImpl'
}
export const demoPathList : DemoItemModel[] = [


  {
    routePath: DemoRoutesPath.tmp,
    title: 'Tmp'
  },
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
    routePath: DemoRoutesPath.customReduxImpl,
    title: 'Custom Redux pattern implementation'
  },

]
