import { SessionTerminationMessage } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export interface CreateUserTerminateSessionRequestBodyArg {
    readonly userIds: readonly string[];
    readonly userLogins: readonly string[];
}
export interface CreateGroupTerminateSessionRequestBodyArg {
    readonly groupIds: readonly string[];
}
export declare class SessionTerminationManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<SessionTerminationManager, "createUserTerminateSession" | "createGroupTerminateSession">);
    createUserTerminateSession(requestBody: CreateUserTerminateSessionRequestBodyArg): Promise<SessionTerminationMessage>;
    createGroupTerminateSession(requestBody: CreateGroupTerminateSessionRequestBodyArg): Promise<SessionTerminationMessage>;
}
export declare function serializeCreateUserTerminateSessionRequestBodyArg(val: CreateUserTerminateSessionRequestBodyArg): Json;
export declare function deserializeCreateUserTerminateSessionRequestBodyArg(val: any): CreateUserTerminateSessionRequestBodyArg;
export declare function serializeCreateGroupTerminateSessionRequestBodyArg(val: CreateGroupTerminateSessionRequestBodyArg): Json;
export declare function deserializeCreateGroupTerminateSessionRequestBodyArg(val: any): CreateGroupTerminateSessionRequestBodyArg;
