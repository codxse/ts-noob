interface IUSerProps {
  name?: string;
  age?: number;
}

export class User {
  private userProps: IUSerProps;

  constructor(userProps: IUSerProps) {
    this.userProps = userProps;
  }

  get(propName: string): number | string {
    return this.userProps[propName];
  }

  set(userProps: IUSerProps): void {
    Object.assign(this.userProps, userProps);
  }
}