const mapping: Record<string, string> = {
  businesses: 'business',
  'data-sources': 'data_source',
  permissions: 'permission',
  spaces: 'space',
  users: 'user',
  'user-spaces': 'user_space',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
