export class DemoItemModel{
  constructor(
    public routePath: string,
    public title: string
  ) {
  }
}


export const demoPathList : DemoItemModel[] = [
  {
    routePath: 'onPushDemo',
    title: 'OnPush Strategy Demo'
  },

  {
    routePath: 'reactiveForm',
    title: 'Reactive form demo'
  },

  {
    routePath: 'ngrxRedux',
    title: 'NgRx Redux'
  },
  {
    routePath: 'onPushDemo',
    title: 'OnPush Strategy Demo'
  },
  {
    routePath: 'onPushDemo',
    title: 'OnPush Strategy Demo'
  },

]
