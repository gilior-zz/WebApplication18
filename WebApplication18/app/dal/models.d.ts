export interface Box {
    title: string;
    text: string;
}
export declare enum Language {
    Hebrew = 0,
    English = 1,
}
export interface DataRequest {
    Language: Language;
}
export interface UpdatesRsponse extends DataResponse {
    Updates: Update[];
}
export interface ImageGalleryRequest extends DataRequest {
    CurrentImageID: number;
    NextData: NextData;
    DataAmount: DataAmount;
}
export declare enum DataAmount {
    All = 0,
    Single = 1,
}
export interface ImageGalleryItem {
    ID: number;
    ImagePath: string;
    ImageURL: string;
    ImageID: string;
    Visible: boolean;
    Order: number;
}
export interface ImageGalleryResponse extends DataResponse {
    Images: ImageGalleryItem[];
    Image: ImageGalleryItem;
}
export interface PressResponse extends DataResponse {
    PressItems: PressItem[];
}
export interface PressItem {
    ID: number;
    Text: string;
    TimeStamp: Date;
}
export interface Update {
    ID: number;
    Text: string;
    Order: number;
    TimeStamp: Date;
}
export interface CalendarRequest extends DataRequest {
    CurrentCalendarDate: Date;
    NextData: NextData;
}
export interface Program {
    ID: number;
    Name: string;
    Text: string;
    TimeStamp: Date;
    Order: number;
}
export interface CalendarItem {
    Text: string;
    Visible: boolean;
    TimeStamp: Date;
    DataDate: Date;
    ID: number;
}
export interface CV {
    ID: number;
    Text: string;
    TimeStamp: Date;
}
export declare enum NextData {
    Next = 0,
    Prev = 1,
    Currnet = 2,
}
export interface CalendarResponse extends DataResponse {
    CalendarItem: CalendarItem;
}
export interface CVResponse extends DataResponse {
    CVs: CV[];
}
export interface ProgramResponse extends DataResponse {
    Programs: Program[];
}
export interface DataResponse {
}
export interface MenuResponse extends DataResponse {
    MenuItems: MenuItem[];
}
export interface MessageResponse extends DataResponse {
}
export interface LinksResponse extends DataResponse {
    Links: Link[];
}
export interface Person {
    Name: string;
    Email: string;
}
export interface MessageRequest extends DataRequest {
    Message: Message;
}
export interface Message {
    Date: Date;
    Content: string;
    Sender: Person;
    IP: string;
}
export interface Link {
    ID: number;
    Text_Heb: string;
    Address_Heb: string;
    Text_Eng: string;
    Address_Eng: string;
    Order: number;
    TimeStamp: Date;
}
export interface MenuImageResponse extends DataResponse {
    ImageURL: string;
}
export interface MenuImageRequest extends DataRequest {
    PathName: string;
}
export interface MenuItem {
    ID: number;
    Order: number;
    Text_English: string;
    Text_Hebrew: string;
    isDefault: boolean;
    Name: string;
    ImageID: number;
    ImageURL: string;
}
export interface DataError {
    ErrorCode: number;
    ErrorText: string;
}