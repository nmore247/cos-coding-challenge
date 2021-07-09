export interface IAuth {
    authenticated: boolean,
    internalUserId: number,
    internalUserUUID: string,
    privileges: string,
    token: string,
    type: number,
    userId: number
}