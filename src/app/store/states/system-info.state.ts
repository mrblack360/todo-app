import { BaseState, initialBaseState } from './base.state';
import { SystemInfo } from '@iapps/ngx-dhis2-http-client';

export interface SystemInfoState extends BaseState {
  systemInfo: SystemInfo;
}

export const initialSystemInfoState: SystemInfoState = {
  ...initialBaseState,
  systemInfo: null
};
