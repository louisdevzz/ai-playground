export const sliceString = (str: string, numberSlice: number) =>{
    if(str.length > numberSlice){
        return str.slice(0,numberSlice) + "..."
    }
    return str;
}