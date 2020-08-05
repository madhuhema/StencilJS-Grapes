export interface IAppTabsData {
    select: () => void;
    unselect: () => void;
    name: string;
}

export interface IAppTabsHeaderData extends IAppTabsData {
    id: string;
}

export interface IAppTabsContentData extends IAppTabsData { }