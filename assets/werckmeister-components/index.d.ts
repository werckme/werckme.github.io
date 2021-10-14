import { IMidiEvent } from "./IMidiEvent";
import { ISoundFont } from './SfCompose';
export declare enum PlayerState {
    Stopped = 0,
    Preparing = 1,
    Playing = 2,
    Stopping = 3
}
export interface Task {
    id: string;
    name: string;
}
export interface TaskVisitor {
    newTasks(tasks: Task[]): any;
    done(task: Task): any;
}
export declare class WerckmeisterMidiPlayer {
    private static instaces;
    private instanceId;
    private _playerState;
    playedTime: number;
    midifile: any;
    private audioContext;
    private events;
    onPlayerStateChanged: (oldState: PlayerState, newState: PlayerState) => void;
    onMidiEvent: (event: IMidiEvent) => void;
    private sfComposer;
    private _sfRepository;
    private neededInstruments;
    private midiBuffer;
    soundFont: ISoundFont;
    private soundFontHash;
    private repoUrl;
    private audioNodes;
    rendererBufferSeconds: number;
    gain: number;
    constructor();
    get ppq(): number;
    private getSfRepository;
    get playerState(): PlayerState;
    set playerState(newState: PlayerState);
    initAudioEnvironment(event: Event): Promise<void>;
    private convertEvent;
    private preprocessEvents;
    private instrumentHash;
    private instrumentsHash;
    private getSoundfont;
    private currentTaskVisitor;
    load(base64MidiFileData: string, taskVisitor?: TaskVisitor | undefined): Promise<void>;
    private sleepAsync;
    play(): Promise<void>;
    stop(): void;
    private postWebworker;
    private startPlayback;
    setRepoUrl(url: string): void;
    /**
     * fires the midi events parallel to the playback
     */
    private startEventNotification;
}
