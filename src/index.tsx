import React from 'react';
import { arrayOf, exact, string } from 'prop-types';

type Tune = {
    tune: string;
    name: string;
    album: string;
};

type TunesProp = {
    tunes?: Tune[]
};

export const ReactTunesPlayer = ({ tunes }: TunesProp) => {
    return <div>player - playing</div>
}
ReactTunesPlayer.defaultProps = {
    tunes: []
};

ReactTunesPlayer.propTypes = {
    tunes: arrayOf(
        exact({
            tune: string.isRequired,
            name: string.isRequired,
            album: string.isRequired,
        }),
    ).isRequired,
};

export default ReactTunesPlayer;
