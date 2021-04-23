import { createContext } from 'react';

type Episode = {
    title: string;
    members: string;
    thumbnail: string;
    duration: number;
    url: string;
};

type PlayerContextData = {
    episodeList: Episode[]; // é um Array<>
    currentEpisodeIndex: number;
    isPlaying: boolean;
    play: (episode: Episode) => void;
    setPlayingState: (state: boolean) => void;
    tooglePlay: () => void;
};

// dentro do createContext informando o tipo de dado que queremos salvar (ex: 'lailson' / o formato será string)
export const PlayerContext = createContext({} as PlayerContextData);

/* 

foi importado na __app.tsx em volta de todos os componentes que terão acesso ao player

<PlayerContext.Provider value={'Lailson'}>

e foi importado na index do ../Player e na home (index.tsx) da aplicação através da variável:
const player = useContext(PlayerContext)

*/