import { serializeCollaborationAllowlistExemptTargets } from '../schemas.generated.js';
import { deserializeCollaborationAllowlistExemptTargets } from '../schemas.generated.js';
import { serializeUser } from '../schemas.generated.js';
import { deserializeUser } from '../schemas.generated.js';
import { serializeCreateUserRequestBodyArg } from '../managers/users.generated.js';
import { deserializeCreateUserRequestBodyArg } from '../managers/users.generated.js';
import { serializeCollaborationAllowlistExemptTarget } from '../schemas.generated.js';
import { deserializeCollaborationAllowlistExemptTarget } from '../schemas.generated.js';
import { serializeCreateCollaborationWhitelistExemptTargetRequestBodyArg } from '../managers/collaborationAllowlistExemptTargets.generated.js';
import { deserializeCreateCollaborationWhitelistExemptTargetRequestBodyArg } from '../managers/collaborationAllowlistExemptTargets.generated.js';
import { serializeCreateCollaborationWhitelistExemptTargetRequestBodyArgUserField } from '../managers/collaborationAllowlistExemptTargets.generated.js';
import { deserializeCreateCollaborationWhitelistExemptTargetRequestBodyArgUserField } from '../managers/collaborationAllowlistExemptTargets.generated.js';
import { CollaborationAllowlistExemptTargets } from '../schemas.generated.js';
import { User } from '../schemas.generated.js';
import { CreateUserRequestBodyArg } from '../managers/users.generated.js';
import { CollaborationAllowlistExemptTarget } from '../schemas.generated.js';
import { CreateCollaborationWhitelistExemptTargetRequestBodyArg } from '../managers/collaborationAllowlistExemptTargets.generated.js';
import { CreateCollaborationWhitelistExemptTargetRequestBodyArgUserField } from '../managers/collaborationAllowlistExemptTargets.generated.js';
import { decodeBase64 } from '../utils.js';
import { getEnvVar } from '../utils.js';
import { getUuid } from '../utils.js';
import { Client } from '../client.generated.js';
import { JwtAuth } from '../jwtAuth.js';
import { JwtConfig } from '../jwtAuth.js';
const client: any = new Client({
  auth: new JwtAuth({
    config: JwtConfig.fromConfigJsonString(
      decodeBase64(getEnvVar('JWT_CONFIG_BASE_64'))
    ),
  }),
});
test('collaborationAllowlistExemptTargets', async function collaborationAllowlistExemptTargets(): Promise<any> {
  const exemptTargets: any =
    await client.collaborationAllowlistExemptTargets.getCollaborationWhitelistExemptTargets();
  if (!(exemptTargets.entries.length >= 0)) {
    throw 'Assertion failed';
  }
  const user: any = await client.users.createUser({
    name: getUuid(),
    login: ''.concat(getUuid(), '@boxdemo.com') as string,
    isPlatformAccessOnly: true,
  } satisfies CreateUserRequestBodyArg);
  const newExemptTarget: any =
    await client.collaborationAllowlistExemptTargets.createCollaborationWhitelistExemptTarget(
      {
        user: {
          id: user.id,
        } satisfies CreateCollaborationWhitelistExemptTargetRequestBodyArgUserField,
      } satisfies CreateCollaborationWhitelistExemptTargetRequestBodyArg
    );
  if (!(newExemptTarget.type == 'collaboration_whitelist_exempt_target')) {
    throw 'Assertion failed';
  }
  if (!(newExemptTarget.user.id == user.id)) {
    throw 'Assertion failed';
  }
  const exemptTarget: any =
    await client.collaborationAllowlistExemptTargets.getCollaborationWhitelistExemptTargetById(
      newExemptTarget.id
    );
  if (!(exemptTarget.id == newExemptTarget.id)) {
    throw 'Assertion failed';
  }
  if (!(exemptTarget.user.id == user.id)) {
    throw 'Assertion failed';
  }
  await client.collaborationAllowlistExemptTargets.deleteCollaborationWhitelistExemptTargetById(
    exemptTarget.id
  );
  expect(async () => {
    await client.collaborationAllowlistExemptTargets.getCollaborationWhitelistExemptTargetById(
      exemptTarget.id
    );
  }).rejects.toThrow();
  await client.users.deleteUserById(user.id);
});
export {};