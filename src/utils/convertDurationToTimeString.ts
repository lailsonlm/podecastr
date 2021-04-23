export function convertDurationToTimeString(duration: number) {
    const hours = Math.floor(duration / 3600) // 3600 = 60 seg * 60 min
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = duration % 60;

    // adicionar o zero quando hours, min e sec tiverem apenas um caracter
    const timeString = [hours, minutes, seconds].map(unit => String(unit).padStart(2, '0')).join(':')

    return timeString;
}