export declare const MidiEventTypes: {
    NoteOn: number;
    NoteOff: number;
    Pc: number;
    Cc: number;
    PitchBend: number;
};
export interface IMidiEvent {
    type: number;
    noteName?: string;
    channel: number;
    track: number;
    param1: number;
    param2?: number;
    playTime: number;
    pitchbendValue?: number;
    absPositionTicks?: number;
}
