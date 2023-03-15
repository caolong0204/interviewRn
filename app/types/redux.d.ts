export interface IResponse {
  status?: number;
  data?: any;
}

export interface IAction {
  type: string;
  payload?: any;
}
