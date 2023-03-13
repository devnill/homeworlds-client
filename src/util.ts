import { Color } from "./types"

export function colorToHex(c: Color): string{
    if(c === 'RED'){
        return "#b91c1c"
    } else if (c === 'GREEN'){
        return "#15803d"
    } else if(c=== 'YELLOW'){
        return '#facc15'
    } else if (c==='BLUE'){
        return '#1d4ed8'
    }else {
        return '#000000'
    }
}
