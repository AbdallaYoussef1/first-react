export interface IUserData{
        email:string,
        Password:string,
        Username:string,
}

export interface IpropsNav{
    companyName:string;
    about:string;
    IsloggedIn:boolean;
    setloggedIn:(val:boolean)=>void;
}
export interface IFormData{
    label:string;
    type:string;
    name:keyof IUserData;
    id:string;
/*     value:string */
}
