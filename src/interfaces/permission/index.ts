import { UserSpaceInterface } from 'interfaces/user-space';
import { GetQueryInterface } from 'interfaces';

export interface PermissionInterface {
  id?: string;
  name: string;
  description?: string;
  created_at?: any;
  updated_at?: any;
  user_space?: UserSpaceInterface[];

  _count?: {
    user_space?: number;
  };
}

export interface PermissionGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
}
