import { UserInterface } from 'interfaces/user';
import { SpaceInterface } from 'interfaces/space';
import { PermissionInterface } from 'interfaces/permission';
import { GetQueryInterface } from 'interfaces';

export interface UserSpaceInterface {
  id?: string;
  user_id: string;
  space_id: string;
  permission_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  space?: SpaceInterface;
  permission?: PermissionInterface;
  _count?: {};
}

export interface UserSpaceGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  space_id?: string;
  permission_id?: string;
}
