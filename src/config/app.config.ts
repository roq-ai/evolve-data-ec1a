interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Business Owner', 'Team Member'],
  tenantName: 'Business',
  applicationName: 'Evolve Data',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ["View data in assigned 'space'", 'Access integrated data from different sources'],
  ownerAbilities: [
    "Manage 'spaces' for business segments",
    "Assign users to each 'space'",
    "Set role-based permissions for users in a 'space'",
    'Integrate data from different sources using Airbyte API',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/37650ecd-b38d-479d-8965-7700217d7a8d',
};
