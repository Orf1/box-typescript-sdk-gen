import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { JwtAuth } from "../jwtAuth.js";
export type RecentItemsManagerAuthField = DeveloperTokenAuth | CcgAuth | JwtAuth;
export interface GetRecentItemsOptionsArg {
    readonly fields?: string;
    readonly limit?: number;
    readonly marker?: string;
}
export declare class RecentItemsManager {
    readonly auth: RecentItemsManagerAuthField;
    constructor(fields: Omit<RecentItemsManager, "getRecentItems">);
    getRecentItems(options?: GetRecentItemsOptionsArg): Promise<any>;
}