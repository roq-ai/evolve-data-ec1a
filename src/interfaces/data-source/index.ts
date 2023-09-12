import { SpaceInterface } from 'interfaces/space';
import { GetQueryInterface } from 'interfaces';

export interface DataSourceInterface {
  id?: string;
  name: string;
  type?: string;
  url?: string;
  space_id: string;
  created_at?: any;
  updated_at?: any;

  space?: SpaceInterface;
  _count?: {};
}

export interface DataSourceGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  type?: string;
  url?: string;
  space_id?: string;
}
