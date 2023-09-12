import { DataSourceInterface } from 'interfaces/data-source';
import { UserSpaceInterface } from 'interfaces/user-space';
import { BusinessInterface } from 'interfaces/business';
import { GetQueryInterface } from 'interfaces';

export interface SpaceInterface {
  id?: string;
  name: string;
  business_id: string;
  created_at?: any;
  updated_at?: any;
  data_source?: DataSourceInterface[];
  user_space?: UserSpaceInterface[];
  business?: BusinessInterface;
  _count?: {
    data_source?: number;
    user_space?: number;
  };
}

export interface SpaceGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  business_id?: string;
}
