import { serializeUsers } from "../schemas.generated.js";
import { deserializeUsers } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeUser } from "../schemas.generated.js";
import { deserializeUser } from "../schemas.generated.js";
import { serializeTrackingCode } from "../schemas.generated.js";
import { deserializeTrackingCode } from "../schemas.generated.js";
import { serializeUserFull } from "../schemas.generated.js";
import { deserializeUserFull } from "../schemas.generated.js";
import { Users } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { User } from "../schemas.generated.js";
import { TrackingCode } from "../schemas.generated.js";
import { UserFull } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { toMap } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
import { isJson } from "../json.js";
export type GetUsersQueryParamsArgUserTypeField = "all" | "managed" | "external";
export interface GetUsersQueryParamsArg {
    readonly filterTerm?: string;
    readonly userType?: GetUsersQueryParamsArgUserTypeField;
    readonly externalAppUserId?: string;
    readonly fields?: string;
    readonly offset?: number;
    readonly limit?: number;
    readonly usemarker?: boolean;
    readonly marker?: string;
}
export type CreateUserRequestBodyArgRoleField = "coadmin" | "user";
export type CreateUserRequestBodyArgStatusField = "active" | "inactive" | "cannot_delete_edit" | "cannot_delete_edit_upload";
export interface CreateUserRequestBodyArg {
    readonly name: string;
    readonly login?: string;
    readonly isPlatformAccessOnly?: boolean;
    readonly role?: CreateUserRequestBodyArgRoleField;
    readonly language?: string;
    readonly isSyncEnabled?: boolean;
    readonly jobTitle?: string;
    readonly phone?: string;
    readonly address?: string;
    readonly spaceAmount?: number;
    readonly trackingCodes?: readonly TrackingCode[];
    readonly canSeeManagedUsers?: boolean;
    readonly timezone?: string;
    readonly isExternalCollabRestricted?: boolean;
    readonly isExemptFromDeviceLimits?: boolean;
    readonly isExemptFromLoginVerification?: boolean;
    readonly status?: CreateUserRequestBodyArgStatusField;
    readonly externalAppUserId?: string;
}
export interface CreateUserQueryParamsArg {
    readonly fields?: string;
}
export interface GetUserMeQueryParamsArg {
    readonly fields?: string;
}
export interface GetUserByIdQueryParamsArg {
    readonly fields?: string;
}
export type UpdateUserByIdRequestBodyArgRoleField = "coadmin" | "user";
export type UpdateUserByIdRequestBodyArgStatusField = "active" | "inactive" | "cannot_delete_edit" | "cannot_delete_edit_upload";
export interface UpdateUserByIdRequestBodyArgNotificationEmailField {
    readonly email?: string;
}
export interface UpdateUserByIdRequestBodyArg {
    readonly enterprise?: string;
    readonly notify?: boolean;
    readonly name?: string;
    readonly login?: string;
    readonly role?: UpdateUserByIdRequestBodyArgRoleField;
    readonly language?: string;
    readonly isSyncEnabled?: boolean;
    readonly jobTitle?: string;
    readonly phone?: string;
    readonly address?: string;
    readonly trackingCodes?: readonly TrackingCode[];
    readonly canSeeManagedUsers?: boolean;
    readonly timezone?: string;
    readonly isExternalCollabRestricted?: boolean;
    readonly isExemptFromDeviceLimits?: boolean;
    readonly isExemptFromLoginVerification?: boolean;
    readonly isPasswordResetRequired?: boolean;
    readonly status?: UpdateUserByIdRequestBodyArgStatusField;
    readonly spaceAmount?: number;
    readonly notificationEmail?: UpdateUserByIdRequestBodyArgNotificationEmailField;
    readonly externalAppUserId?: string;
}
export interface UpdateUserByIdQueryParamsArg {
    readonly fields?: string;
}
export interface DeleteUserByIdQueryParamsArg {
    readonly notify?: boolean;
    readonly force?: boolean;
}
export class UsersManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<UsersManager, "getUsers" | "createUser" | "getUserMe" | "getUserById" | "updateUserById" | "deleteUserById">) {
        Object.assign(this, fields);
    }
    async getUsers(queryParams: undefined | GetUsersQueryParamsArg = {} satisfies GetUsersQueryParamsArg): Promise<Users> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/users") as string, { method: "GET", params: toMap(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeUsers(deserializeJson(response.text));
    }
    async createUser(requestBody: CreateUserRequestBodyArg, queryParams: undefined | CreateUserQueryParamsArg = {} satisfies CreateUserQueryParamsArg): Promise<User> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/users") as string, { method: "POST", params: toMap(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeUser(deserializeJson(response.text));
    }
    async getUserMe(queryParams: undefined | GetUserMeQueryParamsArg = {} satisfies GetUserMeQueryParamsArg): Promise<UserFull> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/users/me") as string, { method: "GET", params: toMap(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeUserFull(deserializeJson(response.text));
    }
    async getUserById(userId: string, queryParams: undefined | GetUserByIdQueryParamsArg = {} satisfies GetUserByIdQueryParamsArg): Promise<UserFull> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/users/", userId) as string, { method: "GET", params: toMap(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeUserFull(deserializeJson(response.text));
    }
    async updateUserById(userId: string, requestBody: UpdateUserByIdRequestBodyArg, queryParams: undefined | UpdateUserByIdQueryParamsArg = {} satisfies UpdateUserByIdQueryParamsArg): Promise<UserFull> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/users/", userId) as string, { method: "PUT", params: toMap(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeUserFull(deserializeJson(response.text));
    }
    async deleteUserById(userId: string, queryParams: undefined | DeleteUserByIdQueryParamsArg = {} satisfies DeleteUserByIdQueryParamsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/users/", userId) as string, { method: "DELETE", params: toMap(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
export function serializeGetUsersQueryParamsArgUserTypeField(val: GetUsersQueryParamsArgUserTypeField): Json {
    return val;
}
export function deserializeGetUsersQueryParamsArgUserTypeField(val: any): GetUsersQueryParamsArgUserTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"GetUsersQueryParamsArgUserTypeField\"";
    }
    if (val == "all") {
        return "all";
    }
    if (val == "managed") {
        return "managed";
    }
    if (val == "external") {
        return "external";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeGetUsersQueryParamsArg(val: GetUsersQueryParamsArg): Json {
    return { ["filterTerm"]: val.filterTerm, ["userType"]: val.userType == void 0 ? void 0 : serializeGetUsersQueryParamsArgUserTypeField(val.userType), ["externalAppUserId"]: val.externalAppUserId, ["fields"]: val.fields, ["offset"]: val.offset, ["limit"]: val.limit, ["usemarker"]: val.usemarker, ["marker"]: val.marker };
}
export function deserializeGetUsersQueryParamsArg(val: any): GetUsersQueryParamsArg {
    const filterTerm: undefined | string = isJson(val.filterTerm, "string") ? val.filterTerm : void 0;
    const userType: undefined | GetUsersQueryParamsArgUserTypeField = val.userType == void 0 ? void 0 : deserializeGetUsersQueryParamsArgUserTypeField(val.userType);
    const externalAppUserId: undefined | string = isJson(val.externalAppUserId, "string") ? val.externalAppUserId : void 0;
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    const offset: undefined | number = isJson(val.offset, "number") ? val.offset : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const usemarker: undefined | boolean = isJson(val.usemarker, "boolean") ? val.usemarker : void 0;
    const marker: undefined | string = isJson(val.marker, "string") ? val.marker : void 0;
    return { filterTerm: filterTerm, userType: userType, externalAppUserId: externalAppUserId, fields: fields, offset: offset, limit: limit, usemarker: usemarker, marker: marker } satisfies GetUsersQueryParamsArg;
}
export function serializeCreateUserRequestBodyArgRoleField(val: CreateUserRequestBodyArgRoleField): Json {
    return val;
}
export function deserializeCreateUserRequestBodyArgRoleField(val: any): CreateUserRequestBodyArgRoleField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateUserRequestBodyArgRoleField\"";
    }
    if (val == "coadmin") {
        return "coadmin";
    }
    if (val == "user") {
        return "user";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCreateUserRequestBodyArgStatusField(val: CreateUserRequestBodyArgStatusField): Json {
    return val;
}
export function deserializeCreateUserRequestBodyArgStatusField(val: any): CreateUserRequestBodyArgStatusField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateUserRequestBodyArgStatusField\"";
    }
    if (val == "active") {
        return "active";
    }
    if (val == "inactive") {
        return "inactive";
    }
    if (val == "cannot_delete_edit") {
        return "cannot_delete_edit";
    }
    if (val == "cannot_delete_edit_upload") {
        return "cannot_delete_edit_upload";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCreateUserRequestBodyArg(val: CreateUserRequestBodyArg): Json {
    return { ["name"]: val.name, ["login"]: val.login, ["isPlatformAccessOnly"]: val.isPlatformAccessOnly, ["role"]: val.role == void 0 ? void 0 : serializeCreateUserRequestBodyArgRoleField(val.role), ["language"]: val.language, ["isSyncEnabled"]: val.isSyncEnabled, ["jobTitle"]: val.jobTitle, ["phone"]: val.phone, ["address"]: val.address, ["spaceAmount"]: val.spaceAmount, ["trackingCodes"]: val.trackingCodes == void 0 ? void 0 : val.trackingCodes.map(function (item: TrackingCode): any {
            return serializeTrackingCode(item);
        }) as readonly any[], ["canSeeManagedUsers"]: val.canSeeManagedUsers, ["timezone"]: val.timezone, ["isExternalCollabRestricted"]: val.isExternalCollabRestricted, ["isExemptFromDeviceLimits"]: val.isExemptFromDeviceLimits, ["isExemptFromLoginVerification"]: val.isExemptFromLoginVerification, ["status"]: val.status == void 0 ? void 0 : serializeCreateUserRequestBodyArgStatusField(val.status), ["externalAppUserId"]: val.externalAppUserId };
}
export function deserializeCreateUserRequestBodyArg(val: any): CreateUserRequestBodyArg {
    const name: string = val.name;
    const login: undefined | string = isJson(val.login, "string") ? val.login : void 0;
    const isPlatformAccessOnly: undefined | boolean = isJson(val.isPlatformAccessOnly, "boolean") ? val.isPlatformAccessOnly : void 0;
    const role: undefined | CreateUserRequestBodyArgRoleField = val.role == void 0 ? void 0 : deserializeCreateUserRequestBodyArgRoleField(val.role);
    const language: undefined | string = isJson(val.language, "string") ? val.language : void 0;
    const isSyncEnabled: undefined | boolean = isJson(val.isSyncEnabled, "boolean") ? val.isSyncEnabled : void 0;
    const jobTitle: undefined | string = isJson(val.jobTitle, "string") ? val.jobTitle : void 0;
    const phone: undefined | string = isJson(val.phone, "string") ? val.phone : void 0;
    const address: undefined | string = isJson(val.address, "string") ? val.address : void 0;
    const spaceAmount: undefined | number = isJson(val.spaceAmount, "number") ? val.spaceAmount : void 0;
    const trackingCodes: undefined | readonly TrackingCode[] = isJson(val.trackingCodes, "array") ? val.trackingCodes.map(function (itm: Json): any {
        return deserializeTrackingCode(itm);
    }) as readonly any[] : void 0;
    const canSeeManagedUsers: undefined | boolean = isJson(val.canSeeManagedUsers, "boolean") ? val.canSeeManagedUsers : void 0;
    const timezone: undefined | string = isJson(val.timezone, "string") ? val.timezone : void 0;
    const isExternalCollabRestricted: undefined | boolean = isJson(val.isExternalCollabRestricted, "boolean") ? val.isExternalCollabRestricted : void 0;
    const isExemptFromDeviceLimits: undefined | boolean = isJson(val.isExemptFromDeviceLimits, "boolean") ? val.isExemptFromDeviceLimits : void 0;
    const isExemptFromLoginVerification: undefined | boolean = isJson(val.isExemptFromLoginVerification, "boolean") ? val.isExemptFromLoginVerification : void 0;
    const status: undefined | CreateUserRequestBodyArgStatusField = val.status == void 0 ? void 0 : deserializeCreateUserRequestBodyArgStatusField(val.status);
    const externalAppUserId: undefined | string = isJson(val.externalAppUserId, "string") ? val.externalAppUserId : void 0;
    return { name: name, login: login, isPlatformAccessOnly: isPlatformAccessOnly, role: role, language: language, isSyncEnabled: isSyncEnabled, jobTitle: jobTitle, phone: phone, address: address, spaceAmount: spaceAmount, trackingCodes: trackingCodes, canSeeManagedUsers: canSeeManagedUsers, timezone: timezone, isExternalCollabRestricted: isExternalCollabRestricted, isExemptFromDeviceLimits: isExemptFromDeviceLimits, isExemptFromLoginVerification: isExemptFromLoginVerification, status: status, externalAppUserId: externalAppUserId } satisfies CreateUserRequestBodyArg;
}
export function serializeCreateUserQueryParamsArg(val: CreateUserQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function deserializeCreateUserQueryParamsArg(val: any): CreateUserQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { fields: fields } satisfies CreateUserQueryParamsArg;
}
export function serializeGetUserMeQueryParamsArg(val: GetUserMeQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function deserializeGetUserMeQueryParamsArg(val: any): GetUserMeQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { fields: fields } satisfies GetUserMeQueryParamsArg;
}
export function serializeGetUserByIdQueryParamsArg(val: GetUserByIdQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function deserializeGetUserByIdQueryParamsArg(val: any): GetUserByIdQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { fields: fields } satisfies GetUserByIdQueryParamsArg;
}
export function serializeUpdateUserByIdRequestBodyArgRoleField(val: UpdateUserByIdRequestBodyArgRoleField): Json {
    return val;
}
export function deserializeUpdateUserByIdRequestBodyArgRoleField(val: any): UpdateUserByIdRequestBodyArgRoleField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"UpdateUserByIdRequestBodyArgRoleField\"";
    }
    if (val == "coadmin") {
        return "coadmin";
    }
    if (val == "user") {
        return "user";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeUpdateUserByIdRequestBodyArgStatusField(val: UpdateUserByIdRequestBodyArgStatusField): Json {
    return val;
}
export function deserializeUpdateUserByIdRequestBodyArgStatusField(val: any): UpdateUserByIdRequestBodyArgStatusField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"UpdateUserByIdRequestBodyArgStatusField\"";
    }
    if (val == "active") {
        return "active";
    }
    if (val == "inactive") {
        return "inactive";
    }
    if (val == "cannot_delete_edit") {
        return "cannot_delete_edit";
    }
    if (val == "cannot_delete_edit_upload") {
        return "cannot_delete_edit_upload";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeUpdateUserByIdRequestBodyArgNotificationEmailField(val: UpdateUserByIdRequestBodyArgNotificationEmailField): Json {
    return { ["email"]: val.email };
}
export function deserializeUpdateUserByIdRequestBodyArgNotificationEmailField(val: any): UpdateUserByIdRequestBodyArgNotificationEmailField {
    const email: undefined | string = isJson(val.email, "string") ? val.email : void 0;
    return { email: email } satisfies UpdateUserByIdRequestBodyArgNotificationEmailField;
}
export function serializeUpdateUserByIdRequestBodyArg(val: UpdateUserByIdRequestBodyArg): Json {
    return { ["enterprise"]: val.enterprise, ["notify"]: val.notify, ["name"]: val.name, ["login"]: val.login, ["role"]: val.role == void 0 ? void 0 : serializeUpdateUserByIdRequestBodyArgRoleField(val.role), ["language"]: val.language, ["isSyncEnabled"]: val.isSyncEnabled, ["jobTitle"]: val.jobTitle, ["phone"]: val.phone, ["address"]: val.address, ["trackingCodes"]: val.trackingCodes == void 0 ? void 0 : val.trackingCodes.map(function (item: TrackingCode): any {
            return serializeTrackingCode(item);
        }) as readonly any[], ["canSeeManagedUsers"]: val.canSeeManagedUsers, ["timezone"]: val.timezone, ["isExternalCollabRestricted"]: val.isExternalCollabRestricted, ["isExemptFromDeviceLimits"]: val.isExemptFromDeviceLimits, ["isExemptFromLoginVerification"]: val.isExemptFromLoginVerification, ["isPasswordResetRequired"]: val.isPasswordResetRequired, ["status"]: val.status == void 0 ? void 0 : serializeUpdateUserByIdRequestBodyArgStatusField(val.status), ["spaceAmount"]: val.spaceAmount, ["notificationEmail"]: val.notificationEmail == void 0 ? void 0 : serializeUpdateUserByIdRequestBodyArgNotificationEmailField(val.notificationEmail), ["externalAppUserId"]: val.externalAppUserId };
}
export function deserializeUpdateUserByIdRequestBodyArg(val: any): UpdateUserByIdRequestBodyArg {
    const enterprise: undefined | string = isJson(val.enterprise, "string") ? val.enterprise : void 0;
    const notify: undefined | boolean = isJson(val.notify, "boolean") ? val.notify : void 0;
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const login: undefined | string = isJson(val.login, "string") ? val.login : void 0;
    const role: undefined | UpdateUserByIdRequestBodyArgRoleField = val.role == void 0 ? void 0 : deserializeUpdateUserByIdRequestBodyArgRoleField(val.role);
    const language: undefined | string = isJson(val.language, "string") ? val.language : void 0;
    const isSyncEnabled: undefined | boolean = isJson(val.isSyncEnabled, "boolean") ? val.isSyncEnabled : void 0;
    const jobTitle: undefined | string = isJson(val.jobTitle, "string") ? val.jobTitle : void 0;
    const phone: undefined | string = isJson(val.phone, "string") ? val.phone : void 0;
    const address: undefined | string = isJson(val.address, "string") ? val.address : void 0;
    const trackingCodes: undefined | readonly TrackingCode[] = isJson(val.trackingCodes, "array") ? val.trackingCodes.map(function (itm: Json): any {
        return deserializeTrackingCode(itm);
    }) as readonly any[] : void 0;
    const canSeeManagedUsers: undefined | boolean = isJson(val.canSeeManagedUsers, "boolean") ? val.canSeeManagedUsers : void 0;
    const timezone: undefined | string = isJson(val.timezone, "string") ? val.timezone : void 0;
    const isExternalCollabRestricted: undefined | boolean = isJson(val.isExternalCollabRestricted, "boolean") ? val.isExternalCollabRestricted : void 0;
    const isExemptFromDeviceLimits: undefined | boolean = isJson(val.isExemptFromDeviceLimits, "boolean") ? val.isExemptFromDeviceLimits : void 0;
    const isExemptFromLoginVerification: undefined | boolean = isJson(val.isExemptFromLoginVerification, "boolean") ? val.isExemptFromLoginVerification : void 0;
    const isPasswordResetRequired: undefined | boolean = isJson(val.isPasswordResetRequired, "boolean") ? val.isPasswordResetRequired : void 0;
    const status: undefined | UpdateUserByIdRequestBodyArgStatusField = val.status == void 0 ? void 0 : deserializeUpdateUserByIdRequestBodyArgStatusField(val.status);
    const spaceAmount: undefined | number = isJson(val.spaceAmount, "number") ? val.spaceAmount : void 0;
    const notificationEmail: undefined | UpdateUserByIdRequestBodyArgNotificationEmailField = val.notificationEmail == void 0 ? void 0 : deserializeUpdateUserByIdRequestBodyArgNotificationEmailField(val.notificationEmail);
    const externalAppUserId: undefined | string = isJson(val.externalAppUserId, "string") ? val.externalAppUserId : void 0;
    return { enterprise: enterprise, notify: notify, name: name, login: login, role: role, language: language, isSyncEnabled: isSyncEnabled, jobTitle: jobTitle, phone: phone, address: address, trackingCodes: trackingCodes, canSeeManagedUsers: canSeeManagedUsers, timezone: timezone, isExternalCollabRestricted: isExternalCollabRestricted, isExemptFromDeviceLimits: isExemptFromDeviceLimits, isExemptFromLoginVerification: isExemptFromLoginVerification, isPasswordResetRequired: isPasswordResetRequired, status: status, spaceAmount: spaceAmount, notificationEmail: notificationEmail, externalAppUserId: externalAppUserId } satisfies UpdateUserByIdRequestBodyArg;
}
export function serializeUpdateUserByIdQueryParamsArg(val: UpdateUserByIdQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function deserializeUpdateUserByIdQueryParamsArg(val: any): UpdateUserByIdQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { fields: fields } satisfies UpdateUserByIdQueryParamsArg;
}
export function serializeDeleteUserByIdQueryParamsArg(val: DeleteUserByIdQueryParamsArg): Json {
    return { ["notify"]: val.notify, ["force"]: val.force };
}
export function deserializeDeleteUserByIdQueryParamsArg(val: any): DeleteUserByIdQueryParamsArg {
    const notify: undefined | boolean = isJson(val.notify, "boolean") ? val.notify : void 0;
    const force: undefined | boolean = isJson(val.force, "boolean") ? val.force : void 0;
    return { notify: notify, force: force } satisfies DeleteUserByIdQueryParamsArg;
}
