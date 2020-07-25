/// <reference types="react" />
declare type Tune = {
    tune: string;
    name: string;
    album: string;
};
declare type TunesProp = {
    tunes?: Tune[];
};
export declare const ReactTunesPlayer: {
    ({ tunes }: TunesProp): JSX.Element;
    defaultProps: {
        tunes: never[];
    };
    propTypes: {
        tunes: import("prop-types").Validator<(Required<import("prop-types").InferProps<{
            tune: import("prop-types").Validator<string>;
            name: import("prop-types").Validator<string>;
            album: import("prop-types").Validator<string>;
        }>> | null | undefined)[]>;
    };
};
export default ReactTunesPlayer;
