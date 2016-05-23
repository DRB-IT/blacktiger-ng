import {LocalStorageService, LocalStorageSubscriber} from 'angular2-localstorage/LocalStorageEmitter';

export { AuthorizationHeaderService } from './services/authorization-header/authorization-header.service';
export { AutoCommentRequestCancelService } from './services/auto-comment-request-cancel/auto-comment-request-cancel.service';
export { HistoryService } from './services/history/history.service';
export { LoginService } from './services/login/login.service';
export { MeetingService } from './services/meeting/meeting.service';
export { ParticipantService } from './services/participant/participant.service';
export { PhoneBookService } from './services/phone-book/phone-book.service';
export { PushEventService } from './services/push-event/push-event.service';
export { RoomService } from './services/room/room.service';
export { SipUserService } from './services/sip-user/sip-user.service';
export { StompService } from './services/stomp/stomp.service';
export { SummaryService } from './services/summary/summary.service';
export { SystemService } from './services/system/system.service';



export const TRANSLATE_PROVIDERS: any = [
    /*provide(TranslateLoader, {
        useFactory: (http: Http) => new TranslateStaticLoader(http),
        deps: [LocalStorageService]
    }),*/
    LocalStorageService
];
