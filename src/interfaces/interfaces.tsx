export interface IBook {
    id?: number|null,
    title: string,
    author: string,
    year: string
}

export interface IGlobalState {
    table: {
        listItems: IBook[],
        selectItem: IBook|null
    }
}

export interface IAction {
    type: string,
    payload: any
}